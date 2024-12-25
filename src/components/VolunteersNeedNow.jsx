import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const VolunteersNeedNow = () => {
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
        <div className="max-w-6xl mx-auto mt-20 mb-12">
            <h3 className="text-3xl text-center font-bold mb-6">Volunteers Need Now: {posts.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    posts.map(post => <PostCard key={post._id}
                        post={post}>
                    </PostCard>)
                }
            </div>
            <div className="mt-12 text-center">
                <button className="btn btn-wide bg-blue-700 
                text-base text-white font-bold">See All</button>
            </div>
        </div>
    );
};

export default VolunteersNeedNow;