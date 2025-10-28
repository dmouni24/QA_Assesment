# Bug Report 2 – Reqres API returns 200 for invalid PUT body
**Environment:** Postman v11, https://reqres.in  
**Steps:**
1. Send PUT `/api/users/2` with body `{ "age": "abc" }`
2. Observe response  
**Expected:** 400 Bad Request or validation error  
**Actual:** 200 OK + updatedAt returned  
**Severity:** Medium (P2)  
**Suspected Cause:** Missing input validation in mock backend  
**Fix Hypothesis:** Add schema check for field types  
**Retest Plan:** Retry with invalid payload → expect 400  
