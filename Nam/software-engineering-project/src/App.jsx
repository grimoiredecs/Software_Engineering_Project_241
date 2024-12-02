import Home from "./Home";
import LoginPage from "./login";
import Dashboard from "./Dashboard";
import NotAvailable from "./NotAvailable";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserProvider } from './components/UserContext';

function App(){
  return(
    <UserProvider>
      <Router>
        <Routes>
          <Route path='/unavailable' element={<NotAvailable />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LoginPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </UserProvider>

  );
} 

export default App
