# Campers

Campers is a web application designed for users to explore and book camper vans for their travels. The project provides a seamless experience for browsing a catalog of campers, filtering them based on specific needs, and viewing detailed information, including features and reviews.

## Features

- **Home Page**: A welcoming landing page with a hero section to start your journey.
- **Camper Catalog**: Browse a wide selection of campers with basic information and pricing.
- **Advanced Filtering**: Filter the catalog by location, equipment (AC, Kitchen, TV, Bathroom, etc.), and vehicle type.
- **Product Details**: Deep dive into each camper's specifications, features, and user reviews.
- **Favorites**: Save your favorite campers for quick access later.
- **Booking System**: Integrated contact form for booking inquiries using Formik and Yup for validation.
- **Responsive Design**: Optimized for various screen sizes.

## Tech Stack

- **Frontend**: React 19, Vite
- **State Management**: Redux Toolkit (with persistence for favorites)
- **Routing**: React Router 7
- **API Interaction**: Axios
- **Forms**: Formik & Yup
- **Notifications**: React Hot Toast
- **Styling**: CSS Modules

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd campers
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```

## Project Structure

- `src/components`: Reusable UI components.
- `src/pages`: Main application views (Home, Catalog, Product Details).
- `src/redux`: Redux slices and operations for products and favorites.
- `src/assets`: Static assets like images and styles.

## API Reference

The project uses a mock API for camper data:
`https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`

## License

This project is private and for educational purposes.
