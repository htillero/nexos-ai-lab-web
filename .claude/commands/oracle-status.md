---
name: oracle-status
description: Diagnostico de Oracle ADW (solo lectura)
---

Ejecutá diagnósticos sobre la base de datos Oracle Autonomous Data Warehouse de forma segura y en modo READ-ONLY:

### 1. Herramienta Canónica
Utilizá el script PowerShell del orquestador:
`powershell -File "D:\Proyectos\CoreOps\scripts\oracle-status.ps1" -Check [MODO] -Ambiente [Produccion|Desarrollo]`

### 2. Modos de Diagnóstico Disponibles
- `-Check version`  : Versión de base de datos, banner y timestamp del servidor.
- `-Check jobs`     : Trabajos programados (`ALL_SCHEDULER_JOBS`), estado y fallos recientes.
- `-Check sessions` : Sesiones de usuario activas y tiempos de espera.
- `-Check locks`    : Objetos bloqueados y bloqueos de sesión activos.
- `-Check tables`   : Tablas analizadas recientemente y volumen de filas.
- `-Check custom -Sql "SELECT ..."` : Consulta SQL personalizada de SOLO LECTURA.

### 3. Reglas de Seguridad
- Se conecta exclusivamente a través del consumer group de prioridad baja (`adwproduccion_low` o `adwdev_low`).
- Estrictamente prohibidas sentencias DDL o DML (`INSERT`, `UPDATE`, `DELETE`, `DROP`, `ALTER`, etc.).
- Las contraseñas se gestionan en memoria vía OCI Vault o entrada oculta, nunca en archivos planos.
