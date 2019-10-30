import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      {/* nested component */}
      <ApprovalCard>
        <CommentDetail
          author="John"
          time="Today at 4:20 PM"
          content="Hello there!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Bob"
          time="Today at 2:00 AM"
          content="Good Day!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="James"
          time="Yesterday at 5:20 PM"
          content="Nice to meet U!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure?
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
