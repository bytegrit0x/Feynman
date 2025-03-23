import * as THREE from 'three';

/**
 * Calculate net force on an object
 * @param {Array} forces - Array of force vectors
 * @returns {THREE.Vector3} - Net force vector
 */
export function calculateNetForce(forces) {
  const netForce = new THREE.Vector3(0, 0, 0);
  for (const force of forces) {
    netForce.add(force);
  }
  return netForce;
}

/**
 * Calculate acceleration based on Newton's Second Law (F = ma)
 * @param {THREE.Vector3} netForce - Net force vector
 * @param {number} mass - Mass of the object
 * @returns {THREE.Vector3} - Acceleration vector
 */
export function calculateAcceleration(netForce, mass) {
  if (mass <= 0) return new THREE.Vector3(0, 0, 0);
  
  const acceleration = netForce.clone().divideScalar(mass);
  return acceleration;
}

/**
 * Update velocity based on acceleration over time
 * @param {THREE.Vector3} velocity - Current velocity
 * @param {THREE.Vector3} acceleration - Acceleration vector
 * @param {number} deltaTime - Time step 
 * @returns {THREE.Vector3} - Updated velocity
 */
export function updateVelocity(velocity, acceleration, deltaTime) {
  const newVelocity = velocity.clone();
  newVelocity.addScaledVector(acceleration, deltaTime);
  return newVelocity;
}

/**
 * Update position based on velocity over time
 * @param {THREE.Vector3} position - Current position
 * @param {THREE.Vector3} velocity - Velocity vector
 * @param {number} deltaTime - Time step
 * @returns {THREE.Vector3} - Updated position
 */
export function updatePosition(position, velocity, deltaTime) {
  const newPosition = position.clone();
  newPosition.addScaledVector(velocity, deltaTime);
  return newPosition;
}

/**
 * Calculate momentum (p = mv)
 * @param {number} mass - Mass of the object
 * @param {THREE.Vector3} velocity - Velocity vector
 * @returns {THREE.Vector3} - Momentum vector
 */
export function calculateMomentum(mass, velocity) {
  return velocity.clone().multiplyScalar(mass);
}

/**
 * Calculate kinetic energy (KE = 1/2 mv²)
 * @param {number} mass - Mass of the object
 * @param {THREE.Vector3} velocity - Velocity vector
 * @returns {number} - Kinetic energy
 */
export function calculateKineticEnergy(mass, velocity) {
  return 0.5 * mass * velocity.lengthSq();
}

/**
 * Calculate elastic collision response
 * @param {Object} obj1 - First object with mass and velocity
 * @param {Object} obj2 - Second object with mass and velocity
 * @param {THREE.Vector3} collisionNormal - Normalized collision direction
 * @param {number} restitution - Coefficient of restitution (1 = elastic, 0 = inelastic)
 * @returns {Object} - New velocities for both objects
 */
export function calculateCollision(obj1, obj2, collisionNormal, restitution = 1) {
  // Project velocities onto collision normal
  const v1 = obj1.velocity.dot(collisionNormal);
  const v2 = obj2.velocity.dot(collisionNormal);
  
  // Don't collide if objects are moving away from each other
  if (v1 <= v2) return { v1: obj1.velocity.clone(), v2: obj2.velocity.clone() };
  
  // Calculate impulse
  const m1 = obj1.mass;
  const m2 = obj2.mass;
  const impulse = (-(1 + restitution) * (v1 - v2)) / (1/m1 + 1/m2);
  
  // Calculate new velocities
  const v1Final = obj1.velocity.clone().addScaledVector(collisionNormal, -impulse / m1);
  const v2Final = obj2.velocity.clone().addScaledVector(collisionNormal, impulse / m2);
  
  return { v1: v1Final, v2: v2Final };
}

/**
 * Calculate gravitational force between two objects (F = G * m1 * m2 / r²)
 * @param {Object} obj1 - First object with mass and position
 * @param {Object} obj2 - Second object with mass and position
 * @param {number} G - Gravitational constant
 * @returns {THREE.Vector3} - Gravitational force on obj1 due to obj2
 */
export function calculateGravitationalForce(obj1, obj2, G = 6.67430e-11) {
  const direction = new THREE.Vector3().subVectors(obj2.position, obj1.position);
  const distance = direction.length();
  
  // Avoid division by zero
  if (distance < 0.001) return new THREE.Vector3(0, 0, 0);
  
  // Calculate force magnitude
  const forceMagnitude = G * obj1.mass * obj2.mass / (distance * distance);
  
  // Return force vector
  return direction.normalize().multiplyScalar(forceMagnitude);
}