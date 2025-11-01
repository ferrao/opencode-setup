# Risk Taxonomy

A reusable framework for identifying and assessing risks.  
Use this to keep risk analysis structured and comparable across projects.  
Downstream agents rely on **Likelihood** and **Impact** values.

---

## Likelihood Scale
- **Low:** Rare, unlikely under normal conditions.  
- **Medium:** Plausible, has occurred before in similar contexts.  
- **High:** Probable, expected without active mitigation.

## Impact Scale
- **Low:** Limited effect; minor inconvenience or easy fix.  
- **Medium:** Noticeable disruption; partial service/user impact.  
- **High:** Severe or systemic failure; legal, financial, or reputational harm.

---

## Categories & Examples

### 1) Technical
- Scalability bottleneck in DB or API.  
- Poor code quality or lack of test coverage.  
- Over-complex architecture introducing fragility.

### 2) Product / Market
- Misalignment with user needs; feature unused.  
- Overpromised roadmap vs. team capacity.  
- Competitor launches a better alternative first.

### 3) Operational
- Build/deploy pipeline failures.  
- Monitoring/alerting gaps leading to blind spots.  
- Dependency on unavailable key vendor or service.

### 4) Security
- Data breach via unpatched vulnerability.  
- Credential leaks or weak access controls.  
- Insider misuse of privileges.

### 5) Compliance / Legal
- Violation of data protection law (GDPR, HIPAA, etc.).  
- Licensing conflicts with open-source dependencies.  
- Lack of required audit or reporting controls.

### 6) Organizational / People
- Key staff turnover or knowledge silo.  
- Misaligned incentives across teams.  
- Leadership change shifting priorities.

### 7) External / Environmental (Optional)
- Cloud provider regional outage.  
- Geopolitical or regulatory changes.  
- Natural disaster affecting operations.

---

## Usage
- Classify risks by **Category**.  
- Assign **Likelihood (Low/Med/High)** and **Impact (Low/Med/High)**.  
- Prioritize risks with **High x High** first.  
- Document mitigations or monitoring strategies.  

Goal: Ensure risks are explicit, structured, and comparable across projects.

