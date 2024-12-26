import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AuthContext } from '../providers/AuthProvider';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = async e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const category = form.category.value;
        const location = form.location.value;
        const number = parseInt(form.number.value);
        const deadline = startDate;
        const description = form.description.value;
        const name = user.displayName;
        const email = user.email;

        console.log(photo, title, category, location, number,
         deadline, description, name, email);

         const newPost = {photo, title, category, location, number,
            deadline, description, name, email};

         try{
            await axios.post(`http://localhost:3000/add-post`, newPost)
            toast.success('post added successfully')
            navigate('/my-posts')
         } catch(error){
            console.log(error)
            toast.error(error.message)
         } 


    }

    return (
        <div className='w-1/2 mx-auto mt-12 '>
            <div className='card bg-base-100 w-full  shrink-0 shadow-2xl mb-20 pb-26'>
                <h2 className='text-3xl text-center mt-4 font-bold'>Add Posts</h2>
                <form onSubmit={handleSubmit} className='card-body'>
                    {/* 1st row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Thumbnail</span>
                            </label>
                            <input type="url" name="photo" placeholder='image URL' className="input  input-bordered" required />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Post Title</span>
                            </label>
                            <input type="text" name="title" placeholder='post title' className="input input-bordered" required />
                        </div>
                    </div>
                    {/* 2nd row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Category</span>
                            </label>
                            <select name="category" className='select select-bordered' required >
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
                            <input type="text" name="location" placeholder='location' className="input input-bordered" required />
                        </div>
                    </div>
                    {/* 3rd row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>No of Volunteers Needed</span>
                            </label>
                            <input type="number" name="number" placeholder='no of volunteers' className="input  input-bordered" required />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Deadline</span>
                            </label>
                            <DatePicker
                                className='border py-2 px-12 rounded-md'
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}>
                            </DatePicker>
                        </div>
                    </div>
                    {/* 4th row */}
                    <div className='form-control '>
                        <label className="label">
                            <span className='label-text text-base font-semibold'>Description</span>
                        </label>
                        <textarea name='description' placeholder='description'
                            className='textarea textarea-bordered' required></textarea>
                    </div>
                    {/* 5th row */}
                    <div className='flex flex-col lg:flex-row gap-6'>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Organizer Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user.displayName} placeholder='username' className="input  input-bordered" readOnly />
                        </div>
                        <div className='form-control flex-1'>
                            <label className="label">
                                <span className='label-text text-base font-semibold'>Organizer Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user.email} placeholder='email' className="input input-bordered" readOnly />
                        </div>
                    </div>
                    {/* post button */}
                    <div className='form-control mt-6'>
                        <button className='btn btn-primary text-base font-semibold'>Add Post</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddPost;