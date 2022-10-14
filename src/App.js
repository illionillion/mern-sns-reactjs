import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import './style.css'
import { useContext } from "react";
import { AuthContext } from "./state/AuthContext";

function App() {
  
  const { user } = useContext(AuthContext)

  return (
    // ルーティング
      <Router>
        <Routes>
          {/* userがないなら登録画面へ */}
          <Route path="/" element={user ? <Home/> : <Navigate to="/register"/>} />
          {/* userがある場合Homeコンポーネントへリダイレクト */}
          <Route path="/login" element={user ? <Navigate to = "/" /> : <Login/>}/>
          <Route path="/register" element={user ? <Navigate to = "/" /> : <Register/>}/>
          <Route path="/profile/:username" element={<Profile/>}/>
        </Routes>
      </Router>
  );
}

export default App;
