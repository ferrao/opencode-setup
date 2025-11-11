# Domain Sheet: Privacy and Compliance

## Purpose
This sheet provides key architectural considerations for privacy, data protection, and regulatory compliance.
It serves as a quick reference when reasoning about systems that handle personal or sensitive data responsibly and comply with applicable laws and standards.

## Usage Instructions
- Apply these considerations when designing or reviewing data flows, storage, or integrations involving personal or regulated information.
- Use them to reason about how privacy and compliance influence data models, access control and system design.
- Do **not** enforce compliance principles blindly; align them with jurisdictional context, company policies and risk tolerance.
- Ensure reasoning remains consistent with domains like security, data persistence and cloud infrastructure.

---

## Common Considerations

- Identify and classify personal and sensitive data early in design; document what data is collected, where it flows and how it is stored or shared.
- Apply data minimization principles — collect and retain only what is necessary for the intended purpose.
- Ensure compliance with applicable data protection regulations (e.g. GDPR, HIPAA, LGPD), including consent management and data subject rights.
- Implement pseudonymization or anonymization techniques where possible to reduce exposure of personal data.
- Maintain clear data retention and deletion policies; automate data lifecycle management to enforce them consistently.
- Protect data in transit and at rest through encryption and control access through strict authentication and authorization mechanisms.
- Ensure cross-border data transfers comply with regional legal frameworks (e.g. EU adequacy decisions, standard contractual clauses).
- Keep detailed audit trails for data access, changes and disclosures to demonstrate accountability and support regulatory inquiries.
- Include privacy and compliance checks in change management and release processes to detect risks before deployment.
- Educate developers and operators about privacy-by-design and security-by-default principles as part of the system culture.
