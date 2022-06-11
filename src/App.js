import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Top from "./pages/Top";
import Watch from "./pages/Watch";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Top />} />
        <Route path="search" element={<Search />} />
        <Route path="watch" element={<Watch />} />
      </Routes>
    </Router>
  );
}

export default App;
