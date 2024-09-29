import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./pages/Authentication/Authentication";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          {/* <Route path="/message" element={<Message />} /> */}
          <Route path="/*" element={<Authentication />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
