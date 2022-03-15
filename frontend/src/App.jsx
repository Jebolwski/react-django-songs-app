import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SongDetail from "./pages/SongDetail";
import AddSong from "./pages/AddSong";
import Songs from "./pages/Songs";
import Header from "./components/Header";
import ProtectedRoutes from "./ProtectedRoutes";
import EditSong from "./pages/EditSong";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/song/:id/" element={<SongDetail />} />
            <Route path="/songs/" element={<Songs />} />
            <Route path="/song/:id/edit/" element={<EditSong />} />
            <Route path="/add-song/" element={<AddSong />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="/login/" element={<LoginPage />} />
              <Route path="/register/" element={<RegisterPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
