import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";

export interface ThreeSceneProps {
  indexActions: number[]; // danh sách index action muốn play theo thứ tự
  durations?: number[]; // thời gian (ms) mỗi action
  autoStop?: boolean; // hết vòng thì dừng hay lặp tiếp
}

const ThreeScene = ({
  indexActions,
  durations = [],
  autoStop = false,
}: ThreeSceneProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mixerRef = useRef<THREE.AnimationMixer | null>(null);
  const actionsRef = useRef<THREE.AnimationAction[]>([]);
  const animationIdRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ref giữ vị trí chuột 3D trong scene (world coords)
  const mousePosRef = useRef(new THREE.Vector3(0, 0, 0));
  // ref giữ model để quay
  const modelRef = useRef<THREE.Object3D | null>(null);

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

    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    // camera.position.set(0, 0, 5);
    camera.position.set(1.1, 0.85, 1.45);
    camera.quaternion.set(-0.25, 0.36, 0.07, 0.1);

    renderer.setSize(width, height);

    // Controls (optional, bạn dùng cũng được hoặc tắt đi nếu muốn)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    scene.add(new THREE.DirectionalLight(0xffffff, 1.5));
    scene.add(new THREE.HemisphereLight(0xffffff, 0x888888, 1));

    const clock = new THREE.Clock();

    // Load model
    const loader = new GLTFLoader();
    loader.load(
      "/glb/kawaiimeka.glb",
      (gltf) => {
        // Center model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = new THREE.Vector3();
        box.getCenter(center);
        gltf.scene.position.sub(center);

        scene.add(gltf.scene);
        modelRef.current = gltf.scene;

        // Animation setup
        const mixer = new THREE.AnimationMixer(gltf.scene);
        mixerRef.current = mixer;

        const actions = gltf.animations.map((clip) => mixer.clipAction(clip));
        actionsRef.current = actions;

        startSequence();
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );

    const plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), -10); // mặt phẳng XZ tại y=0
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const pointOfIntersection = new THREE.Vector3();

    // Hàm chạy chuỗi animation
    const startSequence = () => {
      if (!mixerRef.current || actionsRef.current.length === 0) return;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      const playNext = (idx: number) => {
        const actionIndex = indexActions[idx];
        const duration = durations[idx];

        actionsRef.current.forEach((action, i) => {
          if (i === actionIndex) {
            action.reset().fadeIn(0.3).play();
          } else {
            action.fadeOut(0.3);
          }
        });

        mixerRef.current!.timeScale = 1;

        timeoutRef.current = setTimeout(() => {
          if (autoStop) {
            mixerRef.current!.timeScale = 0;
          } else {
            const nextIdx = (idx + 1) % indexActions.length;
            playNext(nextIdx);
          }
        }, duration);
      };

      playNext(0);
    };

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      mixerRef.current?.update(delta);
      controls.update();

      // Cập nhật góc quay model theo chuột mỗi frame

      renderer.render(scene, camera);
    };
    animate();

    // Nhấn P để log camera info
    // window.addEventListener("keydown", (event) => {
    //   if (event.key === "p") {
    //     console.log("Camera FOV:", camera.fov);
    //     console.log("Camera Position:", camera.position);
    //     console.log("Camera Rotation:", camera.rotation);
    //     console.log("Camera Quaternion:", camera.quaternion);
    //   }
    // });

    return () => {
      if (animationIdRef.current !== null) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (mixerRef.current) {
        mixerRef.current.stopAllAction();
      }
      renderer.dispose();
      mixerRef.current = null;
      actionsRef.current = [];
      modelRef.current = null;
    };
  }, [indexActions, durations, autoStop]);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default ThreeScene;
