---
name: pr
description: Crear un Pull Request con gh (branch + commit + push + PR)
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Creá un Pull Request para los cambios actuales usando GitHub CLI (`gh`).

Usar `/pr` en vez de `/github` cuando: el repo es **colaborativo** (otra persona también hace push; hoy ninguno) o
es una **feature grande/riesgosa** que conviene revisar antes de mergear. Para
repos propios con cambios chicos, seguí usando `/github` (push directo a main).

Pasos:

1. `git status` y `git diff --stat` para ver los cambios.
2. Si hay cambios sin commitear, creá una rama descriptiva desde `main`:
   `git switch -c feat/<descripcion-corta>` (o `fix/...`).
3. `git add` de lo relevante + `git commit` con mensaje en **español**.
4. `git push -u origin HEAD`.
5. Crear el PR: `gh pr create --fill` (o con título/cuerpo en español:
   `gh pr create --title "..." --body "..."`). Si el repo tiene rama base distinta
   de `main`, usá `--base <rama>`.
6. Mostrame la URL del PR (`gh pr view --web` opcional).

Notas:
- Si tocaste el vault, sincronizalo igual con el circuito (vault primero) — el PR
  es solo para el repo de código.
- No mergear automáticamente; dejá el PR para revisión salvo que se indique lo contrario.

---
