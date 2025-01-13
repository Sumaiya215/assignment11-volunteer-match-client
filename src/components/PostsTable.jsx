
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const PostsTable = ({ post, index , posts, setPosts}) => {
    const { _id, title, category, number } = post || '';
        const axiosSecure = useAxiosSecure();
    
        const handleDelete = id => {
           
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axiosSecure.delete(`/post/${id}`)
    
                            if (res.data.deletedCount) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: `${title} has been deleted.`,
                                    icon: "success"
                              });
    
                                
                                const newPosts = posts.filter(post => post._id !== _id);
                                setPosts(newPosts);
    
                            }
                        }
            
                })
           
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

                                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-primary">
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