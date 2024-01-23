import Layout from "../../Layout.jsx";
import JackpotSection from "../../components/jackpot/jackpotSection.jsx";
import Guide from "../../components/guide/guide.jsx";
import Brands from "../../components/banners/brands.jsx";
import FormSection from "../../components/forms/formSection.jsx";


function App() {

    return (
        <Layout>
            <section id="main-index"
                     className="w-full container  w-screen mx-auto m-0 p-0 flex flex-wrap  md:h-auto  overflow-hidden justify-center items-center">
                <JackpotSection/>
                <FormSection/>
                <Guide/>
                <Brands/>
            </section>
        </Layout>
    )
}

export default App
