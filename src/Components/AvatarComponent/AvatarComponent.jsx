import React from "react";

const AvatarComponent = (props) => {
  return <img src={props.avatarImg} alt={props.username} />;
};

export { AvatarComponent };
