import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.tsx";
import { GlobalCss } from "./styles.ts";

function App() {
  return (
    <>
    <GlobalCss/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
