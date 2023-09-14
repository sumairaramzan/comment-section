import React, { useState } from "react";
import classes from "./index.module.scss";
import CommentSection from "Components/CommentSection";
import ReplySection from "Components/ReplySection";

const LandingPage = () => {
  const [comments, setComments] = useState([]);
  return (
    <div className={classes.app}>
      <CommentSection comments={comments} setComments={setComments} />
      {comments.map((comment, index) => (
        <ReplySection
          key={index}
          parentIndex={index}
          comments={comments}
          setComments={setComments}
        />
      ))}
     
    </div>
  );
};

export default LandingPage;
