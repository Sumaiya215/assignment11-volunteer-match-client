import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios';

const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetchAllPosts();
    }, [])

    const fetchAllPosts = async () => {
        const { data } = await axios.get(`http://localhost:3000/posts`)
        setPosts(data)
    }

    console.log(posts);

    return (
        <div className='w-4/5 mx-auto mt-12 mb-24'>
            <h2 className='text-3xl font-bold text-center mb-12'>All Volunteer Need Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    posts.map(post => <PostCard key={post._id}
                        post={post}>
                    </PostCard>)
                }
            </div>
        </div>
    );
};

export default AllPosts;