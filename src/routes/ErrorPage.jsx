import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
    const error = useRouteError() || {};

    return (
        <div>
         <h1>Something went wrong!</h1>
         <p>{error.statusText || error.message || "Unknown error"}</p>
        <Link to="/">
        Home
        </Link>
    </div>
    );
};

export default ErrorPage;