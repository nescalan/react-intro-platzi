import { Avatar } from "..";

const UserComponent = (props) => {
  return (
    <>
      <Avatar avatarImg={props.avatarImg} username={props.username} />
      <div className="user-name">
        {props.first_name} {props.last_name}
      </div>
    </>
  );
};

export { UserComponent };
