import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;