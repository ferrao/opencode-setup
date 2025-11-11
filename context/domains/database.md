# Domain Sheet: Data Persistence and Databases

## Purpose
This sheet provides key architectural considerations for database and data persistence design.
It serves as a quick reference when reasoning about data models, storage strategies and data consistency mechanisms.

## Usage Instructions
- Apply these considerations when designing or reviewing how data is stored, queried and managed.
- Use them to reason about trade-offs in schema design, normalization, transactions and scalability.
- Do **not** treat them as rigid rules; align decisions with the system’s performance, reliability and cost requirements.
- Ensure reasoning remains consistent with other domain areas such as backend APIs, security and cloud infrastructure.

---

## Common Considerations

- Choose database types based on access patterns and data relationships (e.g., relational for structured data, document or key-value stores for unstructured or high-volume data).
- Define clear ownership of each data domain; avoid overlapping schemas or shared mutable state across bounded contexts.
- Prioritize data integrity through appropriate normalization, constraints, and referential integrity — but denormalize selectively for performance-critical use cases.
- Explicitly define consistency models (strong, eventual, causal) and align them with business requirements and user experience expectations.
- Optimize query performance early through proper indexing, caching, and query profiling; monitor for slow queries in production.
- Plan schema evolution carefully with versioned migrations and backward-compatible changes; automate migrations as part of CI/CD.
- Separate operational databases from analytics workloads to avoid performance contention and simplify scaling strategies.
- Design for fault tolerance and recovery: implement backups, replication and failover mechanisms tested under realistic scenarios.
- Consider data lifecycle management — retention policies, archival strategies and data deletion requirements (especially for compliance like GDPR).
- Keep application code independent of specific database engines through ORM abstractions or repository patterns, when feasible.
