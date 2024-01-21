import {createPortal} from "react-dom";
import LoadingComponent from "./components/loading/LoadingComponent.jsx";

function Layout({children}) {
    return (
        <main className="container w-screen mx-auto">
            {children}
            {/*{*/}
            {/*    createPortal(<LoadingComponent/>, document.body)*/}
            {/*}*/}
        </main>
    );
}

export default Layout;