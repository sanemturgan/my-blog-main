import BlogList from './components/BlogList';
import useFetch from './useFetch';
import { CircularProgress } from '@chakra-ui/react';
const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <CircularProgress isIndeterminate color="purple.300" />
          <p>Loading...</p>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
// const handleDelete = (id) => {
//   const newBlogs = blogs.filter((blog) => blog.id !== id);
//   setBlogs(newBlogs);
// };

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//       setBlogs(data);
//       console.log(data);
//     });
// }, []);
