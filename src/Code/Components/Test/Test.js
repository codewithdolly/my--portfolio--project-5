import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </Router>
  );
}

const Test=()=> {

  return (
    <div>
      <nav>
      <Link to="/">Home</Link>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Link;