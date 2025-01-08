import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import PostCard from "./PostCard";
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from "../providers/AuthProvider";

const TopCategories = () => {
    const [posts, setPosts] = useState([]);
   const {loading} = useContext(AuthContext);

    useEffect(() => {
        fetchAllPosts();
    }, [])

    const fetchAllPosts = async () => {
        const { data } = await axios.get(`http://localhost:3000/posts`)
        setPosts(data)
    }

    console.log(posts);

    if(loading) return 
    <progress className="progress progress-success w-56 " value="40" max="100">
    </progress>

    return (
        <Tabs>
            <div className="w-4/5 mx-auto mt-12 mb-16  ">
                <h2 className="text-3xl text-center font-bold mb-6">
                Top  Volunteer Categories</h2>

                <div className="flex justify-center items-center mb-8">
                    <TabList>
                        <Tab>Healthcare</Tab>
                        <Tab>Education</Tab>
                        <Tab>Social Service</Tab>
                        <Tab>Animal Welfare</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {
                            posts
                            .filter(post => post.category === 'Healthcare')
                            .map(post => <PostCard key={post._id}
                                post={post}>
                            </PostCard>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {
                            posts
                            .filter(post => post.category === 'Education')
                            .map(post => <PostCard key={post._id}
                                post={post}>
                            </PostCard>)
                    }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {
                            posts
                            .filter(post => post.category === 'Social Service')
                            .map(post => <PostCard key={post._id}
                                post={post}>
                            </PostCard>)
                    }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {
                            posts
                            .filter(post => post.category === 'Animal Welfare')
                            .map(post => <PostCard key={post._id}
                                post={post}>
                            </PostCard>)
                    }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    );
};

export default TopCategories;