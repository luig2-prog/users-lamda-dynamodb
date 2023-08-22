# Serverless 

Conjunto de herramientas sin servidores o recursos dedicados

### Ventajas

- Rápida escalabilidad
- Excelente relación costo-beneficios
- Sencido de operar
- Mas eficiente en el proceso de desarrollo
- Facil integración

### Desventajas

- Cold-start genera latencias al inicio de la ejecución
- Limitado al conjunto de proveedores
- El debugging no es tarea facil
- No todos los desarrolladores están preparados
- Restricciónes computacionales (Límite de RAM, timeouts, almacenamiento, no acceso al SO)

## Serverless Framework

### Ventajas

- Open source y con gran comunidad
- Facilidad de leer y entender en la sintaxis (YAML)
- Conocimientos minimos para lanzar apps
- Facil integración con herramientas CI/CD y es agnostico a la nube

### Desventajas

- Puedes tener bugs por el hecho de ser código open source (No pasa mucho)
- Al definir archivos YAML ya no puedes usar funciones complejas
- Requiere conocimientos Clouds y Serverless
- Depende de CloudFormation
- Depende de su comunidad y el desarrollo de plugins y providers

## Archivo `serverless.yml`

El serverles.yml se divide principalmente en:

``` YML
service: es el nombre de la aplicación

provider: es la cloud provider (proveedor de nube) y las variables de entorno

plugins: Uso de plugins para optimizar la experiencia de desarrollo

custom: Permite definir cualquier propiedad de forma personalizada, para definir recursos exclusivo

functions: declara y define las funciones con su logica, los eventos y triggers que disparan las logicas (HTTP (API GATEWAY), SQS)

resources: IAC (infraestructura como codigo), definir con sintaxis de cloudFormation para definir los recursos que necesitemos
```

## Iniciar proyecto con Serverless Framework

Se puede utilizar el comando `serverless` o la abreviatura que es `sls`, ambos funcionan

Ejemlo: `serverless --help` o `sls --help`


- Para crear un proyecto basado en un template

``` bash
serverless create --path hola-mundo --template-url https://github.com/platzi/serverless-framework/tree/main/hola-mundo
```

- Para desplegar o actualizar un proyecto

``` bash
serverless deploy
```

- Para remover un proyecto

``` bash
serverless remove
```

## Probar y debuggear en local y en la nube

- Para probar una función lamda en local

``` bash
serverless invoke local --function function-name
```

- Para emular lo mas parecido a AWS en el local se puede hacer con el plugin [serverless offline](https://www.serverless.com/plugins/serverless-offline)

Para instalarlo desde [npm](https://www.npmjs.com/package/serverless-offline) se puede utilizar este comando:

```bash
npm install serverless-offline --save-dev
```

En nuestro `serverless.yml` agregamos esta porción de código en la sección de plugins
```bash
plugins:
  - serverless-offline
```

## Recapitulación de la aplicación y método GET

- Para instalar el SDK de AWS utilizamos el siguiente comando

```bash
npm i aws-sdk --save-dev
```

- [Querying and scanning a DynamoDB table](https://docs.amazonaws.cn/en_us/sdk-for-javascript/v3/developer-guide/dynamodb-example-query-scan.html)