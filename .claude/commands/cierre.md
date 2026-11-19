---
name: cierre
description: Cierre de sesion y sincronizacion ordenada (vault primero)
---

> **Proyecto objetivo (automatico):** si en ESTA conversacion se ejecuto `/proyecto <X>`, todo este comando opera sobre la carpeta de ese proyecto (la que fijo `/proyecto`) y no sobre el directorio del chat: `git -C <carpeta>`, archivos, WORK_SESSION.md y TASKS.md de esa carpeta, `-Repo <X>` en sync-agents, y el vault se sincroniza primero. Si nunca se ejecuto `/proyecto`, usa el directorio actual.

Ejecutá el cierre de la sesión de trabajo respetando el orden obligatorio:

### 1. Escaneo Preventivo de Secretos (Regla 17)
- Verificá `git diff` y `git status` en el proyecto actual.
- Comprobá que no existan credenciales, tokens, wallets ni sentencias `IDENTIFIED BY`. Si hay secretos, abortá de inmediato y avisá.

### 2. Auto-Aprendizaje de Skills y Consolidación de Memoria (Closed-Loop)
- **Extracción Autónoma de Skills (Estilo Hermes):** Evaluá: *¿Se resolvió hoy un problema técnico novedoso, un workaround no documentado, o Haward corrigió una forma de trabajo/consulta?*
  - Si es afirmativo: redactá o actualizá el `SKILL.md` correspondiente en `.agents/skills/<nombre>/SKILL.md` (o `~/.claude/skills/` y `~/.gemini/config/skills/`).
  - Corré `sync-prompts.ps1` para que las 3 IAs tengan el conocimiento disponible de inmediato en la próxima sesión.
- **Consolidación de Memoria (Estilo Letta):** Si se descubrió una IP/OCID/ruta nueva, reflejala en `Infra.md`; si se descubrió un script o query recurrente, agregalo a `Operaciones.md`. Presentá el cambio antes del commit.

### 3. Sincronizar Obsidian Vault PRIMERO (Regla 2)
- Si se crearon o modificaron notas o ADRs en `D:\Proyectos\Github\obsidian-vault`:
  - `cd "D:\Proyectos\Github\obsidian-vault"`
  - Auditar con `git status` y `git diff --stat` (Regla 25: diffs atómicos, prohibido `git add .` o `git add -A` a ciegas).
  - `git add <notas_o_carpetas_modificadas>` (ej: `00 - Meta/`, `01 - Proyectos/`, `02 - Decisiones/`).
  - `git commit -m "docs: [resumen de notas actualizadas]"` y `git pull --rebase && git push`.
  - Volver al directorio del proyecto.

### 4. Actualizar WORK_SESSION.md y TASKS.md
- Actualizá la fecha `updated: YYYY-MM-DD` en `WORK_SESSION.md`.
- Si se entrega a otra IA, marcá `handoff: true`; si no, `handoff: false`.
- Mové las tareas completadas a `## Done` en `TASKS.md`.

### 5. Sincronizar Repositorio del Proyecto
- Si hay cambios pendientes:
  - Auditar con `git status` y `git diff --stat` (Regla 25: diffs atómicos, prohibido `git add .` o `git add -A` a ciegas).
  - `git add <archivos>` (específicos, verificando que no haya temporales ni volcados).
  - `git commit -m "[tipo]: [descripción en español]"` (Regla 5).
  - `git pull --rebase`
  - `git push`

### 6. Sincronizar NotebookLM (Regla 12)
- Si en la sesión se movió un caso a `resueltos/`, se editó el `README.md` de un caso resuelto o se generó un informe en `docs/informes/`, correr:
  ```powershell
  python D:/Proyectos/CoreOps/scripts/sync_notebooklm.py
  ```
- El script solo sube lo que falta (si no hay nada nuevo, termina sin cambios). Código `2` = errores o README bloqueado por secretos; código `3` = no pudo recuperar la sesión de `nlm`: avisá a Haward con el comando exacto que imprime, sin darlo por hecho.
- El script detecta solo los README que cambiaron desde la última subida y reemplaza esa fuente (no la duplica). Para ver el estado de todos los casos y perfiles sin modificar nada: `python D:/Proyectos/CoreOps/scripts/sync_notebooklm.py --status` (agregar `--verify` compara con el contenido real guardado en NotebookLM).

### 7. Telemetría de Cuotas y Pacing Semanal (Regla 24)
- Correr el colector de telemetría para registrar los tokens de la sesión y actualizar el dashboard en el vault:
  ```powershell
  python D:/Proyectos/CoreOps/scripts/quota_telemetry.py --collect --sync-vault
  ```
- Si Delta_pacing < -5% o la ventana de 5 horas está por debajo del 30%, avisar en el resumen de cierre que para la próxima sesión pesada se recomienda derivar a Claude CLI (`despachar.ps1`).

### 8. Higiene de Procesos en Background (Regla 26)
- Antes de dar la sesión por cerrada, verificá que no quedó nada corriendo de lo que lanzaste (comandos en background, vigilantes `until`/`sleep`, subprocesos):
  ```powershell
  python D:/Proyectos/CoreOps/scripts/procesos_huerfanos.py
  ```
- Si lista procesos tuyos huérfanos u olvidados, cerralos con `--cerrar` y avisalo en el resumen. Si hay algo que no podés cerrar, informá PID y comando. Nunca cierres IDE, servidores MCP ni servicios del usuario (el script ya los protege).

### 9. Resumen Final
Mostrá un resumen conciso con la lista completa de archivos modificados, el último commit de ambos repositorios, el estado de la sincronización con NotebookLM y el semáforo de cuotas.

---
