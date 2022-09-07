
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/singnup";

function App() {
  const user = localStorage.getItem("token");

  return (
      <Routes>
        <Route path="/signup" exact element={<Signup />} />
      </Routes>
  );
}

export default App;