# Security Policy

## Overview
This security policy outlines the vulnerability disclosure, security practices, and incident reporting procedures for the official portfolio of **Nisarg Jayesh Delvadiya** ([https://nisargjayeshdelvadiya.com](https://nisargjayeshdelvadiya.com)).

## Supported Versions
Only the latest deployed production version of the portfolio receives proactive security updates, dependency patches, and vulnerability remediations.

| Version | Supported          | Next.js Branch | Notes |
| :------ | :----------------: | :------------- | :---- |
| `0.1.x` (main) | :white_check_mark: | Next.js 16+ App Router | Active Production Release |
| `< 0.1.0` | :x: | Legacy | Deprecated |

---

## Security Architecture & Best Practices
The portfolio is engineered with defense-in-depth principles:

1. **Content Security Policy (CSP)**
   - Strict `script-src`, `style-src`, `img-src`, `connect-src`, and `media-src` directives configured in the HTTP response headers.
   - Prevents cross-site scripting (XSS), malicious script injections, and clickjacking attacks.
   - Strict frame controls: `X-Frame-Options: SAMEORIGIN` and `frame-ancestors 'self'`.

2. **Zero Personal Data Harvesting**
   - In alignment with the **Digital Personal Data Protection (DPDP) Act, 2023 of India**, the website does not solicit user logins, database registrations, or store confidential personal identification data.

3. **Secure Edge Infrastructure & HTTPS**
   - Enforces `Strict-Transport-Security` (HSTS) with `max-age=63072000; includeSubDomains; preload`.
   - All network traffic is encrypted via TLS 1.3 edge endpoints.
   - MIME sniffing protection enabled with `X-Content-Type-Options: nosniff`.

4. **Continuous Dependency Auditing**
   - Regular automated vulnerability scanning via `npm audit` and Dependabot alerts.

---

## Reporting a Vulnerability
If you discover a potential security vulnerability, security flaw, or misconfiguration in this website:

1. **Do NOT open a public GitHub issue.**
2. Send a confidential report directly to:
   - **Contact**: Nisarg Jayesh Delvadiya
   - **Email**: [nisarg.delvadiya1@zohomail.in](mailto:nisarg.delvadiya1@zohomail.in)
   - **Subject**: `[SECURITY VULNERABILITY REPORT] - <Brief Summary>`

### What to Include:
- Description of the vulnerability and its potential impact
- Detailed reproduction steps (PoC URL, request payload, or browser environment)
- Affected files, components, or endpoints
- Any suggested remediations or mitigations

### Response Timeline:
- **Initial Acknowledgement**: Within 24–48 hours
- **Assessment & Triage**: Within 3–5 business days
- **Fix & Deployment**: Prompt release to production followed by public disclosure alignment
