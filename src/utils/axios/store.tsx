import { create } from 'zustand'

export interface Error {
    code : string
    detail : string
    attr : string | null
}

export interface APIError {
    errors : Error[],
    type : string
}

interface ErrorStore {
    error? : APIError
    setError : (error : APIError) => any
}


export const useErrorStore = create<ErrorStore>(
    (set) => (
        {
            error : undefined,

            setError : (error : APIError) => set(state => {
                return ({...state, error : error})
            })
        }
    )
)

