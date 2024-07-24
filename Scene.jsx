/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public\models\scene.glb 
*/

import React, { useLayoutEffect, useReducer, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT=2.3;
export const NB_FLOORS=3;

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.glb')
  const ref=useRef();
  const tl=useRef();

  const scroll=useScroll();

  useFrame(()=>{
    tl.current.seek(scroll.offset*tl.current.duration());
  });

  useLayoutEffect(()=>{
    tl.current=gsap.timeline();

    //vertical animation
    tl.current.to(
      ref.current.position,
      {
        duration:2,
        y: -FLOOR_HEIGHT*(NB_FLOORS-1),
      },
    )
  },[]);
  return (
    <group {...props} dispose={null} ref={ref}>
      <group position={[-0.064, -0.919, -0.017]} scale={12.327}>
        <mesh geometry={nodes.Object_8.geometry} material={materials['Scene_-_Root_1_1']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Scene_-_Root_1_1']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Scene_-_Root_1_1']} />
        <mesh geometry={nodes.Object_13.geometry} material={materials['Scene_-_Root_1_1']} />
        <mesh geometry={nodes.Object_16.geometry} material={materials['Scene_-_Root_1_1']} />
        <mesh geometry={nodes.Object_19.geometry} material={materials['Scene_-_Root_1_1']} />
        <mesh geometry={nodes.Object_22.geometry} material={materials['Scene_-_Root_1_1.001']} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_32.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_47.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_50.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_53.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_56.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_59.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_62.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_65.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_68.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_71.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_74.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_77.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_80.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_83.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_86.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_89.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_92.geometry} material={materials.Topstitch_1_1860109} />
        <mesh geometry={nodes.Object_95.geometry} material={materials.Topstitch_1_1860109} />
        <mesh geometry={nodes.Object_98.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_101.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_104.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_107.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_110.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_113.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_116.geometry} material={materials.Topstitch_1_1860109} />
        <mesh geometry={nodes.Object_119.geometry} material={materials.Topstitch_1_1860109} />
        <mesh geometry={nodes.Object_122.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_125.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_128.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_131.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_134.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_137.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_140.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_143.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_146.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_149.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_152.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_155.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_158.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_161.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_164.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_167.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_170.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_173.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_176.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_179.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_182.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_185.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_188.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_191.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_194.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_197.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_200.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_203.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_206.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_209.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_212.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_215.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_218.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_221.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_224.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_227.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_230.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_233.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_236.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_239.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_242.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_245.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_248.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_251.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_254.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_257.geometry} material={materials.Default_Topstitch_2348} />
        <mesh geometry={nodes.Object_259.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_261.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_263.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_265.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_267.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_269.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_271.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_273.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_275.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_277.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_279.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_281.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_283.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_285.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_287.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_289.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_291.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_293.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_295.geometry} material={materials['Cotton_Twill_1680397.001']} />
        <mesh geometry={nodes.Object_297.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_299.geometry} material={materials.Leather_2226} />
        <mesh geometry={nodes.Object_301.geometry} material={materials.Leather_Copy_1_1748881} />
        <mesh geometry={nodes.Object_303.geometry} material={materials.Cotton_Twill_1680397} />
        <mesh geometry={nodes.Object_305.geometry} material={materials.Cotton_Twill_1463669} />
        <mesh geometry={nodes.Object_307.geometry} material={materials.Leather_2226} />
        <mesh geometry={nodes.Object_309.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_311.geometry} material={materials['Cotton_Twill_1680397.002']} />
        <mesh geometry={nodes.Object_313.geometry} material={materials['Cotton_Twill_1680397.003']} />
        <mesh geometry={nodes.Object_315.geometry} material={materials.Cotton_Twill_1463669} />
        <mesh geometry={nodes.Object_317.geometry} material={materials.Cotton_Twill_1463669} />
        <mesh geometry={nodes.Object_319.geometry} material={materials['Leather_2226.001']} />
        <mesh geometry={nodes.Object_321.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_323.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_325.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_327.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_329.geometry} material={materials['Leather_Copy_1_1748881.001']} />
        <mesh geometry={nodes.Object_331.geometry} material={materials['Leather_Copy_1_1748881.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/scene.glb')