import React, { useEffect, useState } from "react";
import Posts from "./subcomponents/Posts";

function Useeffect() {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((posts) => setPosts(posts));
  // }, []);
  // return posts.map((post) => <Posts key={post.id} post={post} />);
  // <>
  //   <div className="container">
  //     <h1>UseEffect</h1>
  //     {posts.map((post) => (
  //       <Posts key={post.id} post={post.title} />
  //     ))}
  //   </div>
  // </>
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    console.warn("useEffect");
  }, [count]);
  return (
    <>
      <div className="container">
        <h1>UseEffect</h1>
        <h3>Count : {count} </h3>
        <h3>Data : {data}</h3>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Click me Count
        </button>
        <button className="btn btn-primary" onClick={() => setData(data + 1)}>
          Click me Data
        </button>
      </div>
    </>
  );
}

export default Useeffect;
