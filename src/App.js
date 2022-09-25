import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';
import BlogEdit from './components/BlogEdit';
import UserPage from './UserPage';
function App() {
  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/blogs/:id" element={<BlogDetails />}></Route>
              <Route path="/blogs/:id/user" element={<UserPage />}></Route>
              <Route path="*" element={<NotFound />}></Route>
              <Route path="/blogs/:id/edit" element={<BlogEdit />}></Route>
            </Routes>
          </div>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
