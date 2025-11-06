---
command: audit
agent: auditor
subtask: false
description: Audit an existing codebase.
---

You are trying to research and understand an existing software project.

**Your instructions**

1. If @docs/ai/summary.md already exists, perform the following actions:
  - load @docs/ai/summary.md as context
  - delete the file @docs/ai/summary.md
  - Write the following message to the user: "An existing project summary was found, will use it as a basis for my work".

2. The following is additional context:

!`cat ~/.config/opencode/context/open-questions.md`
!`cat ~/.config/opencode/context/patterns-catalog.md`
!`cat ~/.config/opencode/context/risk-taxonomy.md`

!`if echo "$ARGUMENTS" | grep -Eiq "api|backend|service|microservice"; then cat "~/config/.opencode/context/domains/backend-api.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "frontend|ui|web app"; then cat "~/config/.opencode/context/domains/frontend.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "database|sql|postgres|mysql|mongodb|redis|query"; then cat "~/config/.opencode/context/domains/database.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "auth|oauth|oidc|sso|jwt|rbac|iam"; then cat "~/config/.opencode/context/domains/auth-security.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "gdpr|privacy|pii|dpa|compliance|hipaa"; then cat "~/config/.opencode/context/domains/privacy-compliance.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "aws|gcp|azure|cloud run|lambda|kubernetes|k8s|docker"; then cat "~/config/.opencode/context/domains/cloud-infra.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "observability|logging|metrics|tracing|opentelemetry|otel"; then cat "~/config/.opencode/context/domains/observability.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "testing|qa|coverage|unit|integration|e2e|contract"; then cat "~/config/.opencode/context/domains/testing.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "performance|latency|throughput|rps|p95|scale|scalability"; then cat "~/config/.opencode/context/domains/performance.md"; fi`

3. Start the audit
