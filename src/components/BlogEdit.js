import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  ButtonGroup,
  IconButton,
  Flex,
  Input,
  useEditableControls,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
const BlogEdit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8000/blogs/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log(blog);
      navigate('/');
    });
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm">
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center">
        <IconButton size="sm" icon={<EditIcon />} {...getEditButtonProps()} />
      </Flex>
    );
  }

  return (
    <div className="create">
      {isPending && <div>Blog is Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <Editable
              textAlign="center"
              defaultValue={blog.title}
              fontSize="2xl"
              isPreviewFocusable={false}
            >
              <EditablePreview />
              {/* Here is the custom input */}
              <Input
                as={EditableInput}
                value={blog.title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <EditableControls />
            </Editable>

            <label>Blog Body:</label>
            <Editable
              textAlign="center"
              defaultValue={blog.body}
              fontSize="2xl"
              isPreviewFocusable={false}
            >
              <EditableTextarea />
              <EditablePreview />
              {/* Here is the custom input */}
              <Input
                as={EditableInput}
                value={blog.body}
                onChange={(e) => setBody(e.target.value)}
              />
              <EditableControls />
            </Editable>

            <label>Blog Author: </label>
            <select
              value={blog.author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>
            <button>Add Blog</button>

            <h2>{title}</h2>
            <p>{body}</p>
            <p>{author}</p>
          </form>
        </article>
      )}
    </div>
  );
};

export default BlogEdit;
