# Empezar a correr el proyecto

**Solicitar las variables de entorno `[discord/recursos/mensajes-fijados]`**

Clona desde la rama `main`

```bash
cd [ruta donde se clonará la carpeta del proyecto]
git clone "https://github.com/SamuelRnn/lazy-buy.git"
cd lazy-buy
code .
```
Crea un archivo `.env` en la carpeta raiz del proyecto y coloca las variables allí
En la variable llamada `DATABASE_URL` reemplazar tus credenciales de postgres:

```
[placeholder de la contraseña] => tu contraseña
```

Crea una nueva base de datos en la consola de postgres con el nombre "lazy_buy". Si existía antes, borrar la anterior

```sql
DROP DATABASE "lazy_buy";
CREATE DATABASE "lazy_buy";
```

En la carpeta `/prisma` asegurarse de no tener ninguna carpeta `migrations`, en caso de que exista, borrarla.

Instala las dependencias

```bash
npm i
```

Crea los modelos en la base de datos

```bash
npx prisma migrate dev
```

**En caso de recibir un mensaje de que toda la data sera borrada, darle a yes (`y`)**

Colocarle cualquier nombre a la migracion _Recomendado_ `dev`

Levantar el proyecto

```bash
npm run dev
```

Visita en el navegador la siguiente ruta <a href="http://localhost:3000/api/dev" target="_blank">/api/dev</a>

Todo listo! Visita la ruta [http://localhost:3000/](http://localhost:3000/) para empezar.
