---
title: Apache
---

## .htaccess

### Redirección a https

```
RewriteEngine On 
RewriteCond %{SERVER_PORT} 80 
RewriteRule ^(.*)$ https://DOMINIO.TLD/$1 [R=301,L]
```

### Redirección 301

Desde la raíz hacia un subdirectorio:

```
RewriteEngine On
RedirectMatch ^/$ /tienda/
```

O desde un directorio a otro:

```
RedirectMatch ^/folder/$ /folder/subfolder/
```

### Modo mantenimiento

En este caso el fichero al que se realiza la redirección es maintenance.html

```
<IfModule mod_rewrite.c>
 RewriteEngine on
 RewriteCond %{REQUEST_URI} !/maintenance.html$ [NC]
 RewriteCond %{REQUEST_URI} !\.(jpe?g?|png|gif) [NC]
 RewriteCond %{REMOTE_HOST} !^000\.000\.000\.000
 RewriteRule .* /maintenance.html [R=302,L]
</IfModule>
```