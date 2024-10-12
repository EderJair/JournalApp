//thunks: acciones asincronas

import { ClassSharp } from "@mui/icons-material";
import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";
import { clearNotesLogout } from "../journal/journalSlice";

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch(checkingCredentials());

    }
}

export const startGoogleSingIn = () => {
    return async( dispatch ) => {

        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage} = await singInWithGoogle()
        if( !ok ) return dispatch(logout({ errorMessage}))
        dispatch(login(result))
        
    }
}

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) => {

    return async (dispatch) => {

        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage} = await registerUserWithEmailAndPassword({email, password, displayName})
        if(!ok) return dispatch(logout({ errorMessage }))

        dispatch(login({uid, email, displayName, photoURL}))
 
    }

}


export const startLoginWithEmailAndPassword = ({email, password}) => {

    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email, password})
        if(!result.ok) return dispatch(logout(result ))

        dispatch(login(result))
    }

}


export const startLogout = () => {

    return async (dispatch) => {

        await logoutFirebase()
        dispatch(clearNotesLogout())
        dispatch(logout())

    }



}