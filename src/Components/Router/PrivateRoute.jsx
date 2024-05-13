import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext)
    if (loading) {
      return  <div className="flex gap-3 items-center justify-center min-h-screen">
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;