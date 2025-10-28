#  QA Take-Home Assessment – SauceDemo | Reqres.in |

**Author:** Mounika Dokka
**Duration:** 24 Hours  
**Submission:** Public GitHub Repository  

---

##  Overview
This project demonstrates an end-to-end QA assessment covering:
-  **Web App:** [SauceDemo](https://www.saucedemo.com) – tested via Playwright  
-  **Public API:** [Reqres.in](https://reqres.in) – validated via Postman/Newman  
  

Includes a complete QA strategy, automation, agent evaluation, bug reporting, and performance plan.

---

## Repository Structure
strategy/ → Test Strategy & Traceability Matrix
/tests/web/ → Playwright E2E tests for SauceDemo
/tests/api/ → Postman collection for Reqres.in
/agent-evals/ → ChatGPT evaluation prompts + rubric
/reports/ → Bug reports
/perf/ → Lightweight performance plan


---

## How to Run
 Web Tests (Playwright)
```bash
npm install
npx playwright install
npx playwright test


API Tests (Postman/Newman)
npm install -g newman
newman run tests/api/reqres_collection.json

Agent Evaluation

Manually run prompts from /agent-evals/prompts.md
 and store transcripts under /agent-evals/transcripts/.

Performance Benchmark (k6)
k6 run perf/perf_plan.js

 Deliverables

✅ Test Strategy
✅ Traceability Matrix
✅ Playwright Web Tests
✅ Postman API Collection
✅ Agent Evaluation Suite
✅ Bug Reports
✅ Performance Plan
✅ README

 Quality Metrics
Metric	Target	Result
Web Pass Rate	≥95%	✅
API Schema Validation	100%	✅
Accessibility Score	≥90%	✅
Agent Pass Rate	≥80%	✅
Performance Latency (95p)	<500ms	✅
 Time Breakdown
Task	Hours
Test Strategy + Matrix	3
Web + API Automation	10
Agent Evaluation	3
Bug Reports + Perf Plan	3
Documentation	2
Total	21
 Assumptions

Public systems only, no secrets or keys.

≤1 RPS for performance test (safe load).
