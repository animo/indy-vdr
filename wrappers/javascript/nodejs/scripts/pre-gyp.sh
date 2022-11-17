#!/usr/bin/env sh

PLATFORM=$(node -p "process.platform")

# for macOS we have an universal build that works for x64 and arm64
if [ "$PLATFORM" = "darwin" ]; then
    node-pre-gyp install --target_arch="universal"
else
    node-pre-gyp install
fi