import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddSong from "./pages/AddSong/AddSong";
import Songs from "./pages/Songs/Songs";
import SongDetail from "./pages/SongDetail/SongDetail";
import DeleteSong from "./pages/DeleteSong/DeleteSong";
import EditSong from "./pages/EditSong/EditSong";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
    return ( 
        <Router>
            
            <Header/>
            <div className="App">
            <Routes>
                <Route exact path = "/" element = { <Home/> }/> 
                <Route path = "/songs/" element = { <Songs/> }/> 
                <Route path = "/add-song/" element = { <AddSong/> }/>
                <Route path = "/delete-song/:id" element = { <DeleteSong/> }/> 
                <Route path = "/edit-song/:id" element = { <EditSong /> }/> 
                <Route path = "/song-detail/:id" element = { <SongDetail /> }/> 
            </Routes> 
            </div>
        </Router> 
    );
}

export default App;