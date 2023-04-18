import React from "react";
import { useState } from "react";

const Like = () => {
     const [like, setLike] = useState(false);
     console.log(like);
     return (
          <div>
               <h2 onClick={() => setLike(!like)}>Like:{like ? "🫢" : "😉"}</h2>
          </div>
     );
};

export default Like;
