import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <Helmet><title>Blue Beach Hotel | Log in</title></Helmet>

            <Link to={'/'}>
                <img src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" className="w-full h-screen" alt="" />
            </Link>
        </div>
    );
};

export default ErrorPage;