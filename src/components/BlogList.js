import { Link } from 'react-router-dom';
import React from 'react';

const BlogList = ({ blogs, handleDelete }) => {
  // const [likes, setLikes] = useState(0);
  // const [isClicked, setIsClicked] = useState(false);

  // const handleClickLike = () => {
  //   if (isClicked) {
  //     setLikes(likes - 1);
  //   } else {
  //     setLikes(likes + 1);
  //   }
  //   setIsClicked(!isClicked);
  // };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <div className="blogOne">
            <div className="image">
              <img src={blog.image} alt="" />
            </div>
            <div className="info">
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </div>
          </div>
          <div className="blogdescription">
            <p>{blog.body}</p>
          </div>
          <div className="list-bottom">
            {/* <div dangerouslySetInnerHTML={{ __html: blog.tags }} /> */}

            <Link to={`/blogs/${blog.id}`}>
              <div className="more">
                <button>Read More..</button>
              </div>
            </Link>
          </div>
          {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
