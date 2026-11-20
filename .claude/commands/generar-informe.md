---
name: generar-informe
description: Informe de cierre de proyecto (Word)
---

Generá un informe de cierre en Word (`.docx`) para el trabajo recién terminado, usando la skill `docx`.

### 1. Reunir contexto
- `WORK_SESSION.md` y `TASKS.md` (sección Completadas) del alcance que se cierra
- `git log` del rango relevante (commits de este trabajo)
- ADRs creados en el vault durante el trabajo (`02 - Decisiones/`)
- Si el repo organiza el trabajo en tickets/pedidos (`projects/<ID>/`), tomar el contexto de ESE ticket puntual, no de todo el repo
- Si el ticket tiene `bitacora.sqlnb` (propia o de sus hijos con SQL; regla 29), leer sus **celdas markdown y SQL**: es la fuente de los pasos reproducibles (qué se consultó, qué se aplicó y el orden), con las secciones 📸 Antes → Aplicar → Después. No hay resultados guardados (`saveOutputs: false`).
- Si el `README.md` del caso tiene la sección «Investigación asistida» (DeepSearch, regla 31), llevarla al informe: consulta, cuaderno, modo, fecha, fuentes usadas con su estado de verificación y fuentes descartadas con el motivo. Lo «no verificado» se marca como tal y nunca se presenta como hecho.

### 2. Determinar destino
Hay solo dos cuadernos (ver `00 - Meta/NotebookLM`), replicados en las cuentas `default` y `bago_corp`. Mirar dónde vive la nota del proyecto en el vault:
- `01 - Proyectos/Infraestructura/` o `01 - Proyectos/Gobierno de Datos/` → alias `bago` (**Laboratorios Bagó**)
- `01 - Proyectos/Personales/` → alias `personal` (**Proyectos Personales**)

### 3. Generar el documento
Usando la skill `docx`, crear un `.docx` con esta estructura fija:
1. **Portada** — título, proyecto, departamento, fecha
2. **Contexto / Objetivo** — qué se pidió y por qué
3. **Qué se hizo** — resumen cronológico de acciones y decisiones clave (en pedidos con bitácora, sus secciones por fecha son la cronología). Referenciar los ADRs del vault por nombre, no duplicar su contenido
4. **Cómo replicarlo** — pasos concretos y reproducibles (comandos, archivos tocados, orden), tomando como base las celdas SQL y markdown de `bitacora.sqlnb` cuando exista. La sección más importante: alguien sin contexto previo tiene que poder seguirla
5. **Archivos modificados** — lista completa
6. **Referencias** — ADRs, notas de vault, PRs/commits relevantes

### 4. Guardar en la ruta correcta
- Repo con estructura de tickets/pedidos (`projects/<ID>/` → `resueltos/<ID>/`): `projects/<ID>/docs/informe-cierre.docx` (o dentro de `resueltos/<ID>/docs/` si el ticket ya se movió)
- Resto de los repos: `docs/informes/YYYY-MM-DD-titulo.docx` (crear `docs/informes/` si no existe)
- Nunca guardar el `.docx` en el vault de Obsidian — el vault solo maneja `.md`

### 5. Ingesta automática en NotebookLM
No subir a mano con `nlm source add`: usar el script canónico, que es idempotente, replica en las dos cuentas, escanea secretos (regla 17) y recupera la sesión solo:
```powershell
python D:/Proyectos/CoreOps/scripts/sync_notebooklm.py
```
- Qué sube: el `README.md` de cada `resueltos/<caso>/` (la ficha del caso, regla 19) y los informes `docs/informes/*.docx` de cada repo. El `.docx` de un ticket dentro de `resueltos/<ID>/docs/` queda en el repo: su fuente en NotebookLM es el README del caso. Si el caso aún está en `projects/`, se sube cuando se mueva a `resueltos/`.
- Código de salida `0`: confirmar qué fuentes se subieron (el script las lista).
- Código `2`: hubo errores o un README bloqueado por secretos; mostrar el detalle, corregir el README y volver a correr.
- Código `3`: la IA NO pudo recuperar la sesión sola (ya probó `--http-only` y el navegador oculto). Detenerse y pedirle a Haward el comando exacto que imprime el script (`nlm login --profile <perfil> --clear --storage protected`). No dar el caso por ingestado.

### 6. Confirmar al usuario
Decir la ruta exacta del archivo generado y el resultado del script de sincronización con NotebookLM (fuentes subidas, errores o escalamiento de sesión).

---
