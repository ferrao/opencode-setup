# [OPENCODE](http://opencode.ai) Setup

## Commands

- `/joke`: Tell a Joke regarding some subject
- `/research`: Perform the necessary research for a new project
- `/audit`: Research and understand an existing project  
- `/plan`: Plan the development of a project

## Agents

- **Researcher**: used for new projects, to gather project info and generate a `summary.md` file that describes what needs to be built.
- **Auditor**:   use for existing projects, to gather project info and generate a `summary.md` that describes what is being built.
- **Planner**: Generates the Product Requirements Document `prd.md` with all the functional requirements and user stories for the project.
- **Project Manager**: Break down the PRD into subtasks for other agents to perform
- **Architect**: Make decisions on stack, tools, architecture and scaffold the project with folders and files.
- **Frontend dev**: write frontend code
- **Backend dev**: write backend code
- **Tester**: Validate code quality
