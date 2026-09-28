import { useEffect, useRef } from 'react';

const LABELS = ['Lead · 侍', 'Web', 'Mobile', 'API', 'Data', 'DevOps'];

// Construit les 6 icônes 3D (katana, navigateur, mobile, </>, base de données, engrenage)
function buildIcons(THREE, RB) {
  const M = (o) => new THREE.MeshPhysicalMaterial({ roughness: 0.3, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.15, ...o });
  const verm = M({ color: 0xe4572e });
  const cream = M({ color: 0xeee4d3, roughness: 0.45 });
  const ink = M({ color: 0x1d1b19, metalness: 0.6, roughness: 0.35 });
  const gold = M({ color: 0xc9a15a, metalness: 1, roughness: 0.25 });
  const steel = M({ color: 0xe6e9ec, metalness: 1, roughness: 0.1 });
  const mesh = (g, m, x = 0, y = 0, z = 0) => { const o = new THREE.Mesh(g, m); o.position.set(x, y, z); return o; };
  const icons = [];

  // Lead : katana
  const katana = new THREE.Group();
  katana.add(mesh(new RB(0.2, 3.8, 0.05, 2, 0.02), steel, 0, 0.7, 0));
  katana.add(mesh(new RB(0.06, 3.7, 0.055, 2, 0.02), gold, 0.08, 0.7, 0));
  const tsuba = mesh(new THREE.TorusGeometry(0.3, 0.09, 20, 48), gold, 0, -1.25, 0); tsuba.rotation.x = Math.PI / 2; katana.add(tsuba);
  katana.add(mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.06, 48), ink, 0, -1.25, 0));
  katana.add(mesh(new THREE.CylinderGeometry(0.11, 0.12, 1.3, 24), ink, 0, -2.0, 0));
  for (let i = 0; i < 5; i++) {
    const w = mesh(new THREE.TorusGeometry(0.12, 0.03, 8, 24), verm, 0, -1.55 - i * 0.22, 0); w.rotation.x = Math.PI / 2; katana.add(w);
  }
  katana.add(mesh(new THREE.SphereGeometry(0.14, 24, 16), gold, 0, -2.7, 0));
  katana.rotation.z = -0.55;
  icons.push({ g: katana, p: [0, 0.3, 0], s: 1, spin: 0.002, lab: 1.4 });

  // Web : fenêtre de navigateur
  const web = new THREE.Group();
  web.add(mesh(new RB(2.2, 1.5, 0.2, 4, 0.08), cream));
  web.add(mesh(new RB(2.2, 0.32, 0.22, 4, 0.08), ink, 0, 0.59, 0.005));
  [-0.85, -0.68, -0.51].forEach((x) => web.add(mesh(new THREE.SphereGeometry(0.055, 16, 12), verm, x, 0.59, 0.12)));
  web.add(mesh(new RB(1.3, 0.14, 0.04, 2, 0.05), verm, -0.3, 0.12, 0.11));
  web.add(mesh(new RB(0.9, 0.1, 0.04, 2, 0.04), ink, -0.5, -0.14, 0.11));
  web.add(mesh(new RB(1.1, 0.1, 0.04, 2, 0.04), ink, -0.4, -0.36, 0.11));
  icons.push({ g: web, p: [-2.1, 1.9, -1], s: 0.8, spin: -0.003, lab: 0.9 });

  // Mobile
  const mob = new THREE.Group();
  mob.add(mesh(new RB(0.9, 1.75, 0.14, 4, 0.12), ink));
  mob.add(mesh(new RB(0.76, 1.5, 0.02, 2, 0.06), verm, 0, 0, 0.075));
  mob.add(mesh(new RB(0.24, 0.05, 0.02, 2, 0.02), ink, 0, 0.66, 0.09));
  icons.push({ g: mob, p: [2.2, 1.5, 0.4], s: 0.9, spin: 0.004, lab: 1.0 });

  // API : </>
  const api = new THREE.Group();
  const bar = () => new RB(0.62, 0.16, 0.16, 2, 0.06);
  [[-0.62, 0.2, 0.62], [-0.62, -0.2, -0.62], [0.62, 0.2, -0.62], [0.62, -0.2, 0.62]].forEach(([x, y, rz]) => {
    const b = mesh(bar(), verm, x, y, 0); b.rotation.z = rz; api.add(b);
  });
  const slash = mesh(new RB(0.16, 1.2, 0.16, 2, 0.06), cream); slash.rotation.z = -0.35; api.add(slash);
  icons.push({ g: api, p: [2.0, -1.5, 0.2], s: 0.95, spin: -0.004, lab: 0.8 });

  // Data : base de données
  const db = new THREE.Group();
  const cyl = new THREE.CylinderGeometry(0.7, 0.7, 0.32, 48);
  [-0.4, 0, 0.4].forEach((y, i) => db.add(mesh(cyl, i === 2 ? verm : cream, 0, y, 0)));
  icons.push({ g: db, p: [-2.0, -1.4, 0.3], s: 0.85, spin: 0.005, lab: 0.9 });

  // DevOps : engrenage
  const gear = new THREE.Group();
  gear.add(mesh(new THREE.TorusGeometry(0.55, 0.2, 20, 48), ink));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const tooth = mesh(new RB(0.26, 0.3, 0.34, 2, 0.05), ink, Math.cos(a) * 0.82, Math.sin(a) * 0.82, 0); tooth.rotation.z = a; gear.add(tooth);
  }
  const hub = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.3, 32), gold); hub.rotation.x = Math.PI / 2; gear.add(hub);
  icons.push({ g: gear, p: [0.2, -2.9, -1.2], s: 0.75, spin: 0.006, lab: 1.0, rz: true });

  return icons;
}

function HeroScene({ heroRef }) {
  const canvasRef = useRef(null);
  const labelsRef = useRef(null);

  useEffect(() => {
    let dead = false;
    let raf = 0;
    let cleanup = () => {};
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove, { passive: true });

    (async () => {
      const [THREE, { RoomEnvironment }, { RoundedBoxGeometry: RB }] = await Promise.all([
        import('three'),
        import('three/examples/jsm/environments/RoomEnvironment.js'),
        import('three/examples/jsm/geometries/RoundedBoxGeometry.js'),
      ]);
      const canvas = canvasRef.current;
      if (dead || !canvas) return;

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      const scene = new THREE.Scene();
      const pm = new THREE.PMREMGenerator(renderer);
      const envRT = pm.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const cam = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
      cam.position.set(0, 0, 16);
      const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(5, 6, 8); scene.add(key);
      const rim = new THREE.PointLight(0xff5a2a, 60, 30); rim.position.set(-3, -2, 5); scene.add(rim);

      const icons = buildIcons(THREE, RB);
      const cluster = new THREE.Group();
      scene.add(cluster);
      icons.forEach((ic, i) => {
        ic.g.position.set(...ic.p);
        ic.g.scale.setScalar(ic.s);
        ic.phase = i * 1.3;
        cluster.add(ic.g);
      });
      const bb = new THREE.Box3().setFromObject(cluster);
      const halfW = Math.max(-bb.min.x, bb.max.x) + 0.5;
      const halfH = Math.max(-bb.min.y, bb.max.y) + 0.6;

      const v = new THREE.Vector3();
      let w0 = 0, h0 = 0;
      const t0 = performance.now();

      const loop = () => {
        if (dead) return;
        raf = requestAnimationFrame(loop);
        const hero = heroRef.current;
        if (!hero) return;
        const hr = hero.getBoundingClientRect();
        if (hr.bottom < 0) return; // hero hors écran : pause
        const w = canvas.clientWidth, h = canvas.clientHeight;
        if (!w || !h) return;
        if (w !== w0 || h !== h0) {
          w0 = w; h0 = h;
          renderer.setSize(w, h, false);
          cam.aspect = w / h;
          cam.updateProjectionMatrix();
        }
        const wide = w / h > 1.05;
        const t = (performance.now() - t0) / 1000;
        // Adapte l'échelle pour tenir dans la moitié droite du frustum visible
        const visH = 2 * Math.tan((cam.fov * Math.PI) / 360) * 16;
        const visW = visH * (w / h);
        const sc = wide
          ? Math.min(1, (visW / 2 - 0.4) / (2 * halfW), (visH - 0.6) / (2 * halfH))
          : Math.min(0.62, (visW - 0.4) / (2 * halfW));
        const baseX = wide ? visW / 2 - halfW * sc - 0.3 : 0;
        const baseY = wide ? 0.2 : 1.2;
        cluster.scale.setScalar(sc);
        cluster.position.x = baseX;
        cluster.position.y = baseY + -hr.top * 0.006;

        const mx = mouse.x / window.innerWidth - 0.5;
        const my = mouse.y / window.innerHeight - 0.5;
        cluster.rotation.y += (mx * 0.24 - cluster.rotation.y) * 0.05;
        cluster.rotation.x += (my * 0.3 - cluster.rotation.x) * 0.05;
        icons.forEach((ic) => {
          ic.g.position.y = ic.p[1] + Math.sin(t * 0.9 + ic.phase) * 0.14;
          if (ic.rz) ic.g.rotation.z += ic.spin; else ic.g.rotation.y += ic.spin;
          ic.g.rotation.x = Math.sin(t * 0.6 + ic.phase) * 0.12;
        });
        renderer.render(scene, cam);

        // Étiquettes HTML projetées sous chaque objet
        scene.updateMatrixWorld(true);
        const ls = labelsRef.current ? labelsRef.current.children : [];
        icons.forEach((ic, i) => {
          const el = ls[i];
          if (!el) return;
          ic.g.getWorldPosition(v);
          v.y -= ic.lab * sc;
          v.project(cam);
          const px = (v.x * 0.5 + 0.5) * w, py = (-v.y * 0.5 + 0.5) * h;
          if (!Number.isFinite(px) || !Number.isFinite(py)) { el.style.opacity = '0'; return; }
          el.style.transform = `translate(-50%,0) translate(${px.toFixed(1)}px,${py.toFixed(1)}px)`;
          el.style.opacity = wide ? '1' : '0';
        });
      };
      loop();

      cleanup = () => {
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.material) o.material.dispose();
        });
        envRT.dispose();
        pm.dispose();
        renderer.dispose();
      };
    })().catch((e) => console.warn('3D scene unavailable', e));

    return () => {
      dead = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      cleanup();
    };
  }, [heroRef]);

  return (
    <>
      <canvas ref={canvasRef} className='absolute inset-0 w-full h-full block' />
      <div ref={labelsRef} aria-hidden='true' className='absolute inset-0 pointer-events-none'>
        {LABELS.map((label) => (
          <span
            key={label}
            className='mono-label absolute left-0 top-0 opacity-0 flex items-center gap-[6px] px-[9px] py-1 rounded-full bg-[color:oklch(0.13_0.006_40/0.65)] border border-line !text-[10px] text-paper whitespace-nowrap transition-opacity duration-[600ms] ease-[ease]'
          >
            <span className='w-[5px] h-[5px] rounded-full bg-vermilion' />
            {label}
          </span>
        ))}
      </div>
    </>
  );
}

export default HeroScene;
