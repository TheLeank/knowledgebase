---
title: PHP
---

## Crear log con fopen

Crea y establece permisos al directorio `logs` en la raíz de documento en caso de que no exista. El fichero se creará automáticamente.

```php
$fp = fopen($_SERVER['DOCUMENT_ROOT'] . "/logs/my.log", "a+") or die("Unable to open resource.");
fwrite($fp, $string . "\n");
fclose($fp);
```

## Devolver contenido como JSON

Útil para depurar en Firefox, que incorpora un «visor» para JSON.

```php
header('Content-type:application/json;charset=utf-8');
echo json_encode($data);
die();
```

## Extensiones

### Xdebug 2

Esta extensión permite el step debugging, así como una mejor impresión del comando var_dump, entre otros. Para conocer qué versión necesitas puedes usar el [asistente](https://xdebug.org/wizard). También puedes instalarlo vía pecl install xdebug.


La siguiente configuración permite que no tengamos que espeficiar la dirección IP de nuestro equipo; el depurador conectará con cualquier cliente que conecte con el servicio de Xdebug. En este caso se configura para la versión 7.3 de PHP, revisa que la ruta a la extensión sea correcta en tu caso.

```none title="/etc/php/7.3/mods-available/xdebug.ini"
[xdebug]
zend_extension=/usr/lib/php/20180731/xdebug.so
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

o, si usas php-fpm, con:
```
phpenmod xdebug && service php7.3-fpm reload
```

### Xdebug 3

TODO
