import React, { useContext, useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';

const AllPosts = () => {
    const axiosPublic = useAxiosPublic();
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const {loading} = useContext(AuthContext);

    useEffect(() => {
        const fetchAllPosts = async () => {
            const { data } = await axiosPublic.get(`/posts?search=${search}`)
            setPosts(data)
        }
        fetchAllPosts();
    }, [search])

    
    console.log(posts);

    if(loading) return 
    <progress className="progress progress-success w-56 " value="40" max="100">
    </progress>

    return (
        <div className='w-4/5 mx-auto mt-12 mb-24'>
            <Helmet>
                <title>All Volunteer Need Posts | Volunteer Match</title>
            </Helmet>
            <div className='flex justify-between items-center'>
                <h2 className='text-3xl font-bold  mb-12'>All Volunteer Need Posts</h2>
                <label className="input input-bordered flex items-center gap-2 mb-6">
                    <input type="text" name='search' value={search} className="grow"
                   onChange= {(e) => setSearch(e.target.value)} 
                    placeholder="Enter post title" />
                    
                   <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
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