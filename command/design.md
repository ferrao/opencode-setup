---
command: design
agent: architect
subtask: true
description: Create System Design Document
---

You will create a System Design Document from the Project Requirements Document.

**Your instructions**

1. If @docs/ai/prd.md does not exist, write the following message to the user and terminate the command: "Project requirements not found, run /plan first"

2. Load @docs/ai/prd.md

3. The following is additional context:

!`cat ~/.config/opencode/context/patterns-catalog.md`

!`if cat @docs/ai/prd.md| grep -Eiq "api|backend|service|microservice"; then cat "~/config/.opencode/context/domains/backend-api.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "frontend|ui|web app"; then cat "~/config/.opencode/context/domains/frontend.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "database|sql|postgres|mysql|mongodb|redis|query"; then cat "~/config/.opencode/context/domains/database.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "auth|oauth|oidc|sso|jwt|rbac|iam"; then cat "~/config/.opencode/context/domains/auth-security.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "gdpr|privacy|pii|dpa|compliance|hipaa"; then cat "~/config/.opencode/context/domains/privacy-compliance.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "aws|gcp|azure|cloud run|lambda|kubernetes|k8s|docker"; then cat "~/config/.opencode/context/domains/cloud-infra.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "observability|logging|metrics|tracing|opentelemetry|otel"; then cat "~/config/.opencode/context/domains/observability.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "testing|qa|coverage|unit|integration|e2e|contract"; then cat "~/config/.opencode/context/domains/testing.md"; fi`
!`if cat @docs/ai/prd.md| grep -Eiq "performance|latency|throughput|rps|p95|scale|scalability"; then cat "~/config/.opencode/context/domains/performance.md"; fi`

4. Start the design
