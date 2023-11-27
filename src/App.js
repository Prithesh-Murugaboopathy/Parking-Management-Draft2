import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Screens/Home/Home";
import History from "./Screens/History/History";
import Header from "./Header";
import Stats from "./Screens/Stats/Stats";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
