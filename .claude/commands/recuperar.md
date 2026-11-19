---
name: recuperar
description: Recuperación de sesión
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Recuperá el contexto leyendo:

- `WORK_SESSION.md`
- `TASKS.md`
- `CLAUDE.md`
- `git log -1`
- `git status`

Mostrame:

- última acción
- tareas pendientes
- estado del proyecto

Luego preguntame qué querés hacer.

---
