# Patterns Catalog

A compact menu of common software/system patterns.  
For each pattern: What it is, when to use it, key pros/cons.  
Use this to propose 2–3 candidate patterns, compare trade-offs, and recommend one with a migration path.

---

### 1) Monolith
- **What:** Single deployable unit (codebase + DB). Simple to build and operate.
- **Use when:** Small team, early product, rapidly evolving scope, low scale.
- **Pros:** Fast delivery; simple CI/CD/observability; easy refactors.
- **Cons:** Can grow brittle; team coupling; slower independent scaling.

### 2) Modular Monolith
- **What:** Monolith with strict internal modules and boundaries (enforced by code/CI).
- **Use when:** Want monolith simplicity but clearer domain boundaries.
- **Pros:** Fewer operational burdens than microservices; easier refactors.
- **Cons:** Enforcing boundaries requires discipline; deploy still all-or-nothing.

### 3) Microservices
- **What:** Suite of small, independently deployable services around business capabilities.
- **Use when:** Large org/teams; distinct scaling needs; clear domain boundaries.
- **Pros:** Independent scaling/deploys; fault isolation; tech diversity.
- **Cons:** Higher ops cost; distributed complexity; cross-service data and consistency.

### 4) Event-Driven Architecture (EDA)
- **What:** Components interact via events; producers emit, consumers react.
- **Use when:** Loose coupling, async workflows, extensibility, audit trails.
- **Pros:** Decoupling; scalability; natural audit of events.
- **Cons:** Debugging flows is harder; eventual consistency; consumer drift.

### 5) Pub/Sub
- **What:** Messaging pattern: publishers send to topics; subscribers consume.
- **Use when:** One-to-many notifications, fan-out, integration triggers.
- **Pros:** Decouples producers/consumers; elastic scaling; buffering.
- **Cons:** At-least-once delivery semantics; ordering/duplication handling required.

### 6) CQRS
- **What:** Separate models/paths for commands (writes) and queries (reads).
- **Use when:** Read/write workloads differ; complex read models; performance needs.
- **Pros:** Optimized reads; clearer intent; isolates write complexity.
- **Cons:** More moving parts; data sync/consistency challenges.

### 7) Event Sourcing
- **What:** Persist state as a sequence of domain events, rebuild state by replay.
- **Use when:** Strong audit requirements; temporal analytics; complex invariants.
- **Pros:** Perfect audit; time travel; flexible projections.
- **Cons:** Steep learning curve; schema evolution for events; replays/ops overhead.

### 8) Saga (Choreography/Orchestration)
- **What:** Manage distributed transactions across services via steps and compensations.
- **Use when:** Multi-service workflows need eventual consistency without 2PC.
- **Pros:** Resilient long-running flows; clear compensation.
- **Cons:** Complex to reason about; failure handling and idempotency required.

### 9) Workflow Engine / Orchestrator
- **What:** Central engine (e.g., Temporal, Camunda) drives steps, retries, timeouts.
- **Use when:** Complex business processes, SLAs, retries/timeouts, human-in-loop.
- **Pros:** Observability of flows; durable retries; versioned workflows.
- **Cons:** Vendor/runtime dependency; operational learning curve.

### 10) Serverless (FaaS + BaaS)
- **What:** Functions on-demand; managed services for storage, auth, queues.
- **Use when:** Spiky traffic; small teams; fast prototyping; pay-per-use.
- **Pros:** Minimal ops; auto-scale; rapid iteration.
- **Cons:** Cold starts; vendor lock-in; local dev/testing parity issues.

### 11) Layered (N-Tier)
- **What:** Presentation → Application → Domain → Infrastructure layers.
- **Use when:** Traditional enterprise apps; clear separation-of-concerns.
- **Pros:** Familiar; testable boundaries; maintainable structure.
- **Cons:** Can become anemic/rigid; risk of “layer for layer’s sake.”

### 12) Hexagonal (Ports & Adapters)
- **What:** Domain core isolated; adapters for I/O; boundaries via ports.
- **Use when:** Domain-centric design; need replaceable tech/integration edges.
- **Pros:** Tech-agnostic core; high testability; clean boundaries.
- **Cons:** More abstractions; learning curve; upfront design effort.

### 13) Clean Architecture
- **What:** Entities/Use Cases at center; outer rings for frameworks/drivers.
- **Use when:** Long-lived systems; changing frameworks; domain longevity.
- **Pros:** Framework independence; maintainability; easier testing.
- **Cons:** Boilerplate and indirection; initial velocity hit.

### 14) API Gateway / BFF
- **What:** Single entry point for clients; routing, auth, rate limits, aggregation. BFF tailors APIs per client.
- **Use when:** Multiple clients; need policy offload; facade over services.
- **Pros:** Simplifies clients; centralized cross-cutting concerns; performance via aggregation.
- **Cons:** Gateway as SPOF if mismanaged; versioning and drift; added hop.

### 15) Strangler Fig (Migration)
- **What:** Incrementally replace legacy by routing slices to new components.
- **Use when:** Legacy modernization with minimal risk/downtime.
- **Pros:** Controlled risk; parallel build; measurable progress.
- **Cons:** Temporary complexity; dual maintenance; careful routing needed.

---

## Comparison Tips (for the Agent)
- Align pattern to **team size, skills, scale, compliance, latency, and change rate**.
- Score candidates on **delivery speed, operability, cost, resilience, and evolvability**.
- Prefer **simplest pattern** that meets requirements; add complexity **only** for proven needs.
- Always propose a **migration path** (e.g., Monolith → Modular Monolith → Services for hotspots).

