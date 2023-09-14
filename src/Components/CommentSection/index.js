import Profile from "../../Images/Rectangle 1.svg";
import Profile1 from "../../Images/Rectangle2.svg";
import React, { useState } from "react";
import vector from "../../Images/Vector.svg";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import heart from "../../Images/Heart.svg";

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const addComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, { text: newComment, likes: 0, replies: [] }]);
      setNewComment("");
    }
  };

  const removeComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  const toggleLike = (index) => {
    const updatedComments = [...comments];
    updatedComments[index].likes = updatedComments[index].likes === 1 ? 0 : 1;
    setComments(updatedComments);
  };

  return (
    <div class="container pt-5">
      <Row>
        <Col md={8} className={"offset-md-2"}>
          <h5 className="text-start">Comment Section</h5>
          <div className="d-flex flex-column comment-section">
            <div className="box mb-3">
              <div className={"imgBox"}>
                <img src={Profile} alt="" className="rounded-circle" />
              </div>
              <div className={"description"}>
                <h6 className="d-block fw-bold name">Marry Andrews</h6>
                <p className="text-muted"> I was very glad to have you after such a long time. Can you plan a meetup? Maybe this weekend?</p>
                <ul className={"actionList"}>
                  <li>
                    <button className={"status"}>
                      <img src={heart} alt="" />
                    </button>
                  </li>
                  <li>
                    <button>Remove</button>
                  </li>
                </ul>
              </div>
            </div>
            {comments.map((comment, index) => (
              <div className={"box mb-3"} key={index}>
                <div className={"imgBox"}>
                  <img src={Profile1} alt="" className="rounded-circle" />
                </div>
                <div className={"description"}>
                  <h6 className="d-block fw-bold name">Marry Andrews</h6>
                  <p>{comment.text}</p>
                  <ul className={"actionList"}>
                    <li>
                      <button onClick={() => toggleLike(index)} className={"status"}>
                        {comment.likes === 1 ? "" : ""} {comment.likes}
                        <img src={heart} alt="" />
                      </button>
                    </li>
                    <li>
                      <button onClick={() => removeComment(index)} className={"remove"}>
                        Remove
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ))}

            <div className="position-relative d-flex flex-row align-items-start textarea-comment">
              <input
                type="text"
                value={newComment}
                onChange={handleCommentChange}
                className="form-control ml-1 shadow-none textarea"
                placeholder="Write your comment"
              ></input>
              <button onClick={addComment} className="btn-comment btn-sm shadow-none" type="button">
                <img src={vector} alt="" />
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default CommentSection;
