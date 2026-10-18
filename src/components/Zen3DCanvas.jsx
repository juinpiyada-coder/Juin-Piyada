import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Zen3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xFCFCFA, 0.035);

    // --- Camera Setup ---
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14);

    // --- Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // --- Lighting (Warm Japandi Aesthetics) ---
    const ambientLight = new THREE.AmbientLight(0xFFFDF7, 1.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xF4ECE6, 2.2);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xEBF0EC, 1.4);
    dirLight2.position.set(-10, -8, 5);
    scene.add(dirLight2);

    // Cursor dynamic point light
    const cursorLight = new THREE.PointLight(0xB8764B, 2.5, 12, 1.5);
    cursorLight.position.set(0, 0, 4);
    scene.add(cursorLight);

    // --- 1. Zen Sculpted Floating Stones ---
    const stoneGroup = new THREE.Group();
    scene.add(stoneGroup);

    // Stone geometries & materials (Sandstone, Smooth Porcelain, Charcoal Basalt)
    const stoneMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xF2ECE2, // Warm Porcelain
        roughness: 0.35,
        metalness: 0.05,
        flatShading: false,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xDDD4C5, // Sandstone
        roughness: 0.65,
        metalness: 0.02,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x383531, // Basalt Slate
        roughness: 0.45,
        metalness: 0.1,
      }),
      new THREE.MeshStandardMaterial({
        color: 0xC88B63, // Warm Terracotta / Cedar
        roughness: 0.4,
        metalness: 0.05,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x758A76, // Matcha Sage
        roughness: 0.5,
        metalness: 0.05,
      })
    ];

    const stones = [];
    const stoneConfigs = [
      { radius: 1.4, detail: 2, scale: [1.3, 0.8, 1.0], pos: [4.8, 2.2, -1], rotSpeed: [0.003, 0.005], matIndex: 0 },
      { radius: 1.1, detail: 2, scale: [1.2, 0.7, 0.9], pos: [-5.2, -1.8, 0], rotSpeed: [-0.004, 0.003], matIndex: 1 },
      { radius: 0.8, detail: 2, scale: [1.1, 0.9, 0.7], pos: [5.5, -3.2, 1], rotSpeed: [0.005, -0.003], matIndex: 2 },
      { radius: 0.6, detail: 2, scale: [1.0, 1.2, 0.8], pos: [-4.5, 3.5, -2], rotSpeed: [-0.003, -0.004], matIndex: 3 },
      { radius: 0.5, detail: 2, scale: [1.2, 0.6, 1.0], pos: [-1.8, -4.5, 2], rotSpeed: [0.004, 0.006], matIndex: 4 },
      { radius: 0.4, detail: 2, scale: [0.9, 1.1, 0.9], pos: [2.2, 4.2, -1.5], rotSpeed: [-0.005, 0.002], matIndex: 0 },
    ];

    stoneConfigs.forEach((cfg) => {
      // Create organic pebble/zen stone shape using deformed icosahedron
      const geom = new THREE.IcosahedronGeometry(cfg.radius, cfg.detail);
      const posAttr = geom.attributes.position;
      
      // Deform vertices for natural pebble curvature
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const z = posAttr.getZ(i);
        const noise = Math.sin(x * 2.5) * Math.cos(y * 2.5) * Math.sin(z * 2.5) * 0.18;
        posAttr.setXYZ(i, x + noise, y + noise * 0.8, z + noise);
      }
      geom.computeVertexNormals();

      const mesh = new THREE.Mesh(geom, stoneMaterials[cfg.matIndex]);
      mesh.scale.set(cfg.scale[0], cfg.scale[1], cfg.scale[2]);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      
      mesh.userData = {
        basePos: [...cfg.pos],
        baseScale: [...cfg.scale],
        rotSpeed: cfg.rotSpeed,
        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: 0.8 + Math.random() * 0.5
      };

      stoneGroup.add(mesh);
      stones.push(mesh);
    });

    // --- 2. Kinetic Japandi Ribbon / Water Wave Grid ---
    const ribbonSegments = 80;
    const ribbonWidth = 24;
    const ribbonGeom = new THREE.PlaneGeometry(ribbonWidth, 8, ribbonSegments, 24);
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xE8E0D2,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      roughness: 0.5
    });

    const ribbonMesh = new THREE.Mesh(ribbonGeom, ribbonMat);
    ribbonMesh.position.set(0, -1.5, -4);
    ribbonMesh.rotation.x = -Math.PI / 2.8;
    scene.add(ribbonMesh);

    // --- 3. Ambient Zen Dust / Sakura Petals ---
    const particleCount = 140;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);
    const particlePhases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 26;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 14;
      particleScales[i] = Math.random() * 0.8 + 0.3;
      particlePhases[i] = Math.random() * Math.PI * 2;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute('scale', new THREE.BufferAttribute(particleScales, 1));

    // Custom circular soft particle texture
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(184, 118, 75, 0.9)');
    grad.addColorStop(0.4, 'rgba(211, 167, 98, 0.4)');
    grad.addColorStop(1, 'rgba(252, 252, 250, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 32, 0, Math.PI * 2);
    ctx.fill();

    const particleTex = new THREE.CanvasTexture(canvas);
    const particleMat = new THREE.PointsMaterial({
      size: 0.4,
      map: particleTex,
      transparent: true,
      opacity: 0.65,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // --- Interactive Mouse & Scroll Physics ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const scroll = { y: 0, targetY: 0 };

    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scroll.targetY = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Animation Render Loop ---
    const startTime = performance.now();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;


      // Smooth inertia interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      scroll.y += (scroll.targetY - scroll.y) * 0.08;

      // Update Cursor Dynamic Light
      cursorLight.position.x = mouse.x * 7;
      cursorLight.position.y = mouse.y * 5;
      cursorLight.position.z = 3 + Math.sin(elapsedTime * 2) * 0.5;

      // Rotate & Bob Floating Zen Stones
      stones.forEach((stone, idx) => {
        const u = stone.userData;
        stone.rotation.x += u.rotSpeed[0];
        stone.rotation.y += u.rotSpeed[1];

        // Smooth vertical sine bobbing
        const bob = Math.sin(elapsedTime * u.floatSpeed + u.floatPhase) * 0.35;
        stone.position.y = u.basePos[1] + bob;

        // Subtle mouse magnetic attraction
        const mouseDistX = mouse.x * 1.5;
        const mouseDistY = mouse.y * 1.2;
        stone.position.x = u.basePos[0] + mouseDistX * (0.4 + idx * 0.1);
        stone.position.z = u.basePos[2] - scroll.y * 4 + mouseDistY * 0.3;
      });

      // Animate Karesansui Water Ribbon Wave Vertices
      const posAttr = ribbonGeom.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const u = posAttr.getX(i);
        const v = posAttr.getY(i);
        const wave1 = Math.sin(u * 0.4 + elapsedTime * 1.2) * 0.45;
        const wave2 = Math.cos(v * 0.6 + elapsedTime * 0.9) * 0.35;
        const mouseInfluence = Math.sin(u * 0.2 + mouse.x * 2) * 0.25;
        posAttr.setZ(i, wave1 + wave2 + mouseInfluence);
      }
      ribbonGeom.computeVertexNormals();
      ribbonGeom.attributes.position.needsUpdate = true;
      ribbonMesh.rotation.z = Math.sin(elapsedTime * 0.15) * 0.04;

      // Animate Ambient Zen Dust / Sakura Particles
      const pPositions = particleGeom.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        // Slow downward & lateral drift
        pPositions[i * 3 + 1] -= 0.015;
        pPositions[i * 3] += Math.sin(elapsedTime * 0.5 + particlePhases[i]) * 0.008;

        // Recycle particles when falling out of view
        if (pPositions[i * 3 + 1] < -10) {
          pPositions[i * 3 + 1] = 10;
          pPositions[i * 3] = (Math.random() - 0.5) * 24;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;

      // Dynamic Camera Perspective Glide based on Scroll & Mouse
      camera.position.x = mouse.x * 0.8;
      camera.position.y = -scroll.y * 3.5 + mouse.y * 0.6;
      camera.position.z = 14 - scroll.y * 2;
      camera.lookAt(0, -scroll.y * 2, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
}
