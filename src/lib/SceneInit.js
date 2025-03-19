import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import Stats from 'three/addons/libs/stats.module.js'

export default class SceneInit {
    constructor(canvsId) {
        this.fov = 45;
        this.canvsId = canvsId;

        this.scene = undefined;
        this.stats = undefined;
        this.camera = undefined;
        this.controls = undefined;
        this.renderer = undefined;

        // this.animate = this.animate.bind(this);
    }

    initialize() {
        this.camera = new THREE.PerspectiveCamera(
            this.fov,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        this.camera.position.z = 96;

        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();

        const canvs = document.getElementById(this.canvsId);
        this.renderer = new THREE.WebGLRenderer({ 
            canvas: canvs, 
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.stats = new Stats();
        document.body.appendChild(this.stats.dom);

        let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        ambientLight.castShadow = true
        this.scene.add(ambientLight);

        let spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.castShadow = true;
        spotLight.position.set(0, 64, 32);
        this.scene.add(spotLight);

        window.addEventListener('resize', () => this.onWindowResize(), false);
    }

    animate = () => {
        window.requestAnimationFrame(this.animate);
        this.render();
        this.stats.update();
        this.controls.update();
    };

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
}