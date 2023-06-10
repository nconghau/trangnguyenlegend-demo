import { Route, Routes } from "react-router-dom";
import { Chat, Convert, Home, Manager, Product_list, Quiz, Statistical, Summary, ConvertText } from "./component";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/product-list" element={<Product_list />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/scan" element={<Convert />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/statistical" element={<Statistical />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/convertText" element={<ConvertText />} />
        {/* <Route path="/statistical" element={<Statistical />} /> */}
      </Routes>
    </>
  );
}

export default App;
