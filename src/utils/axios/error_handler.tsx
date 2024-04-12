import { AxiosError } from "axios";
import { APIError, useErrorStore } from "./store";

const netWorkError : APIError = {
    status : 500,
    type : "serverError",
    errors : [
        {
            attr : null,
            code : "network_error",
            detail : "Could not send the request."
        }
    ]
}

const serverError : APIError = {
    status : 500,
    type : "serverError",
    errors : [
        {
            attr : null,
            code : "network_error",
            detail : "Something went wrong with us, please try again later."
        }
    ]
}

const notFound : APIError = {
    status : 404,
    type : "notFound",
    errors : [
        {
            attr : null,
            code : "not_found",
            detail : "We could not find what you are looking for."
        }
    ]
}

export const translateCode = (code : string) => {
    return null
}

export const handleAPIError = (error : APIError) => {
    const response : APIError = {
        type : error.type,
        errors : [],
        status : 400,
    }

    response.errors = error.errors.map(err => {

        return {
            ...err,
            detail : translateCode(err.code) || err.detail
        }
    })

    return response
}

export const handleError = (response : AxiosError ) => {
    const setError = useErrorStore.getState().setError
    
    if (response.code === "ERR_NETWORK"){
        setError(netWorkError)
    }

    else{

        if (response.response?.status === 500){
            setError(serverError)
        }

        else if ([400, 403].includes(response.response?.status as number)) {
            const responseData = response.response?.data as APIError

            if (responseData?.type && responseData.type === "client_error"){
                setError(responseData)
            } else {
                setError(
                    handleAPIError(
                        response.response?.data as APIError
                    )
                )
    
            }
            
        }

        else if (response.response?.status === 404) {
            setError(notFound)
        }

    }

    return Promise.reject(response);

}
