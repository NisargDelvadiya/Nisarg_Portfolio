"use client";

import React, { Component } from "react";

/**
 * Reusable Section Error Boundary
 * 
 * Protects parent layouts by isolating client-side errors within specific widgets or sections.
 * If a component throws an error (e.g. GSAP failure, media load exception, or DOM mutation issue),
 * only this section displays a neat recovery fallback rather than breaking the entire page.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    try {
      console.warn(
        `[Portfolio ErrorBoundary caught in ${this.props.sectionName || "Section"}]:`,
        error,
        errorInfo
      );
    } catch {
      // Safe fallback if console fails
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="w-full py-12 px-6 flex flex-col items-center justify-center text-center select-none">
          <div className="max-w-md w-full p-6 rounded-2xl bg-red-50/80 border-2 border-red-300 text-red-900 flex flex-col items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <h3 className="font-extrabold text-sm uppercase tracking-wider">
              {this.props.sectionName || "Section"} Temporarily Unavailable
            </h3>
            <p className="text-xs opacity-80 leading-relaxed">
              A minor rendering glitch occurred in this section. You can retry loading it or continue exploring the portfolio.
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              title="Retry loading this section"
              aria-label="Retry loading this section"
              className="mt-2 px-4 py-2 bg-[#AA0505] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-[#6A0C0B] active:scale-95 transition-all cursor-pointer"
            >
              🔄 Retry Section
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
