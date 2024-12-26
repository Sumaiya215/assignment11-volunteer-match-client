import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

const VolunteersNeedNow = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts();
    }, [])

    const fetchAllPosts = async () => {
        const { data } = await axios.get(`http://localhost:3000/few-posts`)
        setPosts(data)
    }

    console.log(posts);
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