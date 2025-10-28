# Test Strategy

## 1. Scope
This strategy covers testing across:
- **Web App (SauceDemo)** – Login, cart, checkout, validation, accessibility.
- **API (Reqres.in)** – CRUD, pagination, schema validation, negative cases.
- **Agent (ChatGPT)** – reasoning accuracy, schema extraction, safety, and instruction following.

### In Scope
Functional, negative, regression, performance (lightweight), and accessibility testing.

### Out of Scope
Load testing >1 RPS, internal metrics, paid API features.

---

## 2. Risks
| Area | Risk | Mitigation |
|------|------|-------------|
| Web | UI changes | Use stable selectors (data-test attributes) |
| API | Rate limits | Throttle requests, respect delays |
| Agent | Non-deterministic outputs | Use consistent rubric and tolerance |
| Data | Test collisions | Use idempotent data cleanup |

---

## 3. Test Types
- **Functional** – Validate workflows, endpoints, and user flows.  
- **Negative** – Invalid logins, bad requests, missing inputs.  
- **Regression** – Core suite run before releases.  
- **Performance** – Micro test using k6 (<1 RPS).  
- **Security/Safety** – Validation + refusal checks (Agent).  
- **Accessibility** – Axe-core scan for WCAG compliance.  
- **Observability** – Track pass %, latency, and a11y scores.

---

## 4. Environment & Data Strategy
- **Environment:** Public endpoints only.  
- **Browsers:** Chromium (Playwright default).  
- **Data:** Static users for SauceDemo; mock JSON for Reqres.  
- **Reset:** Clear cookies/storage before each test.  

---

## 5. Entry / Exit Criteria
| Stage | Entry | Exit |
|--------|--------|------|
| Test Run | Environment stable | ≥95% pass rate |
| Regression | Build stable | All P1/P2 bugs closed |
| Release | Final QA sign-off | No open high-severity bugs |

---

## 6. Quality Gates
1. All tests green  
2. No P1/P2 defects open  
3. API schema 100% validated  
4. Accessibility score ≥ 90%  
5. Agent eval ≥ 80% pass rate  

---

## 7. Tools
| Purpose | Tool |
|----------|------|
| Web Automation | Playwright |
| API Testing | Postman/Newman |
| Agent Evaluation | ChatGPT |
| Accessibility | Axe-core |
| Performance | k6 |
| CI/CD (optional) | GitHub Actions |

---

## 8. Contingencies
If public endpoints break → mock data locally.  
If ChatGPT output drifts → adjust rubric but enforce schema correctness.

---
