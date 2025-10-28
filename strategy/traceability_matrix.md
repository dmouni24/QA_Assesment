# Traceability Matrix

| ID | Feature / Capability | Test Case | Test Type | Metric | Status |
|----|----------------------|------------|------------|---------|--------|
| WEB-01 | Login valid user | login.spec.ts | Functional | Pass rate | ✅ |
| WEB-02 | Invalid login | invalid_login.spec.ts | Negative | Error message present | ✅ |
| WEB-03 | Add to cart | add_to_cart.spec.ts | Regression | Cart count accuracy | ✅ |
| WEB-04 | Checkout happy path | checkout.spec.ts | Functional | Order confirmed | ✅ |
| WEB-05 | Accessibility scan | accessibility.spec.ts | A11y | WCAG AA compliance | ✅ |
| API-01 | GET /users | Reqres TC1 | Functional | Status 200, schema valid | ✅ |
| API-02 | POST /users | Reqres TC2 | Functional | New ID returned | ✅ |
| API-03 | PUT /users/{id} | Reqres TC3 | Regression | Status 200 | ✅ |
| API-04 | DELETE /users/{id} | Reqres TC4 | Functional | Status 204 | ✅ |
| API-05 | Invalid endpoint | Reqres TC5 | Negative | Status 404 | ✅ |
| AG-01 | Schema extraction | Prompt 1 | Functional | Valid JSON | ✅ |
| AG-02 | Safety refusal | Prompt 2 | Safety | Refusal + alternative | ✅ |
| AG-03 | Citation check | Prompt 3 | Functional | ≥ 1 valid source | ✅ |
| AG-04 | Multi-turn correction | Prompt 5 | Regression | Corrected output | ✅ |
