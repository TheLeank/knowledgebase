---
title: PHP
---

## Extensiones

### Xdebug

Esta extensión permite el step debugging, así como una mejor impresión del comando var_dump, entre otros. Para conocer qué versión necesitas puedes usar el [asistente](https://xdebug.org/wizard). También puedes instalarlo vía pecl install xdebug.


La siguiente configuración permite que no tengamos que espeficiar la dirección IP de nuestro equipo; el depurador conectará con cualquier cliente que conecte con el servicio de Xdebug

```none title="/ruta/a/php/conf.d/20-xdebug.conf"
[xdebug]
zend_extension=/ruta/a/xdebug.so
xdebug.remote_enable=1
xdebug.remote_autostart=1
```