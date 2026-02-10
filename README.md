# [OPENCODE](http://opencode.ai) Setup

## Commands

- `/joke`: Tell a Joke regarding some subject
- `/research`: Tells the Researcher Agent to perform the necessary research for a new project
- `/audit`: Use the Auditor Agent to research and understand an existing project
- `/analyse`: Tells the Analyst Agent to create a Product Requirements Document
- `/design`: Tells the Architect to create a System Design Document
- `/plan`: Use the Project Manager Agent to plan the development of a project

## Agents

- **Researcher**: Used for new projects, to gather project info and generate a project summary describing what needs to be built.
- **Auditor**: Use for existing projects, to gather project info and generate a project summary describing what is being built.
- **Analyst**: Create and update product requirements and user stories for the project.
- **Architect**: Make decisions on stack, tools, architecture and project scaffolding, uses [Mermaid](https://mermaid.js.org/) for UML diagrams
- **Project Manager**: Create and update a Project Plan, uses [Mermaid](https://mermaid.js.org/) for Gantt charts and [burn-it-down](https://github.com/ferrao/burn-it-down) for burn down charts 
- **Frontend dev**: Write frontend code [TODO]
- **Backend dev**: Write backend code [TODO]
- **Tester**: Validate code quality [TODO]
