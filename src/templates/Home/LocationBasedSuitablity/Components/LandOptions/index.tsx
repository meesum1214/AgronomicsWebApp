import { MouseEventHandler, ReactChild } from "react"
import Dot from '../../../../../components/Dot'
export default ({ children, onClick, color }: { children: ReactChild, onClick: MouseEventHandler, color: string }) => {
    return (
        <div
            onClick={onClick}
            className={`w-[92px] bg-white cursor-pointer p-2 relative rounded-lg shadow-2sm text-dark text-xs font-bold flex justify-center items-center hover:scale-105 transition-all`}
        >
            <Dot className={`${color} absolute right-2 top-2`} />
            {children}
        </div>
    )
}