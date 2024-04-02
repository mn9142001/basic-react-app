import { ComponentProps } from "react"
import { Form } from "../../components/forms"

const Login = () => {

    const loginSuccess = (data: any) => {
        console.log(data)
    }

    const formProps : ComponentProps<typeof Form> = {
        fields : [
            {
                field : {
                    required : true,
                    label : "Email",
                    name : "email"
                }
            },
            {
                field : {
                    type : "password",
                    required : true,
                    name : "password",
                    label : "Password"
                }
            }
        ],

        submitURL : "/patient/login/",
        onSuccess : loginSuccess,

    }

    return <div className="p-2">
        <Form {...formProps} />
    </div>
}

export default Login