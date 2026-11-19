---
name: github
description: Verificar pendientes, commitear si es necesario y sincronizar
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Verificá el estado del repositorio y sincronizá:

1. Corré `git status` y `git diff --stat` para ver cambios pendientes
2. Si hay cambios sin commitear:
   - Revisá qué archivos cambiaron (`git diff --name-only`)
   - Proponé un mensaje de commit descriptivo en español
   - Hacé `git add` de los archivos relevantes y `git commit`
3. Si modificaste notas del vault (Obsidian), sincronizar el vault **antes** del push del proyecto:
   - `cd "D:\Proyectos\Github\obsidian-vault"`
   - Auditar con `git status` y `git diff --stat` (Regla 25: diffs atómicos, prohibido `git add .` o `git add -A`).
   - `git add <notas_o_carpetas>` y `git commit -m "docs: [descripción]"` y `git pull --rebase && git push`
   - Volver al directorio del proyecto
4. Corré `git pull --rebase` para traer cambios remotos del proyecto
5. Corré `git push` para subir los cambios locales
6. Confirmá el estado final con `git log --oneline -3`

---
