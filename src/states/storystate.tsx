import { useEffect, useState } from "react"
import { legacy_createStore } from "redux"



const initialState = {
  title: '',
  image: '',
  description: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STORY':
      return {
        ...state,
        title: action.payload.title,
        image: action.payload.image,
        description: action.payload.description,
      }
    default:
      return state
  }
}

const store = legacy_createStore(reducer)

export const setStory = (payload) => {
  store.dispatch({
    type: 'SET_STORY',
    payload,
  })
}

export const useStory = () => {
  const [story, setStory] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setStory(store.getState())
    }
    )
    return () => {
      unsubscribe()
    }
  }, [])

  return story
}