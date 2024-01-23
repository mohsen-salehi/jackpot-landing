import {createPortal} from "react-dom";
import LoadingComponent from "./components/loading/LoadingComponent.jsx";
import LoserModal from "./components/modals/loserModal.jsx";

function Layout({children}) {
    return (
        <main className="bg-main-mobile md:bg-main-desktop bg-cover bg-no-repeat">
            {children}
            {
                createPortal(
                    // <LoadingComponent/>
                    <LoserModal/>
                    , document.body)
            }
        </main>
    );
}

export default Layout;