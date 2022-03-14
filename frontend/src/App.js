import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage'
import SongDetail from './pages/SongDetail'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header/>
          <Route component={HomePage} path="/" exact/>
          <Route component={SongDetail} path="/song/:id/" exact/>
          <Route component={LoginPage} path="/login/"/>
          <Route component={RegisterPage} path="/register/"/>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
