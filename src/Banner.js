import { Button, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
const Banner = () => {
  return (
    <div className="banner">
      <div className="bannerdesc">
        <h1>Welcome To My Blog</h1>
        <Link to="/home">
          <Button borderRadius="3xl">Click and see blogs</Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
