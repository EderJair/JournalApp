import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()


export const registerUserWithEmailAndPassword = async ({email, password, displayName}) => {
    try{
        
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid , photoURL} = resp.user;
        await updateProfile( FirebaseAuth.currentUser, { displayName } );
        
        return{
            ok: true,
            uid,
            displayName,
            email,
            photoURL
        }
        
        
    }catch(error){
        // console.log(error)
        return {ok : false, errorMessage: error.message}
    }
}

export const singInWithGoogle = async (auth) => {
    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult( result )
        const {displayName, email, photoURL, uid} = result.user
        
        return {
            ok: true,
            // user info
            uid,
            displayName,
            email,
            photoURL
        }
     
    }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
    // The email of the user's account used.
        const email = error.customData.email;
    // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error)
        return {
            ok: false,
            errorCode,
            errorMessage,
        }
    }
}

export const loginWithEmailPassword = async({email, password}) => {
    try{
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password)
        const {displayName, photoURL, uid} = result.user

        return {
            ok: true,
            uid,
            displayName,
            photoURL
        }


    }catch(error){
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message
        }
    }
    // singinwithemailandpassword
}


export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut()
}