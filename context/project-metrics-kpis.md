# Project Metrics and KPIs

Key metrics and Key Performance Indicators (KPIs) for tracking project health, progress, and team performance.
Use these to measure, monitor, and improve project execution.

---

## Velocity Metrics

### Story Points Completed
- **What:** Total story points completed in a sprint/iteration
- **How to measure:** Sum of story points for all completed user stories
- **When to use:** Sprint planning, forecasting future capacity
- **What it tells you:** Team's delivery capacity, helps predict future velocity
- **Baseline:** Establish over 3-5 sprints, use moving average for stability

### Tasks Completed
- **What:** Number of tasks completed per time period
- **How to measure:** Count of closed tasks in sprint/week/month
- **When to use:** Tracking productivity, especially for non-story work
- **What it tells you:** Raw throughput, helps identify trends in completion rate

### Items in Progress
- **What:** Number of items currently being worked on
- **How to measure:** Count of tasks/stories in "In Progress" status
- **When to use:** Monitoring WIP limits, identifying bottlenecks
- **What it tells you:** Workflow efficiency, if team is overloaded or underutilized

## Time Metrics

### Cycle Time
- **What:** Time from when work starts on an item until it's completed
- **How to measure:** Average (or median) time between "Started" and "Completed" timestamps
- **When to use:** Process improvement, identifying slow-moving work
- **What it tells you:** How quickly team can complete work once started, efficiency of process

### Lead Time
- **What:** Time from when a request is made until it's delivered
- **How to measure:** Average (or median) time from "Backlog" to "Completed"
- **When to use:** Customer expectations, planning delivery commitments
- **What it tells you:** Overall responsiveness, includes wait time before work starts

### Average Task Duration
- **What:** Average time to complete individual tasks
- **How to measure:** Sum of all task durations divided by number of tasks
- **When to use:** Estimation accuracy, sprint planning
- **What it tells you:** Typical task length, helps improve estimates

## Flow Metrics

### Work in Progress (WIP)
- **What:** Number of items currently in active development
- **How to measure:** Count of items in "In Progress" states across all team members
- **When to use:** Monitoring flow, enforcing WIP limits
- **What it tells you:** Team's current workload, risk of context switching

### Throughput
- **What:** Number of items completed per time period
- **How to measure:** Count of items completed in week/sprint/month
- **When to use:** Capacity planning, forecasting delivery
- **What it tells you:** Team's delivery rate over time, helps predict future output

### Flow Efficiency
- **What:** Percentage of time work is actively being worked on vs. waiting
- **How to measure:** (Active work time / Total cycle time) × 100
- **When to use:** Process optimization, identifying waste
- **What it tells you:** How much time is spent on actual work vs. waiting/bottlenecks

## Quality Metrics

### Defect Rate
- **What:** Number of defects found per unit of work
- **How to measure:** Defects per 1000 lines of code, or defects per 100 story points
- **When to use:** Quality assessment, trend analysis
- **What it tells you:** Code quality, effectiveness of testing

### Defect Escape Rate
- **What:** Percentage of defects found in production vs. before release
- **How to measure:** (Production defects / Total defects) × 100
- **When to use:** Quality gate assessment, process improvement
- **What it tells you:** Effectiveness of QA/testing before release

### Rejection Rate
- **What:** Percentage of work rejected or requiring rework
- **How to measure:** (Rejected items / Total completed items) × 100
- **When to use:** Process quality, understanding definition of "done"
- **What it tells you:** Clarity of requirements, quality of initial work

## Planning Metrics

### Estimation Accuracy
- **What:** How close actual time spent matches estimated time
- **How to measure:** (Actual time - Estimated time) / Estimated time
- **When to use:** Improving estimation process, adjusting expectations
- **What it tells you:** Team's ability to estimate, helps calibrate future estimates

### Sprint Forecast Accuracy
- **What:** Percentage of planned work actually completed
- **How to measure:** (Story points completed / Story points planned) × 100
- **When to use:** Planning effectiveness, capacity management
- **What it tells you:** Over/under-commitment patterns, planning discipline

### Milestone On-Time Delivery
- **What:** Percentage of milestones completed by target date
- **How to measure:** (Milestones on time / Total milestones) × 100
- **When to use:** Stakeholder reporting, overall project health
- **What it tells you:** Ability to meet commitments, realistic planning

## Team Metrics

### Team Morale
- **What:** Qualitative measure of team satisfaction and engagement
- **How to measure:** Anonymous surveys, retro feedback, 1:1 check-ins
- **When to use:** Retrospectives, team health monitoring
- **What it tells you:** Risk of burnout, team dynamics, retention risk

### Team Velocity Stability
- **What:** Variability in velocity from sprint to sprint
- **How to measure:** Standard deviation of velocity over recent sprints
- **When to use:** Predicting future capacity, identifying instability
- **What it tells you:** Reliability of velocity for forecasting, team consistency

### Utilization Rate
- **What:** Percentage of team's available time spent on productive work
- **How to measure:** (Productive hours / Available hours) × 100
- **When to use:** Resource allocation, identifying over/underutilization
- **What it tells you:** Team workload balance, need for capacity adjustment

## Risk Metrics

### Risks Identified vs. Resolved
- **What:** Ratio of new risks identified to risks closed/mitigated
- **How to measure:** (New risks / Resolved risks) per period
- **When to use:** Risk management effectiveness
- **What it tells you:** Whether risk backlog is growing or shrinking

### Blocked Tasks
- **What:** Number or percentage of tasks currently blocked
- **How to measure:** Count of tasks with "Blocked" status
- **When to use:** Issue escalation, dependency management
- **What it tells you:** Process efficiency, dependency bottlenecks

### Critical Path Variance
- **What:** Difference between planned and actual critical path duration
- **How to measure:** (Actual critical path / Planned critical path) - 1
- **When to use:** Schedule risk assessment, deadline management
- **What it tells you:** Schedule health, likelihood of on-time completion

## Business Value Metrics

### Value Delivered
- **What:** Business value or impact of completed work
- **How to measure:** Story points weighted by business priority, or custom value score
- **When to use:** Prioritization, stakeholder communication
- **What it tells you:** Team's impact on business goals, alignment with priorities

### Customer Satisfaction
- **What:** Measure of customer/stakeholder satisfaction with deliverables
- **How to measure:** CSAT scores, NPS, feedback surveys
- **When to use:** Product quality assessment, relationship management
- **What it tells you:** Whether deliveries meet expectations, areas for improvement

## Visualization Metrics

### Burndown Chart
- **What:** Visual representation of remaining work over time
- **Components:** Ideal burndown line vs. actual remaining work
- **When to use:** Daily sprint tracking, forecasting completion
- **What it tells you:** Whether team is on track, if velocity is consistent

### Burnup Chart
- **What:** Visual representation of completed work vs. total scope
- **Components:** Scope line, completed work line, progress percentage
- **When to use:** Scope change management, overall project progress
- **What it tells you:** How much work is done, how scope is changing

### Cumulative Flow Diagram
- **What:** Stacked area chart showing work distribution across workflow states
- **Components:** Count of items in each state over time
- **When to use:** Lead time analysis, WIP tracking, bottleneck identification
- **What it tells you:** Workflow health, cycle time trends, queue sizes

---

## Metric Selection Guidelines

- **Start simple**: Begin with 3-5 key metrics, don't overwhelm team with too many
- **Align with goals**: Choose metrics that directly support project objectives
- **Track trends**: Focus on trends over time, not single data points
- **Context matters**: Metrics should always be interpreted with project context
- **Avoid vanity metrics**: Track metrics that drive action, not just report status
- **Team participation**: Involve team in selecting and interpreting metrics
- **Regular review**: Periodically assess whether metrics are still valuable

## Common Pitfalls

- **Gaming the system**: Team manipulating metrics to look good rather than delivering value
- **Focusing on single metric**: Optimizing for one metric at expense of others (e.g., velocity vs. quality)
- **Ignoring context**: Comparing metrics across different teams/projects without context
- **Measuring without action**: Collecting metrics but not using them to drive improvement
- **Frequency obsession**: Checking metrics too frequently leading to over-analysis
- **Blame culture**: Using metrics to blame individuals rather than improve process
