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
      navigate('/');
    });
  };
  const [likes, setLikes] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickLike = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'POST',
    })
      .then(() => {
        if (isClicked) {
          setLikes(likes - 1);
        } else {
          setLikes(likes + 1);
        }
      })
      .then(() => {
        setIsClicked(!isClicked);
      });
  };

  // const handleClickLike = () => {
  //   if (isClicked) {
  //     setLikes(likes - 1);
  //   } else {
  //     setLikes(likes + 1);
  //   }
  //   setIsClicked(!isClicked);
  // };

  return (
    <div className="blog-details">
      {isPending && <div>Blog is Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <div>{blog.body}</div>

          <button onClick={handleClick} style={{ color: 'red' }}>
            Delete
          </button>
          <Link to={`/blogs/${blog.id}/edit`}>
            {' '}
            <button>Edit</button>{' '}
          </Link>
          <button
            className={`like-button ${isClicked && 'liked'}`}
            onClick={handleClickLike}
          >
            {' '}
            <span>
              <StarIcon w={4} h={4} />
              {` ${likes}`}
            </span>
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
