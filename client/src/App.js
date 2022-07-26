import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from "./pages/Login"

// pages & components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebaseConfig';

function App() {
  const [user, loading] = useAuthState(auth);
if(!user){return <LoginScreen />}
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

