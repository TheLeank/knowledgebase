---
title: Docker
---

## Eliminar imágenes colgadas

Elimina las imágenes \<none\>:\<none\> que son listadas al ejecutar `docker images`
  
```
docker rmi $(docker images -f "dangling=true" -q)
```

## Reiniciar PHP-FPM

Si reinicias el servicio sin más, el contenedor se detendrá. Para evitarlo, usa dentro del contenedor:

```
kill -USR2 1
```

[Fuente](https://stackoverflow.com/questions/37806188/how-to-restart-php-fpm-inside-a-docker-container)