import { APIError } from "../../utils/axios/store"

const ErrorComponent = ({error} : {error : APIError}) => {
    const errors = error.errors;
    
    return <div className="flex flex-col">
        {
            errors.map(
                (error, key) => {
                    return <div key={key}>
                        <p className="p-2 text-red-500">
                            - {
                                error.attr ?  `${error.attr} : ` : ""
                            } {error.detail}
                        </p>
                    </div>
                }
            )
        }
    </div>
}

export default ErrorComponent