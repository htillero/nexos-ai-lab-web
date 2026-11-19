@echo off
pwsh -NoProfile -Command "if (Get-Command codegraph -ErrorAction SilentlyContinue) { $p = Split-Path -Parent '%~dp0'; Set-Location $p; if (Test-Path '.codegraph/codegraph.db') { codegraph sync --quiet 2>`$null } }"

:: Sync prompts y ADRs
set SCRIPTS_DIR=%~dp0..
pwsh -NoProfile -File "%SCRIPTS_DIR%\scripts\sync-prompts.ps1"
