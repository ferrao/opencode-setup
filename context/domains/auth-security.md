# Domain Sheet: Authentication and Security

## Purpose
This sheet provides key architectural considerations for authentication, authorization, and overall system security.
It serves as a quick reference when reasoning about systems that protect data, manage identity securely and comply with relevant privacy and security standards.

## Usage Instructions
- Apply these considerations when designing or reviewing identity, access control and data protection mechanisms.
- Use them to evaluate trade-offs between usability, security and maintainability.
- Do **not** enforce all points blindly; tailor them to the project’s threat model, compliance obligations and risk profile.
- Ensure reasoning aligns with other domain areas such as backend, databases and cloud infrastructure.

---

## Common Considerations

- Choose an authentication strategy appropriate to the use case (e.g. OAuth2/OIDC for delegated access, SAML for enterprise SSO, passwordless for simplicity and UX).
- Implement secure credential storage using proven libraries and salted hashing algorithms
- Apply the principle of least privilege throughout the system — both in code and in infrastructure — to limit the impact of potential breaches.
- Separate authentication (identity verification) from authorization (access control); design role-based or attribute-based access models as needed.
- Use short-lived access tokens and refresh tokens with strict rotation and invalidation policies to minimize exposure.
- Encrypt data in transit (TLS) and at rest (disk or database-level encryption) and regularly review certificate management.
- Validate and sanitize all user inputs at API boundaries to prevent injection attacks (SQLi, XSS, command injection).
- Implement comprehensive audit logging for authentication events, permission changes and administrative actions.
- Adopt secure session management practices, ensuring session invalidation on logout and inactivity timeouts.
- Regularly review dependencies and third-party components for known vulnerabilities; integrate automated scanning into CI/CD pipelines.
