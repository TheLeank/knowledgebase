---
title: Linux
slug: /
---

## Eliminar ficheros por marca de tiempo

Eliminamos, en el directorio actual y recursivamente, ficheros anteriores al tiempo indicado

### Usando minutos

1440 minutos son 24 horas

```
/usr/bin/find ${PWD}/* -mmin +1440 -exec rm -rf {} \;
```

### Usando días

```
/usr/bin/find ${PWD}/* -mtime +7 -exec rm -rf {} \;
```

## Eliminar ficheros de directorio muy lleno

```
find ./ -name '*' -print0 | xargs -0 -n 10 rm
```

### Evitando carga del servidor

Con ionice limitamos la ejecución del comando de manera que se vaya ejecutando mientras no haya otros procesos usando el disco, de manera que para discos mecánicos puede resultar útil.

```
ionice -c 3 find ${PWD}/* -type f -print -delete
```

## Rsync

```
rsync -arzvl ${PWD}/ /ruta/destino/
```

### Hacia otro servidor

```
rsync -arzvl -e ssh ${PWD}/ root@IPSERVER:/ruta/destino/
```

En caso de que el servidor al que queremos transferir la información no tenga el puerto ssh por defecto, usamos:

```
rsync -arzvl -e ssh --rsh='ssh -p1234' ${PWD}/ root@IPSERVER:/ruta/destino/
```

## Reemplazar texto en ficheros con sed

La s inicial significa sustituir, mientras la g final significa global (de manera que sed no se detenga en la primera coincidencia)

```
sed -i 's/find/replace/g' FICHERO
```

## Modificar zona horaria

```
rm /etc/localtime
ln -s /usr/share/zoneinfo/Europe/Madrid /etc/localtime
```

## Ver los 10 procesos que más memoria consumen

```
ps aux | awk '{print $2, $4, $11}' | sort -k2r | head -n 10
```

## Eliminar directorio con excepciones

Usando GLOBIGNORE podemos eliminar un directorio completo con rm -rf * conservando el contenido deseado

```
export GLOBIGNORE=*.php:*.sql:.vs-code
```

Recuerda que la variable se declara para la sesión actual.

## Añadir binarios a PATH

### Temporalmente

```
PATH="/path/to/include:$PATH"
```

Debido a que se ejecuta el primer binario encontrado, dejamos $PATH al final de la cadena para los casos en que el binario que queremos ejecutar ya existe en el sistema

Si queremos que el binario también pueda ser ejecutado fuera de la consola, ejecutamos a continuación:

```
export PATH
```

### Permanentemente 

Tendremos que editar el fichero .profile [.bashrc, .bash_rc o .bash_profile] de nuestro directorio home y añadir las dos líneas anteriores en el mismo orden.

## Usar la misma zona horaria en dualboot

Windows y Linux obtienen la hora de diferente manera. La vía más sencilla de hacer que ambos SO tengan la misma hora es hacer que Linux cambie su comportamiento.

```
timedatectl set-local-rtc 1 --adjust-system-clock
```

Para deshacerlo:

```
timedatectl set-local-rtc 0 --adjust-system-clock
```

Podemos comprobar el valor actual con:

```
timedatectl
```

## Cambiar de directorio tras conectar vía ssh

```none title="&#126/.ssh/config"
Host example.net
    RemoteCommand cd / && exec bash --login
    RequestTTY yes
```

## XRDP

### Conectar a una sesión existente

Al intentar conectar a una sesión existente, la pantalla se muestra en negro y un segundo después, se cierra:

```none
echo xfce4-session > $HOME/.xsession
chmod +x .xsession
```
[Issue en github](https://github.com/neutrinolabs/xrdp/issues/1412)
