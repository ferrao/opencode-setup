# Domain Sheet: Cloud and Infrastructure

## Purpose
This sheet provides key architectural considerations for cloud environments and infrastructure design.
It serves as a quick reference when reasoning about deployment models, scalability, cost efficiency and operational resilience across environments.

## Usage Instructions
- Apply these considerations when designing or reviewing infrastructure architecture, deployment topology, or cloud strategy.
- Use them to guide trade-offs between scalability, reliability, cost and maintainability.
- Do **not** treat them as mandatory standards; adapt them to the project’s scale, maturity and regulatory context.
- Ensure reasoning aligns with related domains such as security, observability and performance.

---

## Common Considerations

- Choose an appropriate deployment model (serverless, containers, VMs, PaaS, self-hosted) based on scalability needs, operational complexity and team expertise.
- Define infrastructure as code (IaC) using tools like Terraform or OpenTofu to ensure reproducibility and version control.
- Separate environments (development, staging, production) with clearly defined promotion and rollback processes.
- Design for horizontal scalability and statelessness whenever possible; avoid hidden state in application instances.
- Implement automated provisioning and configuration management for consistent and reliable deployments.
- Adopt multi-region or multi-zone strategies for high availability, considering latency and data residency requirements.
- Monitor and optimize cloud costs continuously through resource tagging, autoscaling policies and idle resource detection.
- Integrate security from the start — network segmentation, firewall rules, IAM policies and least privilege principles.
- Use managed cloud services (databases, queues, storage) where they reduce maintenance burden without locking into proprietary constraints.
- Plan disaster recovery and backup strategies, including recovery time objectives (RTO) and recovery point objectives (RPO).
