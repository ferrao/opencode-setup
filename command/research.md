---
command: research
agent: researcher
subtask: false
description: Interactive, resumable research.
---

You are doing some research on a new software project.

**Request:** $ARGUMENTS

**Your instructions:**

1. If @docs/ai/summary.md does not exist AND the **Request** is empty, please tell the user they need to provide information regarding the project, such as:
  - What problem are you trying to solve?
  - What type of application or system are you building?
  - Who are the target users?
  - Any specific technologies or constraints you're considering?
  - Business context or goals
2. If @docs/ai/summary.md already exists, load it as context, it contains last known state for the research.
3. The following is additional context:

!`cat ~/.config/opencode/context/open-questions.md`
!`cat ~/.config/opencode/context/patterns-catalog.md`
!`cat ~/.config/opencode/context/risk-taxonomy.md`

!`if echo "$ARGUMENTS" | grep -Eiq "frontend|ui|web app"; then cat "~/config/.opencode/context/domains/frontend.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "api|backend|service|microservice"; then cat "~/config/.opencode/context/domains/backend-api.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "database|sql|postgres|mysql|mongodb|redis|query"; then cat "~/config/.opencode/context/domains/database.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "auth|oauth|oidc|sso|jwt|rbac|iam"; then cat "~/config/.opencode/context/domains/auth-security.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "aws|gcp|azure|cloud run|lambda|kubernetes|k8s|docker"; then cat "~/config/.opencode/context/domains/cloud-infra.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "observability|logging|metrics|tracing|opentelemetry|otel"; then cat "~/config/.opencode/context/domains/observability.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "performance|latency|throughput|rps|p95|scale|scalability"; then cat "~/config/.opencode/context/domains/performance.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "testing|qa|coverage|unit|integration|e2e|contract"; then cat "~/config/.opencode/context/domains/testing.md"; fi`
!`if echo "$ARGUMENTS" | grep -Eiq "gdpr|privacy|pii|dpa|compliance|hipaa"; then cat "~/config/.opencode/context/domains/privacy-compliance.md"; fi`

4. Start the research
