---
name: handoff
description: Handoff entre IAs
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Continuá lo que dejó la otra IA.

Leé:

- `WORK_SESSION.md`
- `TASKS.md`
- `CLAUDE.md`
- `git log -1`
- `git status`

Detectá handoff, retomá desde la última acción y continuá sin repetir nada.

---
