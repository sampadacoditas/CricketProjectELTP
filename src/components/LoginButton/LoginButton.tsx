import {GoogleLogin} from "react-google-login"
import { Navigate, useNavigate } from "react-router-dom"
import styles from "./LoginButton.module.scss"

const clientId="481580963451-b4k0ilpdgcuotefrkkiis8mi0vphndcr.apps.googleusercontent.com"

function LoginButton()
{
    const navigate=useNavigate()
    const onSuccess=(res:any)=>{
        console.log("Login Success Current User",res.profileObj)
        navigate("/mainPage")
    }
    const onFailure=(res:any)=>{
        console.log("Login Failed! res:",res)
        navigate("/")
    }
    return (
        <div className={styles.signInButton}>
            <GoogleLogin 
            clientId={clientId}
            buttonText="SignIn With Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}
export default LoginButton