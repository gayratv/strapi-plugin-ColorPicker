// eslint-disable-next-line import/no-extraneous-dependencies
import React from "react";
import EditViewDataManagerContext from "../../contexts/EditViewDataManager";

// eslint-disable-next-line import/prefer-default-export
export const TestContent = () => {
  const context = React.useContext(EditViewDataManagerContext);
  console.log("context ********************** ", context);
  return (
    <div>
      <h1>************** TEST context **************</h1>
    </div>
  );
};
