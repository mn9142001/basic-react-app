import { ComponentProps } from "react"
import { Form } from "../../../components/forms"


const SignUp = () => {

    const signupSuccess = (data: any) => {
        console.log(data)
    }


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

        submitURL : "/patient/signup/",
        onSuccess : signupSuccess
    }

    return <div className="p-2">
        <Form {...formProps} />
    </div>
}

export default SignUp