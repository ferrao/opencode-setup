# Domain Sheet: Backend Development and APIs

## Purpose
This sheet provides key architectural considerations for backend and API design.
It serves as a quick reference when reasoning about backend structure, communication patterns, and service interfaces.

## Usage Instructions
- Apply these considerations when designing or reviewing backend components, services, or API layers.
- Use them to identify trade-offs, highlight risks, and suggest design patterns or best practices.
- Do **not** treat them as mandatory requirements; adapt them to the project’s scale, domain, and constraints.
- Keep reasoning grounded in the project’s **goals**, **functional requirements** and **non-functional requirements** (e.g., scalability, maintainability, interoperability).

---

## Common Considerations

- Clarify service boundaries and responsibilities for each backend component; avoid “god services” by keeping APIs focused on a clear business capability.
- Choose appropriate API styles per use case (REST, GraphQL, gRPC, event-driven) and avoid mixing styles arbitrarily within the same bounded context.
- Define stable API contracts (request/response schemas, status codes, error formats) and plan for non-breaking evolution via versioning or backward-compatible changes.
- Enforce strict input validation and output normalization at API boundaries to protect internal models and keep external-facing behavior predictable.
- Make idempotency rules explicit for write operations (e.g. POST vs PUT vs PATCH, idempotency keys for payment/booking flows) to avoid duplicate side effects.
- Standardize pagination, filtering, and sorting patterns for list endpoints so that clients have a consistent, predictable way to query data.
- Separate domain logic from transport concerns (controllers vs application services vs domain models) to keep the codebase testable and adaptable to new interfaces.
- Design for failure and resilience: timeouts, retries with backoff, circuit breakers, and clear error contracts between internal services.
- Decide on synchronous vs asynchronous communication patterns based on latency, coupling, and throughput needs; use messaging for long-running or high-volume workflows.
- Document APIs using an agreed standard (e.g. OpenAPI / Swagger) and keep documentation generated from or tightly coupled to source to reduce drift.
