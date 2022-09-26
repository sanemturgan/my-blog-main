import { useParams } from 'react-router-dom';
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
  Button,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
const BlogEdit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);

  const navigate = useNavigate();

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup
        justifyContent="flex-end"
        display="flex"
        alignItems="flex-end"
        size="sm"
        colorScheme="whiteAlpha"
      >
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="flex-end">
        <IconButton
          size="sm"
          variant="with-shadow"
          icon={<EditIcon />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  function updateBlog() {
    let item = { title, body, author, image };
    console.warn('item', item);
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((res) => {
      res.json().then((resp) => {
        console.warn(resp);
        navigate('/home');
      });
    });
  }

  return (
    <div className="create">
      {isPending && <div>Blog is Loading..</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <form className="form">
            <label>Blog Title:</label>
            <div className="editable">
              <Editable
                textAlign="left"
                defaultValue={blog.title}
                fontSize="1x1"
                isPreviewFocusable={false}
              >
                <EditablePreview />

                <Input
                  type="text"
                  focusBorderColor="purple.300"
                  as={EditableInput}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <EditableControls />
              </Editable>
            </div>
            <label>Blog Body:</label>
            <div className="editable">
              <Editable
                textAlign="left"
                defaultValue={blog.body}
                fontSize="1x1"
                isPreviewFocusable={false}
              >
                <EditableTextarea size="lg" />
                <EditablePreview />

                <Input
                  focusBorderColor="purple.300"
                  as={EditableInput}
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  size="lg"
                />
                <EditableControls />
              </Editable>
            </div>
            <label>Blog Author:</label>
            <div className="editable">
              <Editable
                textAlign="left"
                defaultValue={blog.author}
                fontSize="1x1"
                isPreviewFocusable={false}
              >
                <EditablePreview />

                <Input
                  type="text"
                  focusBorderColor="purple.300"
                  as={EditableInput}
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                <EditableControls />
              </Editable>
            </div>
            <label>Blog Image URL:</label>
            <div className="editable">
              <Editable
                textAlign="left"
                defaultValue={blog.image}
                fontSize="1x1"
                isPreviewFocusable={false}
              >
                <EditablePreview />

                <Input
                  type="text"
                  focusBorderColor="purple.300"
                  as={EditableInput}
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
                <EditableControls />
              </Editable>
            </div>

            <Button size="xl" colorScheme="whiteAlpha" onClick={updateBlog}>
              Update Blog
            </Button>
          </form>
        </article>
      )}
    </div>
  );
};

export default BlogEdit;
