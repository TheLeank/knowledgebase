---
title: Docker
---

## Eliminar imágenes colgadas

Elimina las imágenes \<none\>:\<none\> que son listadas al ejecutar `docker images`
  
```
docker rmi $(docker images -f "dangling=true" -q)
```
