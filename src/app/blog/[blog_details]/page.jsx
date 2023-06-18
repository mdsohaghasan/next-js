'use client';
import React from 'react';

const Page = async ({ params }) => {
  
  const { blog_details } = params;
  console.log(blog_details);

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${blog_details}`);
  const res = await response.json();
  console.log(res);

  return (
    <div>
      <h2>{blog_details}</h2>
      <div key={res.id}>
        <h2>{res.title}</h2>
        <h2>{res.body}</h2>
      </div>
    </div>
  );
};

export default Page;  
