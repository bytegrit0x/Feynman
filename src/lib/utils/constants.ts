/**
 * Project-wide constants
 */

// Physics constants
export const GRAVITATIONAL_CONSTANT = 6.67430e-11; // m^3 kg^-1 s^-2
export const EARTH_GRAVITY = 9.81; // m/s^2
export const SPEED_OF_LIGHT = 299792458; // m/s
export const PLANCK_CONSTANT = 6.62607015e-34; // J⋅s

// Simulation defaults
export const DEFAULT_SIMULATION_TIME_STEP = 0.016; // seconds (~60fps)
export const DEFAULT_DAMPING_FACTOR = 0.98;
export const DEFAULT_RESTITUTION = 0.8; // Coefficient of restitution
export const DEFAULT_FRICTION = 0.5;

// UI constants
export const FEYNMAN_RED = '#d9381e';
export const PRIMARY_COLOR = FEYNMAN_RED;
export const SECONDARY_COLOR = '#3b82f6';
export const TERTIARY_COLOR = '#8b5cf6';

// Project Information
export const PROJECT_NAME = 'Feynman Lectures Visualization';
export const PROJECT_VERSION = '0.1.0';
export const COPYRIGHT_YEAR = '2025';

// Simulation categories
export const SIMULATION_CATEGORIES = {
  MECHANICS: 'mechanics',
  ELECTROMAGNETISM: 'electromagnetism', 
  QUANTUM: 'quantum'
};

// Volume information
export const VOLUMES = [
  {
    id: 1,
    title: 'Mechanics, Radiation, and Heat',
    path: '/simulations/volume1',
    color: FEYNMAN_RED,
    available: true
  },
  {
    id: 2,
    title: 'Electromagnetism and Matter',
    path: '/simulations/volume2',
    color: SECONDARY_COLOR,
    available: false
  },
  {
    id: 3,
    title: 'Quantum Mechanics',
    path: '/simulations/volume3',
    color: TERTIARY_COLOR,
    available: false
  }
];