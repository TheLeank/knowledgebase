---
title: WHM & cPanel
---

## Ver origen de spam (Exim)

Los logs de correo se encuentren en /var/spool/exim/msglog y /var/spool/exim/input

Listamos los directorios desde los que más correo se está enviando:

```
grep cwd /var/log/exim_mainlog | grep -v /var/spool | awk -F"cwd=" '{print $2}' | awk '{print $1}' | sort | uniq -c | sort -n
```

Podemos ver si actualmente se está accediendo al fichero en cuestión:

```
grep "FICHERO" /home/USERNAME/access-logs/DOMINIO | awk '{print $1}' | sort -n | uniq -c | sort -n
```

## Purgar cola de correo (Exim)

```
exim -bp|grep "<"|awk {'print $3'}|xargs exim -Mrm
```
