---
title: PHP
---

## Crear log con fopen

```php
$fp = fopen($_SERVER['DOCUMENT_ROOT'] . "logs/my.log", "a+") or die("Unable to open resource.");
fwrite($fp, $string . "\n");
fclose($fp);
```

## Extensiones

### Xdebug

Esta extensión permite el step debugging, así como una mejor impresión del comando var_dump, entre otros. Para conocer qué versión necesitas puedes usar el [asistente](https://xdebug.org/wizard). También puedes instalarlo vía pecl install xdebug.


La siguiente configuración permite que no tengamos que espeficiar la dirección IP de nuestro equipo; el depurador conectará con cualquier cliente que conecte con el servicio de Xdebug.

```none title="/etc/php/7.0/mods-available/xdebug.ini"
[xdebug]
xdebug.remote_enable=1
xdebug.remote_autostart=1
xdebug.remote_port=9090
; Use XDEBUG_PROFILE as POST/GET/COOKIE var
xdebug.profiler_enable_trigger=1
xdebug.profiler_output_dir=/var/www/html/xdebug
; Use XDEBUG_TRACE as POST/GET/COOKIE var
xdebug.trace_enable_trigger=1
xdebug.trace_output_dir=/var/www/html/xdebug
xdebug.collect_params=1
xdebug.collect_return=1
; 0 = human readable, 1 = computer readable, 2 = html
xdebug.trace_format=0
```

Por último, actívalo con:
```
phpenmod xdebug && service apache2 reload
```
