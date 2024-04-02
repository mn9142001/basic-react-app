import { TextField } from "@mui/material";
import { ComponentProps, FC } from "react";

export interface FormFieldProps {
    field?: FC<any> | ComponentProps<typeof TextField>
}


export interface FormProps {
    fields: FormFieldNestedArray
    onSubmit?: (e: any) => void
    SubmitButton? : FC
    onSuccess? : (e : any) => void
    submitURL? : string
    method? : string
}

export type FormFieldNestedArray = Array<FormFieldProps | FormFieldProps[] | FormFieldNestedArray>;
