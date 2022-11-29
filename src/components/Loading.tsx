import React, { useLayoutEffect, useState } from 'react'
import Lottie from 'react-lottie';
import { legacy_createStore } from 'redux';
import * as animationData from './lottie/animated-logo.json'

const loadingStore = legacy_createStore((state = { loading: false }, action) => {
  switch (action.type) {
    case 'LOADING':
      return { loading: true }
    case 'LOADED':
      return { loading: false }
    default:
      return state
  }
})

export function LoadingAG(boolean: any) {
  loadingStore.dispatch({ type: boolean ? 'LOADING' : 'LOADED' })
}



export default () => {


  const [LoadingState , setLoadingState] = useState(loadingStore.getState()?.loading)

  useLayoutEffect(() => {
    loadingStore.subscribe(() => {
      setLoadingState(loadingStore.getState()?.loading)
    })
  
    return () => {
      
    };
  }, [])
  

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };



  return (
    <div className={`z-50 fixed w-screen h-screen flex justify-center items-center bg-bgblacktp ${LoadingState ? 'block' : 'hidden'}`}>
      <Lottie options={defaultOptions}
        height={150}
        width={150}
      />
    </div>
  )
}