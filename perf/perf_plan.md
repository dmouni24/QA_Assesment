# Lightweight Performance / Resilience Plan

## Objective
Validate Reqres API baseline latency safely (< 1 RPS for 60 s).

## Metrics
- Avg Latency < 300 ms  
- Error Rate < 1 %  
- 95th Percentile < 500 ms  

## k6 Script
```js
import http from 'k6/http';
import { check, sleep } from 'k6';
export default function () {
  const res = http.get('https://reqres.in/api/users?page=2');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
