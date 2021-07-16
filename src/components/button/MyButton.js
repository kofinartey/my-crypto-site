import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styledButton = withStyles({})(Button);

function MyButton(props) {
  return (
    <div>
      <button type={props.type} size={props.size} color={props.color}>
        {props.children}
      </button>
    </div>
  );
}

export default withStyles(styles)(MyButton);
