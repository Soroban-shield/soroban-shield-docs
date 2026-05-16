# RateLimiter

Per-address call throttling with a sliding time window.

## Functions

- `configure(max_calls, window_seconds)`
- `check_and_record(caller, now)`
