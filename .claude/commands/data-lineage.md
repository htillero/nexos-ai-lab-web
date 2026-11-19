---
name: data-lineage
description: Linaje de Datos y Analisis de Impacto
---

> **Antes de empezar (Regla 28):** consultá el historial del objeto de ADW/ODI que vas a tocar: `python D:/Proyectos/CoreOps/scripts/historial_objeto.py <ESQUEMA.OBJETO>`. Si hay antecedentes `[REVERTIDO?]`, `[DESCARTADO?]`, `[CANCELADO]` o con fallos, mencionálos al usuario antes de proponer el cambio (el «?» es una pista por palabras clave: confirmala en el ticket).

Actuás como un Arquitecto de Datos Senior en Bagó IT. Tu misión es **determinar el origen exacto de un dato, su cadena de transformación en ODI/ADW y qué objetos se rompen si se modifica una estructura**.

### 1. Análisis Bidireccional
1. **Upstream (Hacia Arriba):** ¿De qué tablas base, esquemas de staging (`BDWOSTG`), sequences o mappings depende el objeto?
2. **Downstream (Hacia Abajo - Impacto):** ¿Qué vistas analíticas, stored procedures, paquetes o jobs quedarán en estado `INVALID` si se altera la tabla/columna?

### 2. Fuentes de Consulta Canónicas
- **Diccionario Oracle:** `ALL_DEPENDENCIES`, `ALL_VIEWS`, `ALL_OBJECTS`.
- **Repositorio ODI:** `SNP_MAPPING`, `SNP_POP`, `SNP_TRT`.
- **Script Canónico:**
  ```bash
  python scripts/data_lineage.py --object BDWO.DM_CARTERAS_MENSUALES [--column MONTO_NETO]
  ```

### 3. Salida Visual Obligatoria (Mermaid)
Toda respuesta de linaje debe incluir un diagrama Mermaid estructurado que represente la tubería:
```mermaid
flowchart LR
    SRC["Fuente / Staging"] --> ODI["Mapping ODI / SP"]
    ODI --> TARGET["Tabla ADW"]
    TARGET --> VIEW["Vista Analítica"]
```

---
