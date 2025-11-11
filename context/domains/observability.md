# Domain Sheet: Observability

## Purpose
This sheet provides key architectural considerations for observability design and implementation.
It serves as a quick reference when reasoning about systems that are measurable, diagnosable and continuously improvable through metrics, logs and traces.

## Usage Instructions
- Apply these considerations when designing or reviewing monitoring, logging, and tracing strategies.
- Use them to reason about how to detect, debug and understand system behavior under normal and degraded conditions.
- Do **not** enforce full observability tooling from the start; adapt to system complexity and operational maturity.
- Ensure reasoning aligns with other domains such as cloud infrastructure, performance and testing.

---

## Common Considerations

- Establish a clear observability strategy covering metrics, logs, and traces — ensure they provide complementary insights.
- Define service-level objectives (SLOs) and service-level indicators (SLIs) that reflect real user experience (e.g. latency, error rate, availability).
- Centralize logging and ensure logs are structured, timestamped and include correlation identifiers for distributed tracing.
- Use tracing to capture request flows across microservices or API boundaries, enabling root cause analysis of performance or reliability issues.
- Implement metrics collection at multiple levels (infrastructure, application, and business KPIs) using standardized formats (e.g. Prometheus, OpenTelemetry).
- Configure alerting thresholds to balance sensitivity and noise; use escalation policies and on-call rotations for incident response.
- Include observability instrumentation early in development, not as an afterthought; build it into pipelines and frameworks.
- Protect observability data — apply retention policies and access controls consistent with privacy and compliance standards.
- Visualize key metrics and dashboards for stakeholders at different levels (engineering, operations, management) to promote shared understanding.
- Continuously review observability coverage and incident data to identify blind spots and improve monitoring over time.
