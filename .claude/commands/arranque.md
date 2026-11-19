---
name: arranque
description: Arranque rápido (día a día)
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Cargá el contexto del proyecto leyendo:

- `CLAUDE.md`
- `WORK_SESSION.md`
- `TASKS.md`
- `AGENTS.md` (solo lectura)
- `Prompt-Reset-Contexto.md`
- `git log -1`
- `git status`

**Verificá el circuito (obligatorio — regla 16 de `AGENTS.md`):** corré

`powershell -NoProfile -ExecutionPolicy Bypass -File "D:\Proyectos\CoreOps\.claude\commands\sync-agents.ps1" -Check -Repo <nombre-de-la-carpeta-de-este-repo>`

Si termina con `DRIFT`, `SIN HOOK`, `HOOK DESACTUALIZADO` o cualquier otro aviso, **decímelo antes de empezar a trabajar**: no lo ignores ni lo arregles por tu cuenta sin avisarme.

Reconstruí el estado del proyecto y decime en qué quedó todo, incluyendo el resultado de ese chequeo.

---
