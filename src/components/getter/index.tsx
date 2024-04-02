import { FC } from "react"
import { AXIOS } from "../../utils/axios"
import { useQuery } from "@tanstack/react-query"
import { CircularProgress } from "@mui/material"
import ErrorComponent from "../errors"
import { useErrorStore } from "../../utils/axios/store"

type GetterComponentProps = {
    data : any
}

export const Getter = (
    {
        url,
        Component
    } : {
        url : string,
        Component : FC<GetterComponentProps>
    }
) => {
    "Used to get objects using get request and return them back"

    const { error } = useErrorStore()
    const isError = Boolean(error?.type)

    const get = () => {
        return AXIOS.get(url)
    }

    const {data, isSuccess} = useQuery({ queryKey: [url], queryFn: get })    

    if (isSuccess){
        return <Component data={data} />
    }

    if (isError){
        return <ErrorComponent error={error} />
    }

    return <div className="flex items-center justify-center absolute w-full h-full">
        <CircularProgress size={"100px"} />
    </div>
    
}
