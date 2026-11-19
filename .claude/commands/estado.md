---
name: estado
description: Estado rapido de tareas y resueltos
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Mostrá un diagnóstico rápido del estado actual del repositorio donde estás parado, en este orden:

### 1. Estado de Git y Handoff
- Rama actual y último commit (`git log -1 --oneline`)
- Archivos modificados o pendientes (`git status -s`)
- Última IA y fecha registrada en `WORK_SESSION.md`

### 2. Casos o Tareas
- **Si el repo maneja tickets (`projects/` y `resueltos/`, ej. DataOps):**
  - 🟡 **Casos Activos (`projects/`):** Listar cada carpeta en `projects/` con su ticket/nombre y estado resumido.
  - 🟢 **Últimos 5 Resueltos (`resueltos/`):** Listar los últimos 5 casos resueltos ordenados por fecha, indicando si cuentan con `.sql` ejecutable y `README.md`.
- **Si el repo es de Sistema / Producto (Cerbero, BigBang, ControlFinanciero, etc.):**
  - 🟡 **En Curso:** Contenido de `## Active` en `TASKS.md`.
  - ⏳ **Bloqueado:** Contenido de `## Waiting On` en `TASKS.md` (si aplica).
  - 🟢 **Últimos Resueltos:** Los últimos 3 ítems completados en `## Done` de `TASKS.md`.

### 3. Estado de NotebookLM (Fuentes y Salud)
- Comprobar la sesión: `nlm login --check --profile default` y `nlm login --check --profile bago_corp`. Si alguna falla, probar `nlm auth refresh --profile <perfil> --http-only` y luego `nlm auth refresh --profile <perfil>`; si sigue fallando, avisar con el comando `nlm login --profile <perfil> --clear --storage protected`.
- Listar los cuadernos activos consultando `nlm list notebooks` mostrando el total de fuentes en `bago` (Laboratorios Bagó) y `personal` (Proyectos Personales).

Sé conciso y directo, sin explicaciones teóricas.


---
