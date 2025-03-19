import { useEffect } from 'react'

import * as THREE from 'three'
import SceneInit from './lib/SceneInit';

import Header from './components/Header';
import Content from './components/Content';

function App() {
  // useEffect(() => {
  //   const test = new SceneInit('myThreeJsCanvas')
  //   test.initialize()
  //   test.animate()

  //   const boxGeometry = new THREE.BoxGeometry(16, 16, 16)
  //   const boxMaterial = new THREE.MeshNormalMaterial()
  //   const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
  //   test.scene.add(boxMesh)
  // }, [])


  return (
    <>
      {/* <canvas id='myThreeJsCanvas'/> */}
      <Header />
      <Content />
    </>
  )
}

export default App
