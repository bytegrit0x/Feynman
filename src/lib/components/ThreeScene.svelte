<script>
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
  
  export let width = '100%';
  export let height = '500px';
  
  let container;
  let scene;
  let camera;
  let renderer;
  let controls;
  let frameId;
  
  // Physics objects
  let objects = [];
  let clock;
  
  onMount(() => {
    initScene();
    animate();
    
    // Handle resize
    const handleResize = () => {
      if (container && camera && renderer) {
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  
  onDestroy(() => {
    if (frameId) {
      cancelAnimationFrame(frameId);
    }
    if (renderer) {
      renderer.dispose();
    }
  });
  
  function initScene() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 3, 5);
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    // Controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    scene.add(directionalLight);
    
    // Grid helper
    const gridHelper = new THREE.GridHelper(10, 10);
    scene.add(gridHelper);
    
    // Axes helper
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    
    // Create ground
    const groundGeometry = new THREE.PlaneGeometry(10, 10);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xcccccc,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Add objects
    addPhysicsObjects();
    
    // Initialize clock for animation
    clock = new THREE.Clock();
  }
  
  function addPhysicsObjects() {
    // Add a cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x2196f3 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.set(-2, 0.5, 0);
    cube.castShadow = true;
    scene.add(cube);
    
    // Add physics properties to cube
    objects.push({
      mesh: cube,
      velocity: new THREE.Vector3(1, 0, 0),
      acceleration: new THREE.Vector3(0, 0, 0),
      mass: 1,
      forces: [],
      applyForce: function(force) {
        this.forces.push(force);
      }
    });
    
    // Add a sphere
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xe91e63 });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(2, 0.5, 0);
    sphere.castShadow = true;
    scene.add(sphere);
    
    // Add physics properties to sphere
    objects.push({
      mesh: sphere,
      velocity: new THREE.Vector3(-1, 0, 0),
      acceleration: new THREE.Vector3(0, 0, 0),
      mass: 0.5,
      forces: [],
      applyForce: function(force) {
        this.forces.push(force);
      }
    });
    
    // Add force vectors visualization
    for (const obj of objects) {
      // Velocity vector
      const velocityArrow = new THREE.ArrowHelper(
        obj.velocity.clone().normalize(),
        obj.mesh.position,
        obj.velocity.length() * 2,
        0x00ff00
      );
      scene.add(velocityArrow);
      obj.velocityArrow = velocityArrow;
      
      // Force vector
      const forceArrow = new THREE.ArrowHelper(
        new THREE.Vector3(0, 1, 0),
        obj.mesh.position,
        0.1,
        0xff0000
      );
      forceArrow.visible = false;
      scene.add(forceArrow);
      obj.forceArrow = forceArrow;
    }
  }
  
  function updatePhysics(deltaTime) {
    for (const obj of objects) {
      // Reset acceleration
      obj.acceleration.set(0, 0, 0);
      
      // Sum all forces
      const totalForce = new THREE.Vector3(0, 0, 0);
      for (const force of obj.forces) {
        totalForce.add(force);
      }
      obj.forces = [];
      
      // F = ma, so a = F/m
      if (obj.mass > 0) {
        obj.acceleration.addScaledVector(totalForce, 1 / obj.mass);
      }
      
      // Update velocity: v = v + a * dt
      obj.velocity.addScaledVector(obj.acceleration, deltaTime);
      
      // Update position: p = p + v * dt
      obj.mesh.position.addScaledVector(obj.velocity, deltaTime);
      
      // Simple collision with ground
      if (obj.mesh.position.y < 0.5) {
        obj.mesh.position.y = 0.5;
        obj.velocity.y = Math.abs(obj.velocity.y) * 0.8; // Bounce with energy loss
      }
      
      // Simple boundary checking to keep objects in scene
      if (Math.abs(obj.mesh.position.x) > 4.5) {
        obj.velocity.x *= -0.8;
        obj.mesh.position.x = Math.sign(obj.mesh.position.x) * 4.5;
      }
      
      if (Math.abs(obj.mesh.position.z) > 4.5) {
        obj.velocity.z *= -0.8;
        obj.mesh.position.z = Math.sign(obj.mesh.position.z) * 4.5;
      }
      
      // Update velocity arrow
      if (obj.velocityArrow) {
        obj.velocityArrow.position.copy(obj.mesh.position);
        if (obj.velocity.length() > 0.01) {
          obj.velocityArrow.setDirection(obj.velocity.clone().normalize());
          obj.velocityArrow.setLength(obj.velocity.length() * 2);
        } else {
          obj.velocityArrow.setLength(0.01);
        }
      }
      
      // Update force arrow
      if (obj.forceArrow) {
        obj.forceArrow.position.copy(obj.mesh.position);
        if (totalForce.length() > 0.01) {
          obj.forceArrow.visible = true;
          obj.forceArrow.setDirection(totalForce.clone().normalize());
          obj.forceArrow.setLength(totalForce.length() * 0.5);
        } else {
          obj.forceArrow.visible = false;
        }
      }
    }
    
    // Check for collisions between objects
    for (let i = 0; i < objects.length; i++) {
      for (let j = i + 1; j < objects.length; j++) {
        const obj1 = objects[i];
        const obj2 = objects[j];
        
        const distance = obj1.mesh.position.distanceTo(obj2.mesh.position);
        const minDistance = 1; // Simple approximation for box-sphere collision
        
        if (distance < minDistance) {
          // Calculate collision response
          const collisionNormal = new THREE.Vector3()
            .subVectors(obj2.mesh.position, obj1.mesh.position)
            .normalize();
          
          // Move objects apart
          const overlap = minDistance - distance;
          const totalMass = obj1.mass + obj2.mass;
          
          if (totalMass > 0) {
            obj1.mesh.position.addScaledVector(collisionNormal, -overlap * (obj2.mass / totalMass));
            obj2.mesh.position.addScaledVector(collisionNormal, overlap * (obj1.mass / totalMass));
          }
          
          // Calculate impulse for collision response
          const v1 = obj1.velocity.dot(collisionNormal);
          const v2 = obj2.velocity.dot(collisionNormal);
          
          // Don't collide if they're already moving apart
          if (v1 <= v2) continue;
          
          // Elastic collision formula
          const restitution = 0.8; // Coefficient of restitution
          let impulse = (-(1 + restitution) * (v1 - v2)) / (1/obj1.mass + 1/obj2.mass);
          
          // Apply impulse along collision normal
          obj1.velocity.addScaledVector(collisionNormal, -impulse / obj1.mass);
          obj2.velocity.addScaledVector(collisionNormal, impulse / obj2.mass);
        }
      }
    }
  }
  
  // Apply gravity to all objects
  export function applyGravity(strength = 9.8) {
    for (const obj of objects) {
      const gravity = new THREE.Vector3(0, -strength, 0);
      obj.applyForce(gravity.clone().multiplyScalar(obj.mass));
    }
  }
  
  // Apply a force to an object
  export function applyForce(objectIndex, forceVector) {
    if (objectIndex >= 0 && objectIndex < objects.length) {
      objects[objectIndex].applyForce(forceVector);
    }
  }
  
  // Reset the scene
  export function resetScene() {
    // Reset cube
    objects[0].mesh.position.set(-2, 0.5, 0);
    objects[0].velocity.set(1, 0, 0);
    objects[0].acceleration.set(0, 0, 0);
    
    // Reset sphere
    objects[1].mesh.position.set(2, 0.5, 0);
    objects[1].velocity.set(-1, 0, 0);
    objects[1].acceleration.set(0, 0, 0);
  }
  
  function animate() {
    frameId = requestAnimationFrame(animate);
    
    const deltaTime = clock.getDelta();
    
    // Apply gravity
    applyGravity(9.8);
    
    // Update physics
    updatePhysics(deltaTime);
    
    // Update controls
    controls.update();
    
    // Render scene
    renderer.render(scene, camera);
  }
</script>

<div 
  bind:this={container} 
  style="width: {width}; height: {height}; position: relative;"
  class="relative"
>
  <!-- Three.js canvas will be appended here -->
</div>