# Domain Sheet: Performance

## Purpose
This sheet provides key architectural considerations for system performance and optimization.
It serves as a quick reference when identifying, preventing and addressing performance bottlenecks across application, data and infrastructure layers.

## Usage Instructions
- Apply these considerations when designing or reviewing system performance characteristics, scalability strategies and resource efficiency.
- Use them to reason about trade-offs between responsiveness, throughput and cost.
- Do **not** over-optimize prematurely; focus first on measurable impact and user-facing performance.
- Ensure alignment with related domains such as observability, infrastructure and databases.

---

## Common Considerations

- Establish measurable performance goals early (latency, throughput, concurrency limits) aligned with user and business requirements.
- Identify and monitor critical paths — focus optimization efforts on the 20% of operations that drive 80% of resource usage.
- Optimize data access patterns with caching layers (in-memory, CDN, database query caching) while ensuring cache invalidation strategies are reliable.
- Design APIs and queries to minimize over-fetching or under-fetching; implement pagination, batching, or streaming where appropriate.
- Profile system components regularly to locate bottlenecks in CPU, memory, I/O, or network layers before scaling horizontally.
- Use asynchronous processing and message queues for long-running or non-blocking workloads to maintain responsiveness.
- Leverage load testing, stress testing, and chaos testing to validate system behavior under expected and extreme conditions.
- Implement autoscaling policies and load balancing strategies to handle traffic spikes gracefully without manual intervention.
- Continuously monitor performance metrics post-deployment and feed insights back into capacity planning and optimization cycles.
- Balance optimization efforts with maintainability — prefer clear, scalable designs over micro-optimizations that add complexity.
