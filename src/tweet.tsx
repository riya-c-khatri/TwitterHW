// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

// export default Tweet;
interface TweetProps {
    username: string;
    tweetText: string;
    initialLikes: number;
    timestamp: string;
  }
  
  const Tweet: React.FC<TweetProps> = ({ username, tweetText, initialLikes, timestamp }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(initialLikes);
  
    const handleLike = () => {
      setLiked(!liked);
      setLikes(liked ? likes - 1 : likes + 1);
    };
  
    return (
      <div className="tweet">
        <h2>{username}</h2>  {/* Display username as the name */}
        <p>{tweetText}</p>
        <div onClick={handleLike} style={{ cursor: 'pointer', fontSize: '20px' }}>
          {liked ? '❤️' : '🤍'} {likes}
        </div>
        <small>{timestamp}</small>  {/* Display timestamp */}
      </div>
    );
  };
  
  export default Tweet;