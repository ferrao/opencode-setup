You should use the `burn-down-chart` tool to generate a burn down chart that you can include in the project plan.
But before using the tool, you need to to extract project timeline data from the provided project plan and generate a valid `data.json` file that this script can process.

## 1. Script Requirements & Data Format

You must create a JSON object with the following exact structure. Do not include any extra fields.

*   **`startDate`**: A string in `YYYY-MM-DD` format representing the first day of the project or the first sprint.
*   **`milestones`**: An array of objects.
    *   Each object must have `id` (unique string), `name` (string, e.g., "Sprint 1" to be used as lable, so make it short), and `date` (string in `YYYY-MM-DD` format).
    *   **Crucial Logic:** The `date` should be the **last day** of that milestone/sprint.
*   **`tasks`**: An array of objects.
    *   Each object must have `id` (unique string), `points` (number representing Story Points or Hours), and `completedAt`.
    *   **`completedAt`**: A string in `YYYY-MM-DD` format if the task is done. If the task is not done, this must be `null`.

### Example JSON Output
```json
{
  "startDate": "2023-10-01",
  "milestones": [
    { "id": "m1", "name": "MS1", "date": "2023-10-13" },
    { "id": "m2", "name": "MS2", "date": "2023-10-27" }
  ],
  "tasks": [
    { "id": "t1", "points": 5, "completedAt": "2023-10-05" },
    { "id": "t2", "points": 8, "completedAt": null }
  ]
}
```

## 2. Instructions for Data Extraction

*   **Timeline:** Analyze the project plan to identify the start date and the end dates of each Sprint/Milestone.
*   **Tasks:** Go through the backlog.
    *   If a task is in the "Done" column, calculate its completion date (or use the date it was moved to "Done").
    *   If a task is "In Progress" or "To Do", set `completedAt` to `null`.
    *   Sum up the total Story Points for the scope.

## 3. Final Output

Once you have analyzed the project data provided below, output **only** the JSON code block containing the `data.json` content.

## 4. Critical Lessons Learned (Based on Real Experience)

### Milestone Names
- **Milestone names MUST be short** (e.g., "MS1", "MS2", "MS12") because they are used as chart labels
- When milestone ID is "MS-012", the name must be "MS12" - **NOT sequential numbering**
- **Do NOT create sequential names** (e.g., don't change MS-008/MS-010/MS-012 to MS6/MS7/MS8)
- The name directly corresponds to the ID number: MS-XXX → "MSXXX"

### Merging Milestones with Same Date
- When multiple milestones have the same completion date, **merge them into one entry**
- Keep the **most recent milestone** (highest ID number, e.g., MS-008, MS-010)
- Remove the earlier milestones with duplicate dates from the list
- Example: If MS-006, MS-007, MS-008 all have date 2026-03-01, only keep MS-008

### Excluding Non-Development Milestones
- **Exclude post-launch milestones** (e.g., MS-013: User Training, MS-014: Monitoring and Tuning)
- These are not development tasks and shouldn't be in the burn-down chart
- Only include milestones up to Production Deployment 
- Remove all tasks associated with excluded milestones

### Task Completion Dates
- Use **git log analysis** to determine actual completion dates for "Done" tasks
- Look for commits related to each task to find when it was completed
- If task is "In Progress", set `completedAt` to `null` (not the start date)
- "In Progress" tasks with partial completion should still have `completedAt: null` unless fully done

### Data Validation
- Verify JSON structure is valid before outputting (all strings quoted, proper commas, no trailing commas)
- Total points/hours should match the project plan's calculation
- Mitigation tasks from the plan are NOT included separately in burn-down data (they're part of main tasks)
- All task IDs from plan should be present in data.json (TASK-001 through TASK-069)

### Common Mistakes to Avoid
1. ❌ Renaming milestones sequentially (MS1, MS2, MS3...) instead of matching IDs (MS1, MS2, MS8, MS10...)
2. ❌ Using milestone description names instead of short labels (MS12 not "Production Deployment")
3. ❌ Including post-launch milestones and their non-development tasks
4. ❌ Setting `completedAt` to start date for "In Progress" tasks
5. ❌ Forgetting to merge milestones with duplicate dates
6. ❌ Making up dates or not checking git log for actual completion dates
7. ❌ Changing milestone names when merging (keep the name format simple: MSXXX where XXX matches ID)
