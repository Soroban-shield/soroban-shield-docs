# Composing Modules

Combine Ownable, Pausable, and ReentrancyGuard for defense in depth.

```rust
ownable::only_owner(&env);
pausable::when_not_paused(&env);
reentrancy_guard::non_reentrant(&env, |e| { /* logic */ });
```
