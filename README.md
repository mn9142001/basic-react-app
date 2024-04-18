## How to use the getter component

The getter component is useful when you list objects in different pages and don't want to keep repeating the code for checking if response is success or not before loading the object, adding load circle or displaying an error on failure. It handles this automatically.

all you need to do is as following

```
const ListProductsPage = () => {
    return <Getter Component={Home} url="/pateint/plan/" />
}

```


## How to use the form component

```
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
```

It's typescript, you can easily understand what's going on

Anyways, fields can be array of field objects, or nested arrays of field objects

