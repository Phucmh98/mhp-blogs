import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef, useState } from "react";

export interface ThreeSceneProps {
  indexAction?: number;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ indexAction = 0 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionsRef = useRef<THREE.AnimationAction[]>([]);
  const [currentActionIndex, setCurrentActionIndex] = useState<number>(-1);
  const animationIdRef = useRef<number | null>(null); // Để hủy animation

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    let width = 0;
    let height = 0;
    if (mountRef.current) {
      mountRef.current.innerHTML = "";
      mountRef.current.appendChild(renderer.domElement);
      width = mountRef.current.clientWidth;
      height = mountRef.current.clientHeight;
    }

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 4);
    renderer.setSize(width, height);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    const clock = new THREE.Clock();

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    scene.add(new THREE.DirectionalLight(0xffffff, 1.5));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 1));

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      "/json/icon/medic_base_var3_-_hots.glb",
      (gltf) => {
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub(center);
        scene.add(gltf.scene);

        const mixer = new THREE.AnimationMixer(gltf.scene);
        mixerRef.current = mixer;

        const actions = gltf.animations.map((clip) => mixer.clipAction(clip));
        actionsRef.current = actions;

        if (actions[indexAction]) {
          actions[indexAction].reset().fadeIn(0.3).play();
          setCurrentActionIndex(indexAction);
        }
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixerRef.current?.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ❌ Cleanup to avoid multiple loops
    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      renderer.dispose();
      mixerRef.current?.stopAllAction();
      mixerRef.current = null;
      actionsRef.current = [];
    };
  }, []); // only run once

  // 🎬 Switch animation when index changes
  useEffect(() => {
    if (
      typeof indexAction === "number" &&
      mixerRef.current &&
      actionsRef.current.length > 0 &&
      indexAction >= 0 &&
      indexAction < actionsRef.current.length &&
      indexAction !== currentActionIndex
    ) {
      actionsRef.current.forEach((action, idx) => {
        if (idx === indexAction) {
          action.reset().fadeIn(0.3).play();
        } else {
          action.fadeOut(0.3);
        }
      });
      setCurrentActionIndex(indexAction);
    }
  }, [indexAction, currentActionIndex]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
