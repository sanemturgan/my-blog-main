import BlogList from './components/BlogList';
import useFetch from './useFetch';
import { CircularProgress } from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
const Home = () => {
  const { author } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + author);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <CircularProgress isIndeterminate color="purple.300" />
          <p>Loading...</p>
        </div>
      )}
      {blog && <BlogList blogs={blog} />}
    </div>
  );
};

export default Home;
