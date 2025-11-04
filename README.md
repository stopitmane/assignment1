# Interactive TypeScript Portfolio

A modern, responsive web portfolio built with TypeScript featuring smooth animations, interactive components, and a clean design.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Project Showcase**: Filterable project grid with hover effects and overlay links
- **Contact Form**: Functional contact form with validation and notifications
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **TypeScript**: Fully typed codebase for better development experience

## Technologies Used

- TypeScript
- HTML5 & CSS3
- Modern ES6+ JavaScript
- CSS Grid & Flexbox
- Intersection Observer API
- CSS Animations & Transitions

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the TypeScript:**
   ```bash
   npm run build
   ```

3. **Start development server:**
   ```bash
   npm run serve
   ```

4. **For development with auto-compilation:**
   ```bash
   npm run dev
   ```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── navigation.ts    # Navigation component with active states
│   │   └── portfolio.ts     # Portfolio projects and contact form
│   ├── styles/
│   │   └── main.css        # All styles and responsive design
│   └── main.ts             # Main application entry point
├── dist/                   # Compiled JavaScript output
├── index.html             # Main HTML file
├── package.json
└── tsconfig.json
```

## Customization

1. **Update Personal Information**: Edit the HTML content in `index.html`
2. **Add Projects**: Modify the `projects` array in `src/components/portfolio.ts`
3. **Styling**: Customize colors and layout in `src/styles/main.css`
4. **Add Features**: Extend the TypeScript components as needed

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm run dev` - Watch mode for development
- `npm run serve` - Start a local development server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project as a template for your own portfolio!