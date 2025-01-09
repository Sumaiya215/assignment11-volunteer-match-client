
import { useContext, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const VolunteersNeedNow = () => {
    const axiosPublic = useAxiosPublic();
    const [posts, setPosts] = useState([]);
    const {loading} = useContext(AuthContext);

    useEffect(() => {
        fetchAllPosts();
    }, [])

    const fetchAllPosts = async () => {
        const { data } = await axiosPublic.get('/few-posts')
        setPosts(data)
    }
    console.log(posts);

    if(loading) return 
    <progress className="progress progress-success w-56 duration-1000" value="40" max="100">
    </progress>
    return (
        <div className="w-4/5 mx-auto mt-20 mb-12 ">
            <h3 className="text-3xl text-center font-bold mb-6">Volunteers Need Now</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    posts.map(post => <PostCard key={post._id}
                        post={post}>
                    </PostCard>)
                }
            </div>
            <div className="mt-12 text-center">
                <Link to='/posts'>
                    <button className="btn btn-wide bg-blue-700 
                    text-base text-white font-bold">See All</button>
                </Link>
            </div>

            
        </div>
    );
};

export default VolunteersNeedNow;