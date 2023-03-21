import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { HQDetails } from "./pages/HQDetails/HQDetails";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hq/:id" element={<HQDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
