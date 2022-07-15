import { Color3, Mesh } from '@babylonjs/core'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { GridMaterial } from 'babylonjs-materials'
import { useRef } from 'react'
import { Engine, Scene } from 'react-babylonjs'

import './App.css'

export const GridBoxScene = () => {
  const boxRef = useRef<Mesh>(null)

  const groundRefFunc = (instance: any) => {
    if (!instance) return
    const gridMaterial = new GridMaterial('ground_material', instance._scene)
    gridMaterial.mainColor = Color3.White
    gridMaterial.lineColor = Color3.Black
    gridMaterial.opacity = 0.8

    instance.material = gridMaterial
  }

  return (
    <div className='wrapper'>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          <arcRotateCamera
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

          <box name='box' ref={boxRef} size={2} position={new Vector3(0, 0, 0)}>
            <standardMaterial
              name='box-material'
              diffuseColor={Color3.Teal()}
              specularColor={Color3.White()}
            />
          </box>

          <box name='box2' size={2} position={new Vector3(10, 0, 0)}></box>

          <ground name='plane' height={50} width={50} subdivisions={2}></ground>
        </Scene>
      </Engine>
    </div>
  )
}
