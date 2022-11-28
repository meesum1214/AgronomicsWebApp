import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react'
import { useUserState } from '../states/userState';
import {useLandStore} from '../states/landState';
const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });
export default () => {

    const user = useUserState();
    const lands = useLandStore()

    const test = {user,lands}

    
    

    return (
        <div className="min-h-screen select-text">
           
            <DynamicReactJson src={test} />
        </div>
    )
}
