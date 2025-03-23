# Feynman Lectures Visualization Project

This project aims to transform Richard Feynman's legendary physics lectures into an interactive, immersive 3D learning experience. Our mission is to preserve Feynman's unique teaching approach while leveraging modern technology to make complex physics concepts more accessible and engaging to learners worldwide.

## Project Status

We're currently in **Phase 1: Foundation** (Milestone 1), building the core infrastructure and initial simulations for Volume I of the Feynman Lectures on Physics.

## Technology Stack

- **Frontend**: Svelte/SvelteKit, TypeScript, TailwindCSS
- **3D Visualization**: Three.js with custom physics extensions
- **Deployment**: Cloudflare Pages

## Key Features

Each simulation in the project will include:

- Interactive 3D environments with full camera controls
- Real-time adjustment of physical parameters
- Multiple visualization modes for each concept
- Educational overlays connecting to Feynman's original text
- Challenge problems for deeper learning

## Development Setup

### Prerequisites

- Node.js (version 16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/feynman-lectures-visualization.git
cd feynman-lectures-visualization

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to see the application running.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run check` - Run type checking
- `npm run lint` - Run linting

## Deployment

The project is configured for deployment to Cloudflare Pages. The production site will be available at [https://feynman-lectures.pages.dev](https://feynman-lectures.pages.dev) once deployed.

## Project Structure

```
/
├── docs/               # Project documentation
├── src/
│   ├── lib/            # Library components and utilities
│   │   ├── components/ # Reusable Svelte components
│   │   ├── physics/    # Physics simulation modules
│   │   └── utils/      # Utility functions
│   ├── routes/         # SvelteKit routes and pages
│   └── app.css         # Global styles
├── static/             # Static assets
├── README.md           # Project overview
└── package.json        # Project dependencies and scripts
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- The Feynman Lectures on Physics by Richard Feynman, Robert B. Leighton, and Matthew Sands
- California Institute of Technology for the original lecture content
- The Three.js community for 3D visualization libraries