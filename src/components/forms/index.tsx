import React, { FC, useState } from "react"
import { useErrorStore } from "../../utils/axios/store"
import ErrorComponent from "../errors"
import { FormProps } from "./types"
import { DefaultSubmitButton, FormField } from "./partials"
import { useMutation } from "@tanstack/react-query"
import { AXIOS } from "../../utils/axios"
import { AxiosRequestConfig } from "axios"


export const Form: FC<FormProps> = ({ fields, onSubmit, SubmitButton, onSuccess, submitURL, method="POST" }) => {

    const axiosSubmit = (data : any) => {
        const axiosConfig : AxiosRequestConfig = {
            method : method,
            url : submitURL,
            data : data,
        }

        return AXIOS(axiosConfig)
    }
    
    const defaultSubmit = useMutation({
        mutationFn: axiosSubmit,
        onSuccess: onSuccess ? onSuccess : () => null,
    })

    const { error } = useErrorStore()

    const [fieldsState, setFieldState] = useState({})

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit ? onSubmit(fieldsState) : defaultSubmit.mutate(fieldsState)
    }

    const isFieldError = error?.type === "validation_error"

    return <form onSubmit={handleSubmit} className="flex flex-col">

        {
            !isFieldError && error ? <ErrorComponent error={error} /> : <></>
        }

        {
            fields.map((field, key) => {

                return <FormField fieldsState={fieldsState} setFieldState={setFieldState} key={key} field={field} />
            })
        }

        {
            SubmitButton ? <SubmitButton /> : <DefaultSubmitButton />
        }

    </form>
}