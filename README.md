# Empezar a correr el proyecto

**Solicitar las variables de entorno `[discord/recursos/mensajes-fijados]`**

Crea un archivo `.env` en la carpeta raiz del proyecto y coloca las variables allí
En la variable llamada `DATABASE_URL` reemplazar tus credenciales de postgres:

```
[placeholder de la contraseña] => tu contraseña
```

Crea una nueva base de datos con el nombre "lazy_buy". **En caso de ya existir, omitir este paso**

```sql
CREATE DATABASE "lazy_buy";
```

Clona desde la rama `main`

```bash
cd [ruta donde se clonará la carpeta del proyecto]
git clone "https://github.com/SamuelRnn/lazy-buy.git"
cd lazy-buy
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

Visita en el navegador la siguiente ruta [http://localhost:3000/api/dev](http://localhost:3000/api/dev)

Todo listo! Visita la ruta [http://localhost:3000/](http://localhost:3000/) para empezar.
