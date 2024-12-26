import Blogs from "./components/Blogs"
import Discount from "./components/Discount"
import FeatureProduct from "./components/FeatureProduct"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import Services from "./components/Services"


const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero/>
      <Services/>
      <FeatureProduct/>
      <Discount/>
      <Blogs/>
    </main>
  )
}

export default App