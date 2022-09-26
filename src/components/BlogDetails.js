import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../useFetch';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';

const BlogDetails = () => {
  //data
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();
  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      navigate('/home');
    });
  };

  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickLike = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <div className="blog-details">
      {isPending && <div>Blog is Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article className="article">
          <div className="imageDetail">
            <img src={blog.image} alt="" />
          </div>
          <div className="detailDescription">
            <h2>{blog.title}</h2>
            <p>Written By {blog.author}</p>
            <div>{blog.body}</div>
          </div>
          <div className="buttons">
            <div className="editBlogs">
              <button onClick={handleClick} style={{ color: 'red' }}>
                Delete
              </button>
              <Link to={`/blogs/${blog.id}/edit`}>
                {' '}
                <button>Edit</button>{' '}
              </Link>
            </div>
            <button
              className={`like-button ${isClicked && 'liked'}`}
              onClick={handleClickLike}
            >
              {' '}
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '14px',
                }}
              >
                <StarIcon w={3} h={3} />
                {` ${likes}`}
              </span>
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
