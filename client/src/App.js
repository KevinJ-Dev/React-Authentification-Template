import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./components/singnup";
import Login from "./components/login";
import Main from "./components/main";

function App() {
    const user = localStorage.getItem("token");

    return (
        <Routes>
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/main" exact element={<Main />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    );
}

export default App;