import { useState, useEffect } from 'react';
import BlogList from './components/BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  //   useEffect(() => {
  //     fetch('http://localhost:3000/blogs')
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data);
  //         console.log(data);
  //       });
  //   }, []);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} handleDelete={handleDelete} />}{' '}
    </div>
  );
};

export default Home;
