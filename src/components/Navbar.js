import { Link } from 'react-router-dom';
import { SunIcon } from '@chakra-ui/icons';
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        {' '}
        <div className="navbarlogo">
          {' '}
          <h1>Blog</h1>
          <h1>
            <SunIcon />
          </h1>
        </div>{' '}
      </Link>
      <div className="links">
        <Link
          to="/create"
          style={{
            color: 'white',
            backgroundColor: '#572da7',
            borderRadius: '8px',
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
