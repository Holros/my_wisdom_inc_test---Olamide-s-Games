import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./Layout";
import IndividualGames from "./pages/IndividualGames";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/game/:id" element={<IndividualGames />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
