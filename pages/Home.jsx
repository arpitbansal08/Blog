import React from "react";
import appwriteService from "/src/appwrite/conf.js";
import { Container, PostCard } from "../src/components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    appwriteService.getAllposts().then((res) => {
      if (res) {
        console.log(res.documents);
        setPosts(res.documents);
      }
    });
  }, []);
  return posts.length > 0 ? (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map(
            (post) => (
              (
                <div key={post.$id} className="p-2 w-1/4 ">
                  <PostCard
                    {...post}
                  />
                </div>
              )
            )
          )}
        </div>
      </Container>
    </div>
  ) : (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to read Posts
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
