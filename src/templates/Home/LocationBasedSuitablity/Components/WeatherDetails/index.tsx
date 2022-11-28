import { ScrollArea } from "@mantine/core"
import { useDidUpdate } from "@mantine/hooks"
import { useState } from "react"
import { useSelectedLand } from "../../../../../states/selectedLand"
import { getFarmWeather } from "../../../../../WebServices/Weather"

export default () => {
    const [data, setData] = useState({})
    const land = useSelectedLand()?.selectedLand
    useDidUpdate(() => {
        getFarmWeather(land?.id)

    }, [land])
    return (
        <div className="w-full">
            <h1>Hello World</h1>
            <ScrollArea>
                {JSON.stringify(data, null, 2)}
            </ScrollArea>
        </div>
    )
}