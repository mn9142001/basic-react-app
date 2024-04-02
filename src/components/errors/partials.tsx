import { Error } from "../../utils/axios/store"

export const ErrorDisplay = ({error} : {error : Error}) => {
    return <div>
        <p className="p-2 text-red-500">
            - {
                error.attr ? `${error.attr} : ` : ""
            } {error.detail}
        </p>
    </div>
}

export const NotFound = ({error} : {error : Error}) => {
    
    return <div className="absolute top-auto left-auto w-full h-full flex items-center justify-center">
        <p className="text-2xl font-bold">
            We could not find what you are looking for.
        </p>
    </div>
}