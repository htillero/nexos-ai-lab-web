---
name: audio
description: Generar podcast ejecutivo (Audio Overview) en NotebookLM
---

Dispará la generación del podcast conversacional (Audio Overview) sobre el cuaderno correspondiente:

### 1. Determinar el cuaderno
- Corporativo (Infraestructura, Datos y Governance, ADRs): `bago` (**Laboratorios Bagó**)
- Proyectos Personales: `personal` (**Proyectos Personales**)

### 2. Ejecución
Ejecutá el comando CLI de NotebookLM:
```bash
nlm audio create <alias>
```

### 3. Confirmación
Informá al usuario que el podcast se está generando en segundo plano y estará disponible en [NotebookLM](https://notebooklm.google.com) o mediante `nlm audio status <alias>`.

---
