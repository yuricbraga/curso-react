import React from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Are you sure you want to do this?</h4>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          comment="Nice blog post!"
          timeAgo="Today at 4:45PM"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Alex"
          comment="I like the subject"
          timeAgo="Today at 2:00AM"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Jane"
          comment="I like the writing"
          timeAgo="Yesterday at 5:00PM"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
