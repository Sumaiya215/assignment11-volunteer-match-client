import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import PostsTable from '../components/PostsTable';

const MyPosts = () => {
    const [posts, setPosts] = useState([]);
    const [requests, setRequests] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const { data } = await axios.get(`http://localhost:3000/posts/${user?.email}`)
            setPosts(data)
        }
        fetchAllPosts();
    }, [user?.email])

    console.log(posts);

    // for post requests
    // useEffect(() => {
    //     const fetchAllRequests = async () => {
    //         const { data } = await axios.get(`http://localhost:3000/add-request/${user?.email}`)
    //         setRequests(data)
    //     }
    //     fetchAllRequests();
    // }, [user?.email])

    // console.log(requests);

    return (
        <div className='w-11/12 mx-auto mt-12 mb-22'>
            <div className='flex justify-between items-center'>
            <section className='mb-12'>
                <h3 className='text-2xl font-bold text-center mb-6'>
                    My Volunteer Need Posts:{posts.length}</h3>
                    {
                        posts.map((post,index) =><PostsTable key={post._id}
                       index={index} post={post} posts={posts} setPosts = {setPosts}>
                        </PostsTable>)
                    }

            </section>
            <section className='mb-12'>
                <h3 className='text-2xl font-bold text-center mb-6'>
                    My Volunteer Request Posts: {requests.length}</h3>
            </section>
            </div>
        </div>
    );
};

export default MyPosts;