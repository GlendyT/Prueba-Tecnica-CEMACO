This is a Technical Test based on CEMACO.com page. 

## Dependencies

### Production Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| next | 16.1.1 | React framework for production |
| react | 19.2.3 | JavaScript library for building user interfaces |
| react-dom | 19.2.3 | React package for working with the DOM |
| @radix-ui/react-accordion | ^1.2.12 | Accessible accordion component |
| @radix-ui/react-slot | ^1.2.4 | Radix UI slot component |
| class-variance-authority | ^0.7.1 | Utility for creating type-safe CSS class variants |
| clsx | ^2.1.1 | Utility for constructing className strings |
| embla-carousel-react | ^8.6.0 | React carousel component |
| lucide-react | ^0.562.0 | Beautiful & consistent icon toolkit |
| tailwind-merge | ^3.4.0 | Utility function to merge Tailwind CSS classes |

### Development Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| typescript | ^5 | TypeScript language support |
| tailwindcss | ^4 | Utility-first CSS framework |
| @tailwindcss/postcss | ^4 | PostCSS plugin for Tailwind CSS |
| eslint | ^9 | JavaScript linter |
| eslint-config-next | 16.1.1 | ESLint configuration for Next.js |
| @types/node | ^20 | TypeScript definitions for Node.js |
| @types/react | ^19 | TypeScript definitions for React |
| @types/react-dom | ^19 | TypeScript definitions for React DOM |
| tw-animate-css | ^1.4.0 | Tailwind CSS animation utilities |

## Performance

🚀 **Live Performance Analysis**: [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-prueba-tecnica-cemaco-netlify-app/6jbiek0s6j?form_factor=mobile)

## Architecture & SOLID Principles

### SOLID Principles Applied

- **Single Responsibility Principle (SRP)**: Cada componente tiene una responsabilidad específica:
  - `SectionComponent.tsx`: Maneja únicamente la renderización de secciones de productos
  - `formatters.ts`: Se encarga exclusivamente del formateo de precios
  - `staticData.tsx`: Contiene únicamente la definición de datos estáticos y tipos

- **Open/Closed Principle (OCP)**: Los componentes están abiertos para extensión pero cerrados para modificación:
  - Componentes UI reutilizables en `/components/ui/`
  - Interfaces TypeScript bien definidas para extensibilidad

- **Interface Segregation Principle (ISP)**: Interfaces específicas y cohesivas:
  - `dataSectionsProps`, `Producto`, `HeroSection` - cada una con propósito específico
  - Componentes reciben solo las props que necesitan

- **Dependency Inversion Principle (DIP)**: Dependencias abstraídas:
  - Uso de props tipadas en lugar de dependencias directas
  - Separación de lógica de presentación y datos

### Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── sections/          # Secciones específicas de la aplicación
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página principal
├── components/            # Componentes reutilizables
│   ├── footer.tsx         # Componente del footer
│   ├── header.tsx         # Componente del header
│   └── SectionComponent.tsx # Componente de secciones de productos
└── utils/                 # Utilidades y helpers
    ├── formatters.ts      # Funciones de formateo
    ├── MapInfo.tsx        # Información de mapas
    └── staticData.tsx     # Datos estáticos y tipos TypeScript

components/ui/             # Componentes UI base (Radix UI + shadcn/ui)
├── accordion.tsx          # Componente acordeón
├── button.tsx             # Componente botón
├── card.tsx               # Componente tarjeta
└── carousel.tsx           # Componente carrusel

public/                    # Assets estáticos
└── [images]               # Imágenes optimizadas (.webp, .png)
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Netlify

🌐 **Live Demo**: [https://prueba-tecnica-cemaco.netlify.app/](https://prueba-tecnica-cemaco.netlify.app/)
