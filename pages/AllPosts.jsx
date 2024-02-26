import React from "react";
import appwriteService from "/src/appwrite/conf.js";

import { Container, PostCard } from "../src/components";
import { useState, useEffect } from "react";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getAllposts().then((res) => {
    if (res) {
      setPosts(res.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4 ">
              <PostCard {...post} />{" "}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPosts;
