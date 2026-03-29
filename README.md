# 30 Days Internship Challenge

A minimalist landing page for a 30-day coding internship challenge series, built with React and Vite.

## Features

- Clean, minimalist design with responsive layout
- Grid-based day button layout (1-30)
- Easy resource linking for each day
- Smooth hover effects and transitions
- Mobile-friendly responsive design

## Project Structure

```
├── src/
│   ├── App.jsx           # Main landing page component
│   ├── App.css           # Component styling
│   ├── index.css         # Global styles
│   ├── main.jsx          # React entry point
│   └── resources.js      # Day resources configuration
├── index.html            # HTML template
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "30days Internship"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:3000`

## Customization

### Adding Resources for Each Day

Edit the [src/resources.js](src/resources.js) file and add your resource titles and links:

```javascript
1: {
  title: "Variables & Data Types",
  link: "https://your-resource-link.com"
}
```

You can use:
- External URLs (e.g., `https://example.com/day1`)
- Internal paths (e.g., `/resources/day1.html`)
- Google Drive links
- YouTube playlist links
- Any other resource link

### Modifying the Design

The styling is in [src/index.css](src/index.css). You can easily customize:
- Colors (update color values like `#333`, `#e0e0e0`)
- Font sizes
- Spacing and gaps
- Button hover effects
- Responsive breakpoints

## Building for Production

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The build output will be in the `dist` folder, ready to deploy.

## Deployment

You can deploy this static site to:
- Vercel (recommended, free tier available)
- Netlify
- GitHub Pages
- AWS S3
- Firebase Hosting

### Deploying to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and select your repository
4. Select "Vite" as the framework
5. Click "Deploy"

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Free to use for your internship challenge series.
