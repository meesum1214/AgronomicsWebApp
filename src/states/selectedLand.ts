import { useEffect, useState } from 'react';
import { legacy_createStore } from 'redux'
import { LANDRECORD } from '../Interface/landrecord';

const initialState = {
  selectedLand: null as unknown as LANDRECORD,
  selectedLandLoading: false,
  selectedLandError: null,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SELECT_LAND':
      return {
        ...state,
        selectedLand: action.payload,
        selectedLandLoading: false,
        selectedLandError: null,
      };
    case 'SELECT_LAND_LOADING':
      return {
        ...state,
        selectedLandLoading: true,
        selectedLandError: null,
      };
    case 'SELECT_LAND_ERROR':
      return {
        ...state,
        selectedLandLoading: false,
        selectedLandError: action.payload,
      };
    default:
      return state;
  }
}

const store = legacy_createStore(reducer);

export const setSelectedLand = (land: any) => {
  store.dispatch({
    type: 'SELECT_LAND',
    payload: land,
  });
}

export const unselectLand = () => {
  store.dispatch({
    type: 'SELECT_LAND',
    payload: null,
  });
}

export const useSelectedLand = () => {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => {
      unsubscribe();
    }
  }, []);
  return state
}



