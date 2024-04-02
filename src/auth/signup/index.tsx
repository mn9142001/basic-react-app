import { useMutation } from "@tanstack/react-query"
import { ComponentProps } from "react"
import { AXIOS } from "../../utils/axios"
import { Form } from "../../components/forms"


const SignUp = () => {

    const signupSuccess = (data: any) => {
        console.log(login)
    }

    const submitLogin = (data : any) => {
        return AXIOS.post("http://localhost:8000/patient/signup/", data)
    }

    const login = useMutation({
        mutationFn: submitLogin,
        onSuccess: signupSuccess,
    })

    const formProps : ComponentProps<typeof Form> = {
        fields : [
            [
                {
                    field : {label : "First Name", required: false, name : "first_name"}
                },
                [
                    {
                        field : {label : "Middle Name", required: false, name : "middle_name"}
                    },
                    {
                        field : {label : "Last Name", required: false, name : "last_name"}
                    }
                ]
            ],

            [
                {
                    field : {
                        type : "password",
                        required : false,
                        label : "Password",
                        name : "password"
                    }
                },
                {
                    field : {
                        type : "password",
                        required : false,
                        label : "Repeat Password",
                        name : "repeat_password"
                    }
                },
    
            ]
        ],

        onSubmit : (data : any) => login.mutate(data)
    }

    return <div className="p-2">
        <Form {...formProps} />
    </div>
}

export default SignUp