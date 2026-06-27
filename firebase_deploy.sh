#!/bin/bash
set -e

# Use the Node version pinned in .nvmrc (Node 20). firebase-tools crashes on
# newer Node (e.g. 26 removed the SlowBuffer API it depends on), so pin it here
# rather than relying on whatever the shell defaults to.
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use

# Build Ionic Project
ionic build --prod

# Deploy Hosting to Firebase
firebase deploy --only hosting