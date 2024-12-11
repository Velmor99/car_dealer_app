# Car Dealer Application

🚗 Car Dealer App is a Next.js application that allows users to filter car models by make and year, displaying the results dynamically. Visit the live site [here](https://car-dealer-1sick2iin-velmor99s-projects.vercel.app).

Here is a link to production versel site

## Features

- **Vehicle Search**: Filter car models by make and production year.
- **Dynamic Dropdowns**:
  - Dynamically load vehicle makes and years.
- **Pre-rendered Pages**: Optimize performance with pre-rendered result pages using `generateStaticParams`.
- **Responsive Design**: Fully styled with **Tailwind CSS** for a seamless experience across devices.
- **Navigation**: Intuitive navigation with a "Next" button to view search results.

## Technical Highlights

- **Pre-rendering Paths**:
  - The application pre-renders specific routes for result pages using `generateStaticParams`. This approach ensures fast load times and improves SEO.
- **Dynamic Select Components**:
  - The `SelectComponent` is highly reusable and supports dynamic data fetching. The vehicle makes and model years are fetched and displayed dynamically based on the user’s selection.

## Installation and Setup

To run the Car Dealer Application locally, follow the steps below:

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository

```bash
git clone https://github.com/Velmor99/car_dealer_app.git
cd car_dealer_app
```

### Install Dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### Run the Development Server

Start the development server:

Using npm:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

To create a production-ready build:

Using npm:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

Then, start the production server:

```bash
npm start
```

Or:

```bash
yarn start
```

## Application Overview

1. **Home Page**:

   - Allows users to select a vehicle make and a production year from dropdowns.
   - The "Next" button becomes enabled once both selections are made.

2. **Result Page**:
   - Displays the car models corresponding to the selected make and year.
   - Uses pre-rendered paths for optimized performance.

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **React**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **TypeScript**: Strict typing to enhance code reliability.

## Project Structure

```plaintext
├── components
│   ├── SelectComponent.tsx       # Reusable dropdown component
├── pages
│   ├── index.tsx                 # Home page
│   ├── result/[makeId]/[year]    # Dynamic result page
├── lib
│   ├── api.ts                    # API helpers for data fetching
├── styles
│   ├── globals.css               # Global styles
```

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for using the Car Dealer Application! Feel free to explore the code and contribute to the project.
