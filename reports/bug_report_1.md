# Bug Report 1 – SauceDemo: Checkout button active after logout
**Environment:** macOS 14, Chrome 128, https://www.saucedemo.com  
**Steps to Reproduce:**
1. Login with `standard_user`
2. Add item to cart
3. Logout
4. Press browser Back → Checkout button visible  
**Expected:** Redirect to login or disabled checkout  
**Actual:** Button active, navigates to checkout page  
**Severity:** High (P1)  
**Suspected Cause:** Session token not cleared on logout  
**Fix Hypothesis:** Add auth guard on checkout route  
**Retest Plan:** Logout → Back → verify redirect to login  
