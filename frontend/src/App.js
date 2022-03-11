import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong/AddSong";
import Songs from "./pages/Songs/Songs";
import SongDetail from "./pages/SongDetail/SongDetail";
import DeleteSong from "./pages/DeleteSong/DeleteSong";
import EditSong from "./pages/EditSong/EditSong";
import SignIn from "./pages/SignIn/SingIn";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sign-in/" element={<SignIn />} />
            <Route path="/register/" element={<Register />} />
            <Route path="/songs/" element={<Songs />} />
            <Route path="/add-song/" element={<AddSong />} />
            <Route path="/delete-song/:id" element={<DeleteSong />} />
            <Route path="/edit-song/:id" element={<EditSong />} />
            <Route path="/song-detail/:id" element={<SongDetail />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
