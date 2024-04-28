# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Install & Run
- yarn 
- yarn dev


# React+tsx

Ahora estamos utilizando archivos con extensión `.tsx` en lugar de `.jsx`. Los archivos `.tsx` permiten agregar tipos de TypeScript directamente en el código JSX.

## Configuración de TypeScript
Instalar Typescript para el proyecto y su archivo de configuracion  "tsconfig.json" en la raiz del proyecto.

## Tipado de Datos
Cuando trabajamos con TypeScript en archivos `.tsx`, es importante especificar los tipos de datos correctamente. Componente `Card` que muestra los detalles de un producto, el tipado de la prop `Card` se vería así:

```typescript
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}


