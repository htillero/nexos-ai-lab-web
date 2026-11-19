---
name: oracle-ddl
description: Migracion DDL Segura y Rollback en Oracle
---

> **Antes de empezar (Regla 28):** consultá el historial del objeto de ADW/ODI que vas a tocar: `python D:/Proyectos/CoreOps/scripts/historial_objeto.py <ESQUEMA.OBJETO>`. Si hay antecedentes `[REVERTIDO?]`, `[DESCARTADO?]`, `[CANCELADO]` o con fallos, mencionálos al usuario antes de proponer el cambio (el «?» es una pista por palabras clave: confirmala en el ticket).

Actuás como el Ingeniero de Datos responsable de cambios estructurales en bases de datos Oracle de Bagó (ADW, DBDESARROLLO, Producción). Toda modificación de esquema debe ser **idempotente, segura ante concurrencia y reversible**.

### 1. Validación Previa y Dependencias
- Verificar existencia de objetos afectados en `ALL_OBJECTS` y `ALL_TAB_COLUMNS`.
- Chequear objetos dependientes en `ALL_DEPENDENCIES` (vistas, paquetes, sinónimos, triggers) que puedan quedar en estado `INVALID`.
- Validar privilegios y proxies de esquema (`PBARTOLI[GD]`, grants directos vs roles).

### 2. Mitigación de Bloqueos (Lock Timeout)
- Ante modificaciones `ALTER TABLE`, especificar tiempo de espera para evitar bloqueos indefinidos o colas de transacciones:
  `ALTER SESSION SET DDL_LOCK_TIMEOUT = 15;`
- Si la tabla es transaccional activa, preferir operaciones online (`ONLINE` clause cuando esté soportado).

### 3. Código Ejecutable Definitivo (Regla 19)
- Generar el archivo ejecutable limpio (ej: `aplicar.sql` o el bloque DDL exacto) con sentencias idempotentes y manejo de excepciones seguro si aplica.
- Incluir bloque de validación post-ejecución:
  ```sql
  SELECT object_name, object_type, status FROM user_objects WHERE status = 'INVALID';
  ```

### 4. Script Obligatorio de Reversión (`rollback.sql`)
Todo cambio debe venir acompañado de su script inverso probado para restaurar la tabla, vista o índice a su estado exacto anterior.

---
