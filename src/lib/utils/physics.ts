/**
 * Utility functions for physics calculations
 */

import type { Vector3 } from 'three';

/**
 * Convert degrees to radians
 */
export function degToRad(degrees: number): number {
  return degrees * Math.PI / 180;
}

/**
 * Convert radians to degrees
 */
export function radToDeg(radians: number): number {
  return radians * 180 / Math.PI;
}

/**
 * Calculate distance between two points
 */
export function distance(p1: Vector3, p2: Vector3): number {
  return Math.sqrt(
    Math.pow(p2.x - p1.x, 2) +
    Math.pow(p2.y - p1.y, 2) +
    Math.pow(p2.z - p1.z, 2)
  );
}

/**
 * Calculate the dot product of two vectors
 */
export function dotProduct(v1: Vector3, v2: Vector3): number {
  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
}

/**
 * Calculate the magnitude of a vector
 */
export function magnitude(v: Vector3): number {
  return Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
}

/**
 * Calculate kinetic energy
 * KE = 0.5 * mass * velocity^2
 */
export function kineticEnergy(mass: number, velocity: number): number {
  return 0.5 * mass * velocity * velocity;
}

/**
 * Calculate gravitational potential energy
 * PE = mass * gravity * height
 */
export function potentialEnergy(mass: number, gravity: number, height: number): number {
  return mass * gravity * height;
}

/**
 * Calculate momentum
 * p = mass * velocity
 */
export function momentum(mass: number, velocity: Vector3): Vector3 {
  return {
    x: mass * velocity.x,
    y: mass * velocity.y,
    z: mass * velocity.z
  } as Vector3;
}

/**
 * Format a number to a specified precision with units
 */
export function formatWithUnits(value: number, precision: number = 2, unit: string = ''): string {
  return `${value.toFixed(precision)}${unit ? ' ' + unit : ''}`;
}

/**
 * Calculate the angle between two vectors (in radians)
 */
export function angleBetweenVectors(v1: Vector3, v2: Vector3): number {
  const dot = dotProduct(v1, v2);
  const magProduct = magnitude(v1) * magnitude(v2);
  
  // Prevent division by zero and floating point errors
  if (magProduct === 0) return 0;
  
  return Math.acos(Math.min(Math.max(dot / magProduct, -1), 1));
}

/**
 * Apply a constraint to a value (clamp between min and max)
 */
export function constrain(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}