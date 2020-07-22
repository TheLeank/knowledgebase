---
title: PHP
---

## Extensiones

### Xdebug

Esta extensión permite el step debugging, así como una mejor impresión del comando var_dump, entre otros. Para conocer qué versión necesitas puedes usar el [asistente](https://xdebug.org/wizard). También puedes instalarlo vía pecl install xdebug.


La siguiente configuración permite que no tengamos que espeficiar la dirección IP de nuestro equipo; el depurador conectará con cualquier cliente que conecte con el servicio de Xdebug.

```none title="/etc/php/7.0/mods-available/xdebug.ini"
[xdebug]
zend_extension=//usr/lib/php/20151012/xdebug.so
xdebug.remote_enable=1
xdebug.remote_autostart=1
```

Por último, actívalo con:
```
phpenmod xdebug
```
