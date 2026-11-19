@echo off
pwsh -NoProfile -Command "$p=Split-Path -Parent '%~dp0'; Set-Location $p; $h=git rev-parse --short HEAD 2>`$null; $n='Manual'; if(gci env:|?{$_.Name-like'*OPENCODE*'-or$_.Name-like'*ANOMALYCO*'}){$n='Opencode'}elseif(gci env:|?{$_.Name-like'*CLAUDE*'-or$_.Name-eq'ANTHROPIC_API_KEY'}){$n='Claude Code'}; Write-Host \"[post-commit] $n - commit $h\" -ForegroundColor Green; exit 0"
