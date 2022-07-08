import { Color3, Mesh, Vector3 } from '@babylonjs/core'
import { useRef } from 'react'
import { Engine, Scene, useScene } from 'react-babylonjs'

import './App.css'

export const BoxScene = () => {
  const boxRef = useRef<Mesh>(null)

  return (
    <div className='wrapper'>
      <Engine antialias adaptToDeviceRatio canvasId='babylonJS'>
        <Scene>
          {/* カメラ... これがないと画面に何も表示されない */}
          <freeCamera
            name='camera'
            position={new Vector3(0, 5, -10)}
            setTarget={[Vector3.Zero()]}
          />

          {/* ライト... これがないと真っ暗で色が分からない */}
          <hemisphericLight
            name='light'
            direction={Vector3.Up()}
            intensity={1.2}
          />

          {/* 箱... 箱本体, (0,0,0)の位置に2m四方の立方体を生成 */}
          <box name='box' ref={boxRef} size={2} position={new Vector3(0, 0, 0)}>
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
