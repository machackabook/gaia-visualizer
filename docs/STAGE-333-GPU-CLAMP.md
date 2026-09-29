# Stage 333 GPU clamp

Apply inside `src/evaluateKernel.glsl.js` `evaluateChatKernel`:

```
float major = 10.0 + idx * 2.0;
float minor = 3.0 + toroidalWeave * 2.0;
major = clamp(major, 2.0, 96.0);
minor = clamp(minor, 0.25, 24.0);
```

Do not `mod(idx, 24.0)` before the clamp. CPU `clampChatKernelRadii` is the reference.
Session four-case switch is unchanged. Hash `beec41f1`.
