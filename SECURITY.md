# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

We take the security of Shop With Joan very seriously. If you discover a security vulnerability, please do NOT create a public issue on GitHub.

Instead, please send an email or submit a private security advisory on GitHub.

### Security Defenses in Place
1. **GitHub Actions CI/CD**: Automatic ESLint, TypeScript check, and strict production build verification.
2. **Vulnerability Scanner / Lazarus Scanner**:
   - Automated OSV and Trivy file system vulnerability scanning.
   - Lazarus supply-chain attack protection and high-severity npm audit.
   - Pull-request dependency review blocking hijacked or malicious package insertions.
3. **Secret Detection**: TruffleHog deep scan to block secret, key, or token leaks.
4. **CodeQL SAST**: Automated static analysis for XSS, SQL injection, and authorization bypasses.
5. **CodeRabbit**: Automated AI code review enforcing strict OWASP security standards on all PRs.
6. **HTTP Security Headers**: HSTS preload, X-Frame-Options (clickjacking prevention), nosniff, strict Referrer-Policy, and Permissions-Policy.
