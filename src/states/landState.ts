import { useEffect, useState } from 'react'
import { legacy_createStore } from 'redux'
import { getLandRecord } from '../WebServices/UserRecord'
import { useUserState } from './userState'
import { LANDRECORD } from '../Interface/landrecord'
import { parse } from 'path'
import { json } from 'stream/consumers'

const initialState = {
    lands: [],
    fetched: false
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LANDS':
            return {
                ...state,
                lands: action.lands,
                fetched: true
            }
        case 'ADD_LAND':
            return {
                ...state,
                lands: [action.land, ...state.lands],
                fetched: true
            }
        default:
            return state
    }
}

const store = legacy_createStore(reducer)

const addLands = (lands) => {
    store.dispatch({
        type: 'ADD_LANDS',
        lands
    })
}

export const addLand = (land) => {
    store.dispatch({
        type: 'ADD_LAND',
        land
    })
}


export const useLandStore = () => {
    const [state, setState] = useState(store.getState())
    const user = useUserState()

    useEffect(() => {
        if (user?.data?.id) {
            if (store.getState().fetched == false) {
                getLandRecord(user?.data?.id, 1)
                    .then(res => {
                        addLands(res?.data)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        }
        const unsubscribe = store.subscribe(() => {
            setState(store.getState())
        })

        return unsubscribe
    }, [user])


    return state as {fetched: boolean, lands: LANDRECORD[]}
}
