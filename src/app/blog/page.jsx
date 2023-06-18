// 'use client'
// import React, { useEffect, useState } from 'react';

// export default function Blog() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       setPosts(data);
//       console.log(data)
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
      
//       {posts.map((post) => (
//         <div key={post.id}>
//           <h2>{post.title}</h2>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }


// ------------------ Client-Side Rendering (useEffect or fetch) -----------------------

	

import React from 'react';
import Link from 'next/link';

const page = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await data.json()
  console.log(res)
  return (
    <div> 
           {res.map((post) => (
              <div key={post.id}>
              <Link href={`/blog/${post.id}`}><h2>{post.title}</h2></Link>
             
             </div>
           ))}
         </div>
  )
}

export default page