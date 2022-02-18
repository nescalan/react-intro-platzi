import { User } from "..";
import "./TweetComponent.css";

const TweetComponent = ({ usersList }) => {
  return (
    <section className="container">
      {usersList.map((tweet) => (
        <div className="tweet" key={tweet.id}>
          <User
            first_name={tweet.first_name}
            last_name={tweet.last_name}
            avatarImg={tweet.avatar}
            unsername={tweet.username}
          />
          <div className="tweet-text">
            <p>Email: {tweet.email}</p>
            <p>Gender: {tweet.gender}</p>
            <p>Address: {tweet.address.city}</p>
          </div>
          <div className="tweet-image">
            Subscription: {tweet.subscription.plan}
          </div>
          <div className="tweet-date">Fecha: {tweet.date_of_birth}</div>
        </div>
      ))}
    </section>
  );
};

export { TweetComponent };
