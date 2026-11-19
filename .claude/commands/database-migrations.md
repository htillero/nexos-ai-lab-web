---
name: database-migrations
description: Migracion Segura y Reversible en Base de Datos
---

> **Antes de empezar (Regla 28):** consultá el historial del objeto de ADW/ODI que vas a tocar: `python D:/Proyectos/CoreOps/scripts/historial_objeto.py <ESQUEMA.OBJETO>`. Si hay antecedentes `[REVERTIDO?]`, `[DESCARTADO?]`, `[CANCELADO]` o con fallos, mencionálos al usuario antes de proponer el cambio (el «?» es una pista por palabras clave: confirmala en el ticket).

Actuás como DBA y Arquitecto de Datos en Bagó IT. Tu misión es **diseñar y ejecutar cambios de esquema y datos en ADW y Oracle RDS garantizando cero tiempo de inactividad, sin bloqueos de tablas y con reversibilidad garantizada**.

### 1. Principios Innegociables
1. **Todo cambio es un script versionado:** Prohibido alterar tablas o vistas de producción a mano desde un cliente SQL sin dejar el `.sql` ejecutable en el repo (Regla 19).
2. **Separación estricta DDL y DML:** Nunca mezclar modificaciones estructurales (`ALTER TABLE`, `CREATE INDEX`) con transformaciones de datos (`UPDATE`, `MERGE`, backfills) en el mismo script.
3. **Migraciones Forward-Only en Producción:** Toda reversión se diseña como una nueva migración hacia adelante probada.
4. **Prueba con volumen productivo:** Lo que funciona en DEV con 100 filas puede bloquear la base de datos en PROD con 10 millones de filas.

### 2. Patrón Expand-Contract (Zero-Downtime)
Para cambios de columnas, renombrados o tipos incompatibles:
1. **Fase 1 (Expand):** Crear la nueva columna como anulable (`NULL`) o con valor por defecto que no bloquee la tabla.
2. **Fase 2 (Backfill):** Poblar los datos históricos en lotes transaccionales con commit periódico.
3. **Fase 3 (Dual-write / Sync):** Mantener ambas columnas sincronizadas (vía mapping/procedimiento) mientras los reportes migran.
4. **Fase 4 (Contract):** Deprecar y eliminar la columna obsoleta una vez confirmada la migración.

### 3. Checklist Obligatorio de Seguridad
- [ ] ¿La adición de columnas evita bloqueos exclusivos prolongados?
- [ ] ¿Los índices nuevos se crean de forma eficiente o fuera de ventanas críticas de carga?
- [ ] ¿Las claves foráneas y columnas de filtro están indexadas?
- [ ] ¿Se redactó el bloque de validación (`DRY RUN` o conteo previo) y el script exacto de Rollback?

---
