import React from "react";
import "./Testimonial.css";

function Comment() {
  return (
    <div className="commentBody">
      <div>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
      </div>
      <p className="comment">"I love it! Best serum I have ever used!"</p>
      <p className="author">~ Jane Doe</p>
    </div>
  );
}

export default Comment;
