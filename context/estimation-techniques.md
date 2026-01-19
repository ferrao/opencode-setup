# Task Estimation Techniques

Reference for estimating task effort and duration in project planning.
Use these techniques to create realistic estimates that guide project planning and tracking.

---

## Estimation Overview

### Purpose of Estimation
- Predict time and effort required to complete work
- Enable realistic planning and resource allocation
- Provide baseline for tracking progress and velocity
- Support decision-making on feasibility and prioritization

### Estimation Principles
- Involve the people who will do the work
- Break down tasks until they can be estimated with confidence
- Use historical data when available
- Re-estimate as more information becomes available
- Document assumptions behind estimates
- Track actual vs. estimated to improve future estimates
- Include time for all activities: development, testing, review, coordination

---

## Estimation Techniques

### 1) Story Points (Relative Estimation)

#### What It Is
Estimate task complexity relative to baseline tasks using abstract units (story points). Focus on complexity, effort, and uncertainty rather than time.

#### When to Use
- Agile projects with stable team velocity
- Projects where historical time data is unavailable
- When team composition is relatively stable
- Work that has similar characteristics to previous projects
- When you want to estimate quickly without detailed analysis

#### How to Use
1. **Choose baseline tasks**: Select 2-3 simple, well-understood tasks as reference points
2. **Assign baseline points**: Give them small values (e.g., 1, 2, or 3 points)
3. **Estimate new tasks**: Compare each new task to baselines and assign points
4. **Use Fibonacci sequence**: 1, 2, 3, 5, 8, 13, 21, 34 (or modified: 1, 2, 3, 5, 8, 13, 20, 40, 100)

#### Pros
- Quick to estimate once team understands scale
- Accounts for complexity, not just time
- Team-focused estimation process
- Reduces anchoring bias compared to time-based estimation
- Works well with velocity tracking

#### Cons
- Doesn't directly translate to calendar time initially
- Requires stable team to maintain consistent velocity
- Can be confusing to stakeholders unfamiliar with points
- May need calibration period to establish baseline
- Velocity takes several sprints to stabilize

#### Best Practices
- Calibrate team's understanding of point scale through estimation exercises
- Re-estimate if team composition changes significantly
- Track velocity over 3-5 sprints to establish reliable baseline
- Use velocity for forecasting, not single sprint commitments
- Discuss and agree on why tasks have different point values
- Keep estimation sessions timeboxed (max 1-2 hours)
- Avoid over-analysis—trust team's collective wisdom

### 2) Time-Based Estimation

#### What It Is
Estimate tasks in actual time units (hours or days). Most traditional and intuitive approach.

#### When to Use
- Fixed-date projects with hard deadlines
- Projects requiring specific timeline commitments
- When stakeholders need calendar dates immediately
- Projects with well-understood work and clear scope
- When team members work part-time or have multiple projects

#### How to Use
1. **Break down tasks**: Ensure tasks are small enough to estimate with confidence (1-5 days max)
2. **Estimate ideal hours**: Estimate hours as if no interruptions
3. **Apply efficiency factor**: Divide by 0.6-0.8 to account for meetings, email, context switching
4. **Add contingency**: Add 10-20% buffer for known work, 30-50% for uncertain work
5. **Convert to days**: 1 day = 6-8 hours of productive work

#### Pros
- Directly translates to calendar time
- Easy for stakeholders to understand
- Works well with Gantt charts and timeline planning
- Clear for fixed-date commitments
- Intuitive for team members

#### Cons
- Doesn't account for complexity differences
- Team members estimate differently based on experience
- Can lead to anchoring bias (influenced by manager's expectations)
- May include "padding" to be safe
- Requires frequent re-estimation as work progresses

#### Best Practices
- Break down tasks until each can be estimated within ±20% accuracy
- Involve multiple team members in estimation to avoid bias
- Document assumptions behind time estimates
- Track actual vs. estimated to improve future estimates
- Use three-point estimation for uncertain tasks
- Consider individual team member velocity (some work faster/slower)
- Include time for: development, testing, code review, documentation, meetings

### 3) Three-Point Estimation (PERT)

#### What It Is
Use three estimates (optimistic, most likely, pessimistic) and calculate weighted average to account for uncertainty. Based on Program Evaluation and Review Technique (PERT).

#### When to Use
- High-uncertainty tasks or projects
- Tasks with significant unknowns or dependencies
- When you need more rigorous estimation for critical tasks
- Projects where estimates drive significant decisions or commitments
- When single-point estimate feels unreliable

#### How to Use
1. **Estimate three values**:
   - **Optimistic (O)**: Best case if everything goes perfectly
   - **Most likely (M)**: Expected case with normal challenges
   - **Pessimistic (P)**: Worst case with significant problems
2. **Calculate expected (E)**: (O + 4M + P) / 6
3. **Calculate standard deviation (SD)**: (P - O) / 6
4. **Create range**: E ± 2SD gives 95% confidence interval

#### Example
- Optimistic: 3 hours
- Most likely: 5 hours
- Pessimistic: 10 hours
- Expected: (3 + 20 + 10) / 6 = 5.5 hours
- Standard deviation: (10 - 3) / 6 = 1.2 hours
- Range: 5.5 ± 2.4 = 3.1 to 7.9 hours (95% confidence)

#### Pros
- Accounts for uncertainty explicitly
- Provides confidence intervals, not single point
- More realistic than optimistic estimates
- Helps identify high-risk tasks (wide range = high uncertainty)
- Good for critical path tasks

#### Cons
- Takes more time to generate three estimates
- Requires experience to estimate pessimistic case accurately
- Can be overkill for routine, well-understood tasks
- May confuse stakeholders unfamiliar with PERT
- Still subject to estimation bias in all three points

#### Best Practices
- Use for critical path tasks and high-risk items
- Involve multiple team members to generate three points
- Document why pessimistic estimate is pessimistic
- Re-estimate when new information reduces uncertainty
- Use ranges when communicating with stakeholders
- Consider using simplified version (optimistic, realistic) for routine tasks

### 4) Planning Poker

#### What It Is
Team-based, gamified estimation where members estimate independently then discuss differences. Reduces anchoring bias and promotes shared understanding.

#### When to Use
- New teams establishing velocity
- Complex or ambiguous tasks requiring discussion
- When you want to reduce estimation bias
- Agile projects with frequent estimation sessions
- When tasks have varying complexity that needs team consensus

#### How to Use
1. **Select task**: Product owner or team selects task to estimate
2. **Clarify task**: Discuss and ensure everyone understands what "done" means
3. **Estimate privately**: All team members select estimate card (story points or hours)
4. **Reveal simultaneously**: All team members show estimates at same time
5. **Discuss outliers**: If estimates vary significantly, discuss why
6. **Re-estimate**: Team estimates again after discussion
7. **Repeat**: Continue until estimates converge (typically 2-3 rounds)

#### Pros
- Reduces anchoring bias from senior members
- Uncovers misunderstanding about task requirements
- Promotes shared understanding and team ownership
- Good for new teams or complex tasks
- Makes estimation engaging rather than tedious

#### Cons
- Takes time, especially for many tasks
- Requires all team members to be available
- May not scale well with large task lists
- Can become repetitive for routine tasks
- Requires good facilitation to keep efficient

#### Best Practices
- Timebox estimation sessions (1-2 hours max)
- Use for backlog grooming, not full planning sessions
- Focus on highest-priority or most complex tasks
- Establish baseline with a few simple tasks first
- Let team decide when estimates are "close enough"
- Avoid over-discussing—trust the convergence process
- Use relative estimation (story points) for poker, not hours

---

## Choosing the Right Technique

### Decision Matrix

| Situation | Recommended Technique |
|-----------|-------------------|
| Agile project, stable team | Story Points |
| Fixed deadline, stakeholder commitments | Time-Based |
| High uncertainty, critical tasks | Three-Point (PERT) |
| Complex tasks, team alignment needed | Planning Poker |
| Mixed project phases | Use different techniques for different phases |
| Well-understood, routine work | Simple Time-Based or Story Points |
| New team, first estimation | Planning Poker + Story Points |
| Risk analysis for critical path | Three-Point (PERT) |

### Technique Combinations

#### Story Points + Time-Based
- Use story points for development team estimation
- Convert to time-based estimates for stakeholder communication using historical velocity
- Example: "Team averages 25 points per sprint, so 8-point task is ~2 days"

#### Three-Point + Time-Based
- Use three-point estimation for high-uncertainty tasks
- Use expected value (E) as time-based estimate for planning
- Use range (E ± 2SD) for risk assessment

#### Planning Poker + Story Points
- Use planning poker for estimation process
- Use story points as the actual units
- Good for establishing velocity in new teams

---

## Estimation Process

### Preparation
1. **Understand the task**: Clarify requirements, scope, and acceptance criteria
2. **Identify dependencies**: Note any external dependencies or blockers
3. **Break down if needed**: Large tasks should be broken into smaller estimable chunks
4. **Gather relevant information**: Reference similar past work, technical specs, designs

### Estimation
1. **Choose technique**: Select appropriate technique based on task and project context
2. **Estimate**: Apply chosen technique to generate estimate
3. **Review for reasonableness**: Does estimate feel right? Compare to similar tasks
4. **Document assumptions**: Write down what the estimate assumes (resources, tools, knowledge)

### Validation
1. **Cross-check with other estimates**: Does this estimate fit with overall project timeline?
2. **Check constraints**: Does estimate fit within calendar constraints, deadlines, resource availability?
3. **Review with team**: Do team members agree the estimate is reasonable?
4. **Identify risks**: What could cause estimate to be wrong? What's the impact?

### Tracking
1. **Record actual time/effort**: Track actual hours or points for each completed task
2. **Compare to estimate**: Calculate difference (actual - estimated)
3. **Analyze patterns**: Are estimates consistently high/low? For what types of work?
4. **Improve future estimates**: Adjust estimation approach based on learnings
5. **Share insights**: Discuss estimation accuracy in retrospectives

---

## Estimation Anti-Patterns

### What to Avoid

1. **Panic Padding**
   - Adding large buffers "just to be safe"
   - Solution: Use explicit contingency and document uncertainty

2. **Optimism Bias**
   - Assuming best-case scenario will happen
   - Solution: Use three-point estimation or get team consensus

3. **Anchoring**
   - First number mentioned influences everyone's estimates
   - Solution: Use planning poker or independent estimation first

4. **One-Person Estimation**
   - Single person estimates without team input
   - Solution: Involve multiple people, especially those who will do the work

5. **Vague Tasks**
   - Estimating "implement user authentication" without clarity
   - Solution: Break down to specific, estimable tasks

6. **Ignoring Historical Data**
   - Not learning from past project estimates
   - Solution: Track actual vs. estimated and use patterns

7. **Changing Techniques Frequently**
   - Switching estimation methods mid-project without reason
   - Solution: Choose approach and stick with it, document reasons for changes

8. **Forcing Estimates**
   - Manager telling team what estimate should be
   - Solution: Trust team's estimates, discuss discrepancies constructively

---

## Estimation for Different Contexts

### New Team, First Project
- Use Planning Poker to establish shared understanding
- Start with Story Points to build velocity baseline
- Document estimation process and decisions
- Expect 3-5 sprints for velocity to stabilize

### Highly Regulated/Compliance Project
- Use Time-Based estimation for stakeholder commitments
- Use Three-Point estimation for critical path
- Document all assumptions thoroughly
- Build in larger contingency for compliance unknowns

### Research/Exploration Project
- Use Time-Based with high contingency (50-100%)
- Estimate in phases, not for entire project
- Re-estimate frequently as more is learned
- Use milestones to check and adjust estimates

### Maintenance/Support Work
- Use historical data from similar tickets
- Estimate based on categories (e.g., small/medium/large bug)
- Track time for each category to refine estimates
- Adjust estimates as system changes become more/less complex

---

## Estimation Accuracy Targets

### By Project Phase

| Phase | Typical Accuracy | Notes |
|-------|----------------|-------|
| Initial Planning | ±50% | High uncertainty, use wide ranges |
| Detailed Planning | ±30% | More information, better estimates |
| Execution | ±20% | Ongoing adjustments as work progresses |
| Near Completion | ±10% | Less uncertainty, predictable |

### By Task Complexity

| Complexity | Accuracy Target | Estimation Approach |
|------------|-----------------|-------------------|
| Simple/Routine | ±20% | Quick estimation, minimal discussion |
| Moderate | ±30% | Team consensus, check against similar tasks |
| Complex | ±50% | Three-point estimation, expert review |
| Highly Uncertain | ±100% | Phased approach, re-estimate as you learn |

### Tracking Improvement
- Measure estimation accuracy over time: (|Actual - Estimated| / Estimated) × 100
- Target: Improve accuracy by 10-20% over project lifecycle
- Identify patterns: Certain work types consistently over/underestimated
- Adjust estimation approach based on learnings

---

## Communicating Estimates

### With Development Team
- Show full range when using three-point estimation
- Discuss assumptions and dependencies
- Share historical accuracy data
- Be transparent about uncertainty

### With Stakeholders
- Provide expected value with confidence interval
- Explain what drives estimate (complexity, dependencies)
- Flag high-risk tasks with wide ranges
- Revisit estimates if scope changes significantly

### With Management
- Summarize estimation approach and methodology
- Highlight critical path tasks and their estimates
- Show contingency and how it was calculated
- Provide options for different timeline/scope tradeoffs

---

## Common Estimation Mistakes

### Forgetting Non-Development Time
- Missing time for: code review, testing, documentation, deployment
- Solution: Create checklist of all work types and include in estimates

### Ignoring Dependencies
- Not accounting for waiting on other teams, approvals, hardware
- Solution: Explicitly list dependencies and their impact

### Underestimating Communication
- Forgetting time for meetings, coordination, handoffs
- Solution: Add 10-20% for coordination overhead

### Over-Optimistic on New Work
- Assuming new technology will be learned quickly
- Solution: Add learning curve time, use historical data when available

### Ignoring Team Member Variance
- Assuming all team members work at same speed
- Solution: Account for individual velocity in estimates

---

## Estimation Checklist

Before Finalizing Estimates:
- [ ] Task is broken down sufficiently (1-10 days or 1-13 story points)
- [ ] Requirements and acceptance criteria are clear
- [ ] Dependencies are identified
- [ ] Appropriate estimation technique is chosen
- [ ] Multiple people involved in estimation
- [ ] Assumptions are documented
- [ ] Contingency added if needed
- [ ] Estimate checked against similar past work
- [ ] Estimate fits within project timeline and resources
- [ ] High-risk tasks flagged and ranges provided
