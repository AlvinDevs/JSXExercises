
let Tweet = ({username, date, name, message}) => {
return (
<div className="tweet">

    <div className="username">
    <span className="username">{username}</span>
    <span className="tweet-date">{date}</span>
    </div>
    <div className="tweet-content">
    <span className="user-name">{name}</span>
    <p className="message">{message}</p>
    </div>
</div>
);

}

//wants the usernames of the tweet
//with name,date, and the message 