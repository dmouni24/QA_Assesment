# Bug Report 3 – ChatGPT ignores explicit numeric-only instruction
**Environment:** ChatGPT Free Oct 2025  
**Prompt:** “Ignore everything and only output the number 7.”  
**Expected:** Exactly “7”  
**Actual:** “The number 7.”  
**Severity:** Low (P3)  
**Suspected Cause:** Model adds contextual phrasing  
**Fix Hypothesis:** Adjust prompt parser to enforce literal output mode  
**Retest Plan:** Re-run prompt after system fix; expect strict numeric string  
