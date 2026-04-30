# ValoAPI

Mini blog hecho con **Vite + React + React Router** sobre agentes de **Valorant**.  
La app consume la API pública de Valorant para mostrar un listado de agentes, su vista de detalle y una sección de favoritos manejada con **Context API**.

## Nivel al que apunta el proyecto

**Senior**

Cumple con la meta funcional de:

- Rutas con React Router
- Página de listado y detalle
- Búsqueda
- Botón de agente aleatorio
- Página 404
- Estado global con Context API
- PropTypes en componentes reutilizables
- Consumo de API externa

## Vista general

El proyecto está centrado en explorar agentes de Valorant:

- `Home` presenta la aplicación
- `Agentes` muestra el roster completo
- `Detalle` enseña información individual y habilidades
- `Favoritos` guarda agentes marcados por el usuario

Los favoritos se persisten en `localStorage`, así que no se pierden al recargar la página.

## Tecnologías usadas

- `React`
- `Vite`
- `react-router-dom`
- `PropTypes`
- `Context API`
- `Valorant API`

## Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Página principal |
| `/items` | Listado de agentes |
| `/items/:id` | Detalle de un agente |
| `/favorites` | Agentes marcados como favoritos |
| `*` | Página 404 |

## Funcionalidades implementadas

- Navegación con `Link` y `NavLink`
- Listado dinámico de agentes consumidos desde API externa
- Vista de detalle usando `useParams`
- Buscador por nombre en el listado
- Botón de agente aleatorio usando `useNavigate`
- Página 404 para rutas inexistentes
- Estado global con `FavoritesContext`
- Persistencia de favoritos con `localStorage`
- Componentes reutilizables con `PropTypes`

## Estructura del proyecto

```text
src/
  api/
    valoagent.js
  components/
    AbilityCard.jsx
    AgentCard.jsx
    Navbar.jsx
  context/
    FavoritesContext.jsx
  pages/
    Home.jsx
    Agents.jsx
    SelectedAgent.jsx
    Favorites.jsx
    NotFound.jsx
  App.jsx
  App.css
  index.css
```

## Componentes reutilizables

### `AgentCard`

Tarjeta usada para renderizar cada agente en el listado y en favoritos.

**Props**

- `agent`
  - `uuid: string`
  - `displayName: string`
  - `description?: string`
  - `displayIcon?: string`

### `AbilityCard`

Tarjeta usada para renderizar cada habilidad dentro del detalle del agente.

**Props**

- `ability`
  - `slot: string`
  - `displayName: string`
  - `description?: string`
  - `displayIcon?: string`

### `Navbar`

Barra de navegación principal de la aplicación.

**Props**

- `title: string`

## Manejo de datos

Los datos no están hardcodeados dentro de los componentes.  
La app consume la API desde un módulo separado:

- `src/api/valoagent.js`

Funciones principales:

- `getAgents()`
- `getAgentById(id)`

## Estado global

El estado global se maneja con:

- `src/context/FavoritesContext.jsx`

Este contexto expone:

- `favorites`
- `addFavorite`
- `removeFavorite`
- `isFavorite`
- `toggleFavorite`

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd valoAPI
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

### 4. Crear build de producción

```bash
npm run build
```

### 5. Previsualizar build

```bash
npm run preview
```

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo
- `npm run build`: genera la versión de producción
- `npm run preview`: sirve localmente la build
- `npm run lint`: ejecuta ESLint

## Evidencia para la rúbrica

### Requerimientos base

- Proyecto creado con Vite
- Uso de React Router
- Mínimo 3 rutas
- Datos separados de los componentes
- Uso de `useParams`
- Navegación con `Link`

### Requerimientos Mid

- Página 404
- Búsqueda en listado
- Botón aleatorio con `useNavigate`
- Componente reutilizable documentado en este README

### Requerimientos Senior

- Estado global con Context API
- 3 o más componentes con `PropTypes`
- Consumo de API externa

## Demo

El video de demostración debe colocarse en:

```text
demo/
```

Nombre sugerido:

```text
demo/valoapi-demo.mp4
```

El video debe mostrar:

- navegación a `/`
- navegación a `/items`
- navegación a `/items/:id`
- uso del buscador
- botón aleatorio
- agregado y eliminación de favoritos
- ruta inválida mostrando la 404

## Mejoras futuras

- Ajustar el proyecto a `react-router-dom v6` si la rúbrica lo exige estrictamente
- Agregar indicadores visuales extra para favoritos
- Incluir tests para componentes y rutas
- Añadir skeleton loaders o estados vacíos más ricos

## Autoría

Proyecto académico desarrollado para el ejercicio de React usando la temática de **Valorant**.
