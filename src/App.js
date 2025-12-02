import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/index.tsx";
import RestList from "./components/RestList/index.tsx";
import { GlobalCss } from "./styles.ts";

function App() {
  return (
    <>
    <GlobalCss/>
    <Header/>
    <RestList/>
    <Footer/>
    </>
  );
}

export default App;
