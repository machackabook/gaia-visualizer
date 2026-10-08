# Security

Source code is the only trusted neighbor. This file is a posture note, not a credential store.

* Numeral: `137451921129154222`
* Do not commit `.env`, `secrets.yml`, `id_rsa`, Tailscale auth keys, ADB pair codes, cookies, or OAuth tokens.
* `CASCADE_TOKEN` stays in GitHub Actions secrets. Never echo it.
* A green `scripts/env-check.sh` is a tree gate only. It is not a root attestation, not a Tailscale clearance, and not an ADB pair.
* A found key is a stop, not a stamp. Missing keys are the correct state.
* HUD ADB panes in the visualizer are UI simulations. No remote shell. No root claim.
* Report issues on this repo. Do not paste secret material into issues.
