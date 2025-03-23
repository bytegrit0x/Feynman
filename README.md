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

# Sync SvelteKit files (important!)
npx svelte-kit sync

# Start the development server
npm run dev
```

Visit `http://localhost:5173` to see the application running.

### Troubleshooting Setup

If you encounter any issues:

1. Make sure you've run `npx svelte-kit sync` after installing dependencies
2. Check that the favicon exists: `static/favicon.png`
3. Verify that `src/app.html` exists and is properly formatted
4. If you see dependency errors, try `npm install` again

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run check` - Run type checking
- `npm run lint` - Run linting

## Deployment to Cloudflare

The project is configured for deployment to Cloudflare Pages:

1. Install Wrangler CLI: `npm install -g wrangler`
2. Log in to Cloudflare: `wrangler login`
3. Build the project: `npm run build`
4. Deploy: `wrangler pages publish build`

You can also set up automatic deployments by connecting your GitHub repository to Cloudflare Pages in the Cloudflare dashboard.

## Project Structure

```
/
├── docs/                 # Project documentation
├── src/
│   ├── lib/              # Library components and utilities
│   │   ├── components/   # Reusable Svelte components
│   │   │   └── ComponentTemplate.svelte  # Base component template
│   │   ├── physics/      # Physics simulation modules
│   │   │   └── NewtonsLaws.js  # Newton's Laws calculations
│   │   └── utils/        # Utility functions
│   │       ├── constants.ts  # Project-wide constants
│   │       └── physics.ts    # Physics utility functions
│   ├── routes/           # SvelteKit routes and pages
│   │   ├── +layout.svelte  # Main layout
│   │   ├── +page.svelte    # Home page
│   │   ├── about/          # About page
│   │   └── simulations/    # Simulation pages
│   ├── app.html          # SvelteKit HTML template
│   └── app.css           # Global styles (Tailwind)
├── static/               # Static assets
│   └── favicon.png       # Favicon
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── svelte.config.js      # SvelteKit configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.js        # Vite configuration
├── wrangler.toml         # Cloudflare Wrangler configuration
├── README.md             # Project overview
└── package.json          # Project dependencies and scripts
```

## Working with Components

When creating new components, use the template in `src/lib/components/ComponentTemplate.svelte` as a starting point. This ensures consistent formatting and proper TypeScript integration.

## Physics Simulations

Physics calculations are handled by dedicated modules in the `src/lib/physics/` directory. Common utility functions are available in `src/lib/utils/physics.ts`.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- The Feynman Lectures on Physics by Richard Feynman, Robert B. Leighton, and Matthew Sands
- California Institute of Technology for the original lecture content
- The Three.js community for 3D visualization libraries