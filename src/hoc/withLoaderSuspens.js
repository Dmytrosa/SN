import React, { PureComponent } from "react";
import Loader from "../components/Assets/Loader";

export const withLoaderSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Loader />}>
            <Component {...props} />
        </React.Suspense>
    }
}

