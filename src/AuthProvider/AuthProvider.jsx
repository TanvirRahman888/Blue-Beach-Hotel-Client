import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = {
        logIn,
        logInWithGoogle,
        loading,
        setLoading,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;