import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Guides from './pages/guides';

function App() {
    return (
        <Router>
            <Navbar></Navbar>
            <main className='main'>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/pages/about" element={<About />}></Route>
                    <Route path="/pages/guides" element={<Guides />}></Route>
                </Routes>
            </main>
        </Router>
    );
}

export default App;
