# **TODO Cistem BackEnd**

Aplicación de TODOS de Cistem.

Bienvenido al repositorio oficial del proyecto **todo-cistem-backend**. Aquí se aloja el código fuente de la aplicación **todo-cistem-backend** en calidad de backend, construido con el framework **[Vue JS](https://vuejs.org/guide/quick-start.html)**.

## **Guía de Instalación**

Para realizar el montaje de esta aplicación para avances en su desarrollo, siga los siguientes pasos:

1. ✨ **Abrir una ventana terminal**.

2. ✨ **Verifique si cuenta con Node JS instalado:**

    ```sh
    node -v
    ```

    > **NOTA**: En caso de no contar con el entorno de ejecución de Javascript, Node JS, acceda al siguiente enlace para su instalación o actualización:
    > https://nodejs.org/es
    > 
    > Una vez instalado, ejecute el comando anterior para determinar si se realizo la instalación.


3. ✨ **Clone el repositorio de `todo-cistem-backend`**:

    ```sh
    git clone https://github.com/DanielGonzalez-Cistem/todo-cistem-backend.git
    ```

4. ✨ **Nos situamos en la raíz del proyecto**:

    ```sh
    cd "todo-cistem-backend"
    ```

5. ✨ **Instalamos los módulos de Node JS**:

    ```sh
    npm install
    ```

6. ✨ **Abrir el proyecto en un editor de código**:

    > NOTA: Se recomienda que se utilice **[Visual Studio Code](https://code.visualstudio.com/download)**. 
    >
    > De tenerlo, use el comando **`code .`** para abrir el proyecto con VS Code.

## **Configuración de Variables de Entorno**

Una vez montado el proyecto procederemos a ejecutar la aplicación, pero antes de eso, se deben configurar las variables de entorno correspondientes. A continuación, se describirán los pasos para configurar las variables de entorno de la aplicación:

1. ✨ **Ubique y abra el archivo llamado `.env-example`.**

2. ✨ **Copie y pegue en la raíz del proyecto dicho archivo.**

3. ✨ **Renombre el archivo copiado por `.env`.**

4. ✨ **En el contenido, ingrese lo siguiente:** 

    ```sh
    #* Variables de Entorno
    #* 1. Es importante, que este archivo, este en la raíz del proyecto.
    #* 2. Copie y pegue este archivo en la raíz.
    #* 3. Renombre el archivo copiado a ".env" y la app hará el resto.
    #* 4. Se recomienda dejar las variables de entorno en el orden ya especifícado.

    #? Tipo de Entorno (development|production)
    NODE_ENV="development"

    #? Versión de Producto
    VERSION="0.1.0-alpha"

    #? Puertos de Aplicación
    APP_PORT=""
    AUTH_PORT=""

    #? Lista de Origenes Permitidos
    LIST_ORIGINS_CORS=""

    #? Habilitar HTTPS (OK|"")
    HTTPS=""

    #? Host de la Aplicación al Desplegarse
    HOST=""

    #? Ruta Absoluta de Certificados SSL
    SSL_KEY=""
    SSL_CERT=""
    ```

5. **✨ Especifique los valores correspondientes en las variables de entorno**-

6. ✨ **Guarde los cambios y será todo.**

    > **NOTA**: La variable `VERSION` puede cambiar conforme a la madurez del proyecto. Al inicio del proyecto, la versión es `0.1.0-alpha`.

## **Inicio de Servidor**

Una vez configurado lo anterior, ya puedes ejecutar el servidor. Para eso, ejecuta el comando:

```sh
npm run dev
```

La consola, debería regresar una respuesta como esta:

```sh
✨ todo-cistem-backend v0.1.0-alpha inicializado...

⚡ [APP]: running at http://<ip-domain>:<port>
⚡ [AUTH]: running at http://<ip-domain>:<port>
```

Si esto es correcto, puede tomar la dirección URL proporcionada en la consola y hacer pruebas con un cliente API como Postman, Thunder Client, etc.

## ✅ **Topicos**

Conoce otros aspectos internos del proyecto en este repositorio:

✨ **[Convención de Commits](./CONVENTIONAL_COMMITS.md)**

✨ **[Esquema de Versionamiento](./VERSIONING_SCHEME.md)**

---
© 2023 Cistem Innovación ® | Casa de Software. All Rights Reserved. Soluciones de Cistem Innovación ® Casa de Software.