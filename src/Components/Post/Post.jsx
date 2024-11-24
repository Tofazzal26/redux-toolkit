import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../lib/postSlice";

const Post = () => {
  const { posts, isLoading, isError, error } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  let content;

  if (!isError && !error && isLoading) {
    content = (
      <div className="my-10">
        <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }

  if (isError || error) {
    content = (
      <div>
        <h1 className="text-2xl text-red-500">{error || isError}</h1>
      </div>
    );
  }

  if (!isLoading && !isError && !error && posts.length > 0) {
    content = (
      <div className="grid grid-cols-4 justify-center gap-4">
        {posts.slice(0, 4).map((item, idx) => (
          <div
            key={idx}
            className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100"
          >
            <img
              src="https://i.ibb.co.com/0rXNNQn/12.png"
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  Donec lectus leo
                </h2>
                <p className="text-gray-100">
                  Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                  eget.
                </p>
              </div>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
              >
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Post;
