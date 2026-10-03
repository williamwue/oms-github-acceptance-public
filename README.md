# OMS GitHub acceptance

Disposable public fixtures for Oh My Stack's GitHub provider acceptance.
Only synthetic test data belongs here. No credentials or production content.

## Normal merge scenario

An independent OMS session reviews this exact patch before root-authorized merge.
The protected target requires the synthetic acceptance check to pass.

## Interrupted merge scenario

Recovery reconciles an accepted merge under the same operation identity.
It must not send a second merge request after the client exits unexpectedly.
