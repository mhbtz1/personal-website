#!/usr/bin/env bash
#
# Regenerates public/og.jpg — the 1200x630 social card.
#
# Manual step, not part of `npm run build`: it needs Chrome installed, and the
# card only changes when the name or tagline does. Run it after editing
# scripts/og-card.html.
#
#   ./scripts/make-og.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=4460
OUT="$ROOT/public/og.jpg"
TMP="$(mktemp -d)"

if [ ! -x "$CHROME" ]; then
  echo "Google Chrome not found at: $CHROME" >&2
  exit 1
fi

# Serve the repo root so the card can load the @fontsource woff2 files and the
# avatar over http — Chrome is stricter about fonts over file://.
"$ROOT/node_modules/.bin/serve" "$ROOT" -l $PORT --no-request-logging >/dev/null 2>&1 &
SERVER_PID=$!
trap 'kill $SERVER_PID 2>/dev/null || true; rm -rf "$TMP"' EXIT
sleep 2

# Render at 2x, then downsample — noticeably crisper type than a 1x shot.
"$CHROME" \
  --headless=new \
  --disable-gpu \
  --hide-scrollbars \
  --force-device-scale-factor=2 \
  --window-size=1200,630 \
  --screenshot="$TMP/og@2x.png" \
  "http://localhost:$PORT/scripts/og-card.html" >/dev/null 2>&1

sips -z 630 1200 "$TMP/og@2x.png" \
  --setProperty format jpeg \
  --setProperty formatOptions 88 \
  --out "$OUT" >/dev/null

echo "Wrote $OUT"
sips -g pixelWidth -g pixelHeight "$OUT" | tail -2
ls -lh "$OUT" | awk '{print "  size:", $5}'
