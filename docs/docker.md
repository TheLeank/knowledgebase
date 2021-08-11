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

[Fuente](https://stackoverflow.com/questions/37806188/how-to-restart-php-fpm-inside-a-docker-container

## Crear imagen sin necesidad de servicio

A la hora de crear una imagen, usa la siguiente línea como comando:

```
CMD ["tail", "-f", "/dev/null"]
```

De esta manera, al crear un contenedor y ejecutarlo separado con [--detach, -d] no se detendrá seguidamente. Útil para trastear, en producción no tiene sentido.
