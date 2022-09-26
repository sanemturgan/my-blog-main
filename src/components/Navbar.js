import { Link } from 'react-router-dom';
import {
  SunIcon,
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';
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
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                style={{
                  color: 'white',
                  backgroundColor: '#f1f0f3',
                  borderRadius: '8px',
                }}
              >
                {isOpen ? <CloseIcon /> : <HamburgerIcon />}
              </MenuButton>
              <MenuList>
                <MenuItem>
                  {' '}
                  <Link to="/">Home Page</Link>
                </MenuItem>
                <MenuItem
                  style={{
                    backgroundColor: '#a5e6a7',
                    textAlign: 'center',
                  }}
                >
                  {' '}
                  <Link to="/create">
                    New Blog <AddIcon style={{ margin: '0 5px' }} w={3} h={3} />
                  </Link>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
