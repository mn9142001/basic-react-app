import { APIError } from "../../utils/axios/store"
import { ErrorDisplay, NotFound } from "./partials";

const ErrorComponent = ({error} : {error : APIError | undefined}) => {

    if (error === undefined){
        return <p className="p-2 text-red-500">
            Something went wrong with us.
        </p>
    }
    

    if (error.status === 404){
        return <NotFound error={error.errors[0]} />
    }

    const errors = error.errors;
    
    return <div className="flex flex-col">
        {
            errors.map(
                (error, key) => {
                    return <ErrorDisplay error={error} key={key} />
                }
            )
        }
    </div>
}

export default ErrorComponent