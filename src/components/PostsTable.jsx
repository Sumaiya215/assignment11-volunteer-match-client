import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


const PostsTable = ({ post, index , posts, setPosts}) => {
    const { _id, title, category, number } = post || '';

    const handleDelete = async id => {
        try {
            await axios.delete(`http://localhost:3000/post/${id}`)
           toast.success('Post Deleted Successfully')

            //updating state
           const  newPosts = posts.filter(post => post._id !== _id)
            setPosts(newPosts);

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    const confirmDelete = id =>{
        toast(t =>(
            <div className="flex items-center gap-2">
                
                    <p>Are you sure?</p>
                
                <div>
                    <button className="btn bg-red-500 text-white px-3 py-1 rounded-md"
                    onClick={() =>{
                        toast.dismiss(t.id) 
                        handleDelete(id)
                    }}>
                        Yes
                    </button>
                    <button className="btn bg-green-500 text-white px-3 py-1 rounded-md"
                    onClick={() => toast.dismiss(t.id)}>
                        Cancel
                    </button>
                </div>
            </div>
        ))
    }

    return (
        <div className="w-11/12 mx-auto mt-6 mb-12">
            <div className="overflow-x-auto">
                <table className="table table-sm">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Volunteers needed</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{index + 1}</th>
                            <td>{title}</td>
                            <td>{category}</td>
                            <td>{number}</td>
                            <td>
                                <div className="flex gap-3">
                                    <Link to={`/update-post/${_id}`}>
                                        <button className="btn btn-sm btn-primary">
                                            Update
                                        </button>
                                    </Link>

                                    <button onClick={() => confirmDelete(_id)} className="btn btn-sm btn-primary">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PostsTable;