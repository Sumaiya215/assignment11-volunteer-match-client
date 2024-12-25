import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const PostDetails = () => {
    const[post, setPost] = useState({});
    const {id} = useParams();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() =>{
        fetchPostData();
    },[id])

    const fetchPostData = async () =>{
        const {data} = await axios.get(`http://localhost:3000/post/${id}`)
        setPost(data)
        // setStartDate(new Date(data.deadline))
    }
    console.log(post);
    const {photo, title, category, location, number,
        deadline, description, name, email  } = post 
        
    return (
        <div className="w-3/4 mx-auto mt-12 mb-20">
            <div className="card flew-col lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        className="p-8 w-[460px] "
                        alt={title} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="text-sm font-semibold">Category: {category}</p>
                    <p className="text-sm font-semibold">Location: {location}</p>
                    <p className="text-sm font-semibold">Volunteers Needed: {number}</p>
                    {
                        deadline &&  <p className="text-sm font-semibold">Deadline: {format(new Date(deadline),'P')}</p>
                    }
                    <p className="text-sm font-semibold">Description: {description}</p>
                    <p className="text-sm font-semibold">Organizer Name: {name}</p>
                    <p className="text-sm font-semibold">Organizer Email: {email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-primary mt-4">Be a Volunteer</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;