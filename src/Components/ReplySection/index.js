import React, { useState } from 'react';

function ReplySection({ parentIndex, comments, setComments }) {
  const [newReply, setNewReply] = useState('');
  
  const handleReplyChange = (e) => {
    setNewReply(e.target.value);
  };
  
  const addReply = () => {
    if (newReply.trim() !== '') {
      const updatedComments = [...comments];
      updatedComments[parentIndex].replies.push({ text: newReply, likes: 0 });
      setComments(updatedComments);
      setNewReply('');
    }
  };
  
  const removeReply = (replyIndex) => {
    const updatedComments = [...comments];
    updatedComments[parentIndex].replies.splice(replyIndex, 1);
    setComments(updatedComments);
  };
  
  const toggleLike = (replyIndex) => {
    const updatedComments = [...comments];
    updatedComments[parentIndex].replies[replyIndex].likes = 
      updatedComments[parentIndex].replies[replyIndex].likes === 1 ? 0 : 1;
    setComments(updatedComments);
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Add a reply"
        value={newReply}
        onChange={handleReplyChange}
      />
      <button onClick={addReply}>Submit</button>
      {comments[parentIndex].replies.map((reply, replyIndex) => (
        <div key={replyIndex}>
          <p>{reply.text}</p>
          <button onClick={() => removeReply(replyIndex)}>Remove</button>
          <button onClick={() => toggleLike(replyIndex)}>
            {reply.likes === 1 ? 'Unlike' : 'Like'} ({reply.likes})
          </button>
        </div>
      ))}
    </div>
  );
}

export default ReplySection;
