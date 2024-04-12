import { FC } from "react";
import { useErrorStore } from "../../utils/axios/store";
import { FormFieldNestedArray, FormFieldProps } from "./types";
import { Button, TextField } from "@mui/material";




export const isFunctionalComponent = (component: any): component is FC => {
    return typeof component === 'function';
}

export const FormField = (
    {
        field, fieldsState, setFieldState, onError
    }: {
        fieldsState: Record<string, any>,
        field: FormFieldNestedArray | FormFieldProps,
        setFieldState: any,
        onError? : (fieldName : string) => void;
    }
) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value

        setFieldState(
            (pre: any) => (
                {
                    ...pre, ...(
                        {
                            [name]: value
                        }
                    )
                }
            )
        )
    }

    const { error } = useErrorStore()
    const isError = Boolean(error?.type)

    const getFieldError = (field: string) => {
        const res = error?.errors?.filter(error => error.attr === field)[0]?.detail
        return res
    }

    if (Array.isArray(field)) {
        return <div className="flex flex-wrap">
            {
                field.map((f, key) => {
                    return <FormField field={f} fieldsState={fieldsState} setFieldState={setFieldState} key={key} />
                })
            }
        </div>
    }

    if (isFunctionalComponent(field.field)) {
        const fieldProps = { fieldsState: fieldsState, onchange: onChange }
        const Field = field.field
        return <Field {...fieldProps} />
    }

    const fieldProps = field.field || {}
    const errorMessage = isError && fieldProps?.name ? getFieldError(field.apiName || fieldProps.name) : ""
    fieldProps.error = Boolean(errorMessage)

    if (fieldProps.error){
        fieldProps.helperText = errorMessage
    }

    return <div className="p-2 flex flex-col">
        <TextField {...fieldProps} onChange={onChange} />
    </div>
}

export const DefaultSubmitButton = () => {

    return <div className="p-2">
        <Button type="submit" variant="contained">Submit</Button>
    </div>

}