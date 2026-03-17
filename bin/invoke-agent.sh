#!/usr/bin/env bash
# invoke-agent.sh — Create a GitHub issue tagged as an agent task.
#
# Usage:
#   ./bin/invoke-agent.sh "Add a Button component with size and variant props"
#
# The issue is tagged with `agent-task`. A Cursor cloud agent picks it up,
# implements the change, and opens a PR.

set -euo pipefail

TASK="${1:-}"

if [[ -z "$TASK" ]]; then
  echo "Usage: $0 \"<task description>\"" >&2
  exit 1
fi

REPO="${GITHUB_REPOSITORY:-$(git remote get-url origin | sed 's/.*github.com[:/]//' | sed 's/\.git$//')}"

if [[ -z "$REPO" ]]; then
  echo "Error: could not determine GitHub repository. Set GITHUB_REPOSITORY or ensure a git remote named 'origin' exists." >&2
  exit 1
fi

echo "Creating agent task issue in ${REPO}..."

gh issue create \
  --repo "$REPO" \
  --title "[agent-task] ${TASK}" \
  --label "agent-task" \
  --body "## Agent Task

${TASK}

---
*This issue was created by \`invoke-agent.sh\` and will be picked up by a Cursor cloud agent.*"

echo "Done. A Cursor cloud agent will pick up the issue and open a PR."
