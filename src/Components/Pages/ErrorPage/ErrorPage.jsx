import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Link to={'/'}>
            <img src="https://miro.medium.com/v2/resize:fit:679/1*zBFBJktPD3_z0S_35kO5Hg.gif" className="w-full h-screen" alt="" />
            </Link>
        </div>
    );
};

export default ErrorPage;