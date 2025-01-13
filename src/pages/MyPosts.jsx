
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import PostsTable from '../components/PostsTable';
import RequestsTable from '../components/RequestsTable';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyPosts = () => {
    const axiosSecure = useAxiosSecure();
    const [posts, setPosts] = useState([]);
    const [requests, setRequests] = useState([]);
    const {user, loading} = useContext(AuthContext);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const { data } = await axiosSecure.get(`/posts/${user?.email}`)
            setPosts(data)
        }
        fetchAllPosts();
    }, [user?.email])

    // console.log(posts);

    
    useEffect(() => {
        const fetchAllRequests = async () => {
            const { data } = await axiosSecure.get(`/add-requests/${user?.email}`)
            setRequests(data)
        }
        fetchAllRequests();
    }, [user?.email])

    // console.log(requests);

    if(loading) return 
    <progress className="progress progress-success w-56 " value="40" max="100">
    </progress>

    return (
        <div className='w-11/12 mx-auto mt-12 mb-22'>
            <Helmet>
                <title>Manage My Posts | Volunteer Match </title>
            </Helmet>
            <div className='flex justify-around flex-col lg:flex-row items-center'>
            <section className='mb-12'>
                <h3 className='text-xl font-bold text-center mb-6'>
                    My Volunteer Need Posts </h3>
                    {
                       posts.length?(
                        posts.map((post,index) =><PostsTable key={post._id}
                       index={index} post={post} posts={posts} setPosts = {setPosts}>
                        </PostsTable>)) : (<p className='text-red-500 font-semibold'>
                        Posts are not Added</p> )
                    }

            </section>
            <section className='mb-12'>
                <h3 className='text-xl font-bold text-center mb-6'>
                    My Volunteer Request Posts </h3>
                    {
                        requests.length?(
                        requests.map((request,index) =><RequestsTable key={request._id}
                        index={index} request={request} requests={requests} setRequests={setRequests}>

                        </RequestsTable>)) : (<p className='text-red-500 font-semibold'>
                        Requests are not added</p>)
                    }
            </section>
            </div>
        </div>
    );
};

export default MyPosts;