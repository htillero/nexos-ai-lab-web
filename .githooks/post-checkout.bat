@echo off
pwsh -NoProfile -Command "if (Get-Command codegraph -ErrorAction SilentlyContinue) { $p = Split-Path -Parent '%~dp0'; Set-Location $p; if (Test-Path '.codegraph/codegraph.db') { codegraph sync --quiet 2>`$null } }"
