import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RequestPost = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [post, setPost] = useState({});
    const [status, setStatus] = useState('requested')
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        fetchPostData();
    }, [id])

    const fetchPostData = async () => {
        const { data } = await axiosSecure .get(`/add-request/${id}`)
        setPost(data)
    }

    console.log(post);
    const { _id, photo, title, category, location, number,
        deadline, description, name, email } = post || {}

        const handleRequest = async e =>{
            e.preventDefault();
            const form = e.target;
            const suggestion = form.suggestion.value;
            const username = user.displayName;
            const userEmail = user.email;
            
            const postId = _id;

            const volunteerData = {
                photo, title, postId, category, location, number, deadline, description,
                name,email, username, userEmail,  suggestion, status 
            }

            try{
                const {data} = await axiosSecure.post(`/add-request`, volunteerData)
                console.log(data)
                toast.success('request added successfully');
                navigate('/my-posts')

            }catch(err){
                console.log(err)
            }
        }

    return (
        <div className='w-3/4 mx-auto mt-12 lg:w-1/2'>
            <Helmet>
                <title>Be a Volunteer | Volunteer Match</title>
            </Helmet>
            <div className='card bg-base-100 w-full  shrink-0 shadow-2xl mb-20 pb-26'>
                <h2 className='text-3xl text-center mt-6 font-bold'>Be a Volunteer Post</h2>
                <form  onSubmit={handleRequest} className='card-body'>
                    {/* 1st row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Thumbnail</span>
                            </label>
                            <input type="url" defaultValue={photo} name="photo" placeholder='image URL' className="input  input-bordered" readOnly />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Post Title</span>
                            </label>
                            <input type="text" defaultValue={title} name="title" placeholder='post title' className="input input-bordered" readOnly />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Category</span>
                            </label>
                            <select name="category" defaultValue={category} className='select select-bordered' readOnly >
                                <option value="Healthcare">Healthcare</option>
                                <option value="Education">Education</option>
                                <option value="Social Service">Social Service</option>
                                <option value="Animal Welfare">Animal Welfare</option>
                            </select>
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Location</span>
                            </label>
                            <input type="text" name="location" defaultValue={location} placeholder='location' className="input input-bordered" readOnly />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>No of Volunteers Needed</span>
                            </label>
                            <input type="number" name="number" defaultValue={number} placeholder='no of volunteers' className="input  input-bordered" readOnly />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Deadline</span>
                            </label>
                            <DatePicker
                                className='border py-2 px-12 rounded-md'
                                selected={startDate}
                               readOnly>
                            </DatePicker>
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className='form-control '>
                        <label className="label">
                            <span className='label-text text-base font-semibold'>Description</span>
                        </label>
                        <textarea name='description' defaultValue={description} placeholder='description'
                            className='textarea textarea-bordered' readOnly></textarea>
                    </div>
                    {/* 5th row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Organizer Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={name} placeholder='username' className="input  input-bordered" readOnly />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Organizer Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={email} placeholder='email' className="input input-bordered" readOnly />
                        </div>
                    </div>
                    {/* 6th row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Volunteer Name</span>
                            </label>
                            <input type="text" name="username" defaultValue={user.displayName} placeholder='username' className="input  input-bordered" readOnly />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Volunteer Email</span>
                            </label>
                            <input type="email" name="userEmail" defaultValue={user.email} placeholder='email' className="input input-bordered" readOnly />
                        </div>
                    </div>
                    {/* 7th row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Suggestion</span>
                            </label>
                            <textarea name='suggestion'  placeholder='suggestion'
                            className='textarea textarea-bordered' required></textarea>
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold lg:mt-4'>Status</span>
                            </label>
                            <input type="text"  value={status}  className="input input-bordered" readOnly />
                        </div>
                    </div>

                    {/* request button */}
                    <div className='form-control mt-6'>
                        <button  className='btn btn-primary text-base font-semibold'>Request</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default RequestPost;