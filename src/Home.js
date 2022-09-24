import { useState, useEffect } from 'react';
import BlogList from './components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 500);
  }, []);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogs(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading..</div>}
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}{' '}
    </div>
  );
};

export default Home;
