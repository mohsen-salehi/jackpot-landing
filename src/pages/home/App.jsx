import Layout from "../../Layout.jsx";
import JackpotSection from "../../components/jackpot/jackpotSection.jsx";
import Guide from "../../components/guide/guide.jsx";
import Brands from "../../components/banners/brands.jsx";


function App() {

  return (
    <Layout>
        <section id="main-index" className="w-full m-0 p-0 flex flex-wrap  md:h-auto   justify-center items-center">
            <JackpotSection/>
            <Guide/>
            <Brands/>
        </section>
    </Layout>
  )
}

export default App
