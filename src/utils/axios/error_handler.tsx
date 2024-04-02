import { AxiosError } from "axios";
import { APIError, useErrorStore } from "./store";

const netWorkError : APIError = {
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
    type : "serverError",
    errors : [
        {
            attr : null,
            code : "network_error",
            detail : "Something went wrong with us, please try again later."
        }
    ]
}

export const translateCode = (code : string) => {
    return null
}

export const handleAPIError = (error : APIError) => {
    const response : APIError = {
        type : error.type,
        errors : []
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
        else if (response.response?.status === 400) {
            setError(
                handleAPIError(
                    response.response?.data as APIError
                )
            )
        }

    }

    return Promise.reject(response);

}
