import { Color3, Mesh, Vector3 } from '@babylonjs/core'
import { useControls } from 'leva'
import { useRef } from 'react'
import {
  ArcRotateCamera,
  Camera,
  Engine,
  Scene,
  useScene,
} from 'react-babylonjs'

import './App.css'

export const BoxScene = () => {
  const boxRef = useRef<Mesh>(null)

  const scene = useScene()

  const { x, y, z, camera } = useControls({
    x: { value: 0, min: -5, max: 5 },
    y: { value: 0, min: -5, max: 5 },
    z: { value: 0, min: -5, max: 5 },
    camera: { value: true },
  })

  return (
    <div className='wrapper'>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          {/* <freeCamera
            name='camera'
            position={new Vector3(0, 5, -10)}
            setTarget={[Vector3.Zero()]}
          /> */}
          <arcRotateCamera
            setEnabled={() => camera}
            alpha={1}
            beta={1}
            radius={4}
            target={Vector3.Zero()}
            name='camera'
            position={new Vector3(0, 5, -10)}
          />

          <hemisphericLight
            name='light'
            direction={Vector3.Up()}
            intensity={1.2}
          />

          <box name='box' ref={boxRef} size={2} position={new Vector3(x, y, z)}>
            <standardMaterial
              name='box-material'
              diffuseColor={Color3.Red()}
              specularColor={Color3.Black()}
            />
          </box>
        </Scene>
      </Engine>
    </div>
  )
}
