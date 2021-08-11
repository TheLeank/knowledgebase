---
title: Plesk
---

## Ver origen de spam (Qmail)

```
cd /var/qmail/queue/mess/22/
ls -lt | more
```

Copiar la dirección IP de uno de los resultados obtenidos por la anterior consulta.

```
cat /usr/local/psa/var/log/maillog | grep IP
```

Sacar el usuario autenticado que mas correos ha enviado

```
cat /usr/local/psa/var/log/maillog |grep -I smtp_auth |grep -I user |awk '{print $11}' |sort |uniq -c |sort -n
```

## Purgar cola de correo (Qmail y Postfix)

```
/usr/local/psa/admin/sbin/mailmng --stop-service
find /var/qmail/queue/mess -type f -exec rm {} \;
find /var/qmail/queue/info -type f -exec rm {} \;
find /var/qmail/queue/local -type f -exec rm {} \;
find /var/qmail/queue/intd -type f -exec rm {} \;
find /var/qmail/queue/todo -type f -exec rm {} \;
find /var/qmail/queue/remote -type f -exec rm {} \;
/usr/local/psa/admin/sbin/mailmng --start-service
```

## Establecer duración en cola de correo

Se indica en número de segundos. El siguiente ejemplo limita la vida del correo a 1 hora en la cola.

```
echo '3600' > /var/qmail/control/queuelifetime && /etc/init.d/qmail restart
```

## Gestionar cuentas de correo

### Crear cuenta

```
/usr/local/psa/bin/mail --create 'CUENTA' -passwd 'PASS' -mailbox true
```

### Eliminar cuenta

```
/usr/local/psa/bin/mail --remove 'CUENTA'
```

## Shell root usando admin y crontab

Crear el fichero sshd_config manualmente, de manera que lo podamos borrar posteriormente sin necesidad de otra tarea programada.

```
cat /etc/ssh/sshd_config > /var/www/vhosts/SITIO/httpdocs/sshd_config
```

Editar el fichero con la configuración deseada.

```
cat /var/www/vhosts/SITIO/httpdocs/sshd_config > /etc/ssh/sshd_config
```

Crear un script para modificar la contraseña del usuario root

```none title="/var/www/vhosts/SITIO/httpdocs/script.sh"
echo "root:PASS" | /usr/sbin/chpasswd 
```

Por último, reiniciar el servicio

```
/etc/init.d/ssh restart
```

## Reconfigurar vhost

```
/usr/local/psa/admin/sbin/httpdmng --reconfigure-domain DOMINIO
```

También puedes reconfigurar todos los vhosts del servidor

```
/usr/local/psa/admin/sbin/httpdmng --reconfigure-all
```

Restaurar permisos

```
/usr/local/psa/bin/repair --restore-vhosts-permissions
```

## Listar intérpretes de php

```
/usr/local/psa/bin/php_handler --list
```

## Comprobar estado de la cola de correo(Qmail)

```
/var/qmail/bin/qmail-qstat
```

## Forzar cola de correo

```
/usr/local/psa/admin/bin/mailqueuemng -a
```

## Cambiar HELO (Qmail)

```
echo mail.domain.tld > /var/qmail/control/me
```

## Reparar correos

```
/usr/local/psa/admin/sbin/mchk --with-spam
```