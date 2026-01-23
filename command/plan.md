---
command: plan
agent: project-manager
subtask: true
description: Create Project Plan
---

You will create a Project Plan Document from the Project Requirements Document.

**Your instructions**

1. If @docs/ai/prd.md does not exist, write the following message to the user and terminate the command: "Project requirements not found, run /analyze first"

2. The following is additional context:

!`cat ~/.config/opencode/context/patterns-catalog.md`
!`cat ~/.config/opencode/context/project-management-methodologies.md`
!`cat ~/.config/opencode/context/project-metrics-kpis.md`
!`cat ~/.config/opencode/context/mermaid.md`
!`cat ~/.config/opencode/context/project-planning-best-practices.md`

3. Create the initial project plan from PRD
