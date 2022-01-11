<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Final project - Henry

<p align="right">
  <img height="200" src="./e-commerce.jpg" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Styled-components, Nodejs y Sequelize-Postgres.
- Afirmar y conectar los conceptos aprendidos en el bootcamp.
- Aprender mejores prácticas.
- Aprender y practicar nuevos conceptos impresindibles para todas las funcionalidades de la e-commerce.

## Horarios y Fechas

El proyecto tendrá una duración máxima de cuatro semanas.

## BoilerPlate

El boilerplate cuenta con dos carpetas: `backend` y `frontend`. En estas carpetas estará el código del back-end y el front-end respectivamente.

Será necesario que creen desde psql una base de datos llamada `pf_ecommerce`, un archivo .env dentro de backend y setearlo acorde a sus propios datos ej:

```
DB_USER=postgres
DB_PASSWORD=password
DB_HOST=localhost
```

El contenido de `frontend` fue creado usando: Create React App.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver los distintos productos disponibles junto con información relevante de los mismos

- Login
- Buscar productos
- Filtrarlos / Ordenarlos
- Comprar productos

### Requerimientos (user-stories):

- https://docs.google.com/spreadsheets/d/162kt1DbWQfjbesE-Od7e5dc9lZCRwDes/edit?usp=sharing&ouid=102824467810996812667&rtpof=true&sd=true

\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\* QUE EMPIECE EL JUEGO XD!!! \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

#### Base de datos

El modelo de la base de datos: https://lucid.app/lucidchart/a5a5fa32-d658-45ca-bbb9-6c7948055a70/edit?invitationId=inv_bfa12a67-7ceb-4c2d-9231-6cc1c659b7b4

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] **POST /products**:

  - Recibe los datos necesarios por body, valida la data
  - Crea un producto en la base de datos, recuerdar verificar el modelo E-R para ingresar correctamente un producto a la D.B.
    la data se debe repartir en los modelos: Product, Image, Category, Supplier.

- [ ] **GET /products**:

  - Obtener un listado de los products
  - Debe responder solo con los datos necesarios para una primera vista (name, imagen principal, precio) y id.

- [ ] **GET /products?name="..."**:

  - Obtener un listado de los productos que contengan la palabra ingresada como query parameter
  - Si no existe ningún producto mostrar un mensaje adecuado. res.json({msg:'Not found'})

- [ ] **GET /products/{idProduct}**:

  - Obtener el detalle de un producto en particular (solo datos necesarios para la ruta detalle del front),
  - Incluir imagenes asociadas, en caso que tenga.

- [ ] **GET /categories**:

  - Obtener todas las categories posibles.

#### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes rutas.

**Pagina inicial**: /

**Ruta principal**: /shop
debería contener:

- [ ] form de búsqueda para encontrar productos por nombre
- [ ] Área donde se verá el listado de productos (paginados, 10 productos por pagina). Deberá mostrar su:
  - Nombre
  - Imagen principal
  - Precio
- [ ] Opciones para filtrar por categories
- [ ] Opciones para ordenar tanto ascendentemente como descendentemente los productos por precio y alfabeticamente

**Ruta de detalle de producto**:

- pegarle al back para obtener el detalle de un producto en particular (fullData). y renderizarlo en una card especial, lo mas hermoso que se pueda.
- boton agregar al carrito
- boton comprar

**Ruta de creación de productos**: debe contener

- [ ] Un formulario **controlado** con los siguientes campos
  - Nombre
  - Descripción
  - Precio de venta
  - Stock
  - Imagen principal
  - Posibilidad de seleccionar/agregar la imagen principal y varias imagenes secundarias
  - Posibilidad de seleccionar/agregar varias categorias
  - Botón/Opción para crear un nuevo producto
