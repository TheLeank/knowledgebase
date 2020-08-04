---
title: MariaDB / MySQL
---

## Calcular tamaño de bases de datos

```sql
SELECT table_schema <base-de-datos>
       ROUND(SUM(data_length+index_length)/1024/1024,3) "Tamaño (MB)"
       FROM information_schema.TABLES
       GROUP BY table_schema; 
```

## Exportar ignorando datos de tabla

Cuando queramos exportar una base de datos exceptuando el contenido de ciertas tablas, exportamos la estructura a un fichero y los datos a otro:

```
mysqldump -h <host> -u <username> -p <schema> --no-data > db-structure.sql
mysqldump -h <host> -u <username> -p <schema> --no-create-info --ignore-table=schema.table1 --ignore-table=schema.table2 > db-data.sql
```

## Usar GZIP en los dumps

### Exportar

```
mysqldump  -u <username> -p <database> | gzip > <dump_name>.sql.gz
```

### Importar

```
zcat <dump_name>.sql.gz | mysql -u <username> -p <database>
```
