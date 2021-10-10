import React, { useState } from 'react';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';

const CommentsContainer = styled.div`
  position: relative;
  background: #6B6B6E;
  margin-bottom: 10px;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;
  top: -5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius:  5px;
`;

const AddComment = styled.div`
  position: relative;
  padding: 10px;
`;

const AddBtn = styled.div`
  position: relative;
  display: inline-block;
  background: #ACD4FF;
  border-radius: 5px;
  margin-left: 10px;
  height: 26px;
  width: 120px;
  vertical-align: middle;
  cursor: pointer;
`;

const BtnText = styled.div`
  position: relative;
  top: 3px;
  text-align: center;
`;

const CommentContainer = styled.div`
  position: relative;
  border-bottom: 1px solid;
  padding: 10px;
`;

const DeleteComment = styled.div`
  position: relative;
  float: right;
  cursor: pointer;
`;

const Comment = ({ item, onClose }) => (
  <CommentContainer>
    {item.value}
    <DeleteComment onClick={() => onClose(item.id)}>
      x
    </DeleteComment>
  </CommentContainer>
);

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  return (
    <CommentsContainer>
      {comments.map(c => (
        <Comment
          key={c.id}
          item={c}
          onClose={(id) => {
            const newComments = comments.filter(c => c.id !== id);
            setComments(newComments);
          }}
        />
      ))}
      <AddComment>
        <input
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <AddBtn
          onClick={() => {
            if (text) {
              setComments([ ...comments, { value: text, id: nanoid() } ]);
              setText('');
            }
          }}
        >
          <BtnText>
            Add comment
          </BtnText>
        </AddBtn>
      </AddComment>
    </CommentsContainer>
  )
};

export default Comments;