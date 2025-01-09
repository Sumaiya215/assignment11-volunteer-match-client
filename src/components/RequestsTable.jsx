import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";


const RequestsTable = ({ request, index, requests, setRequests }) => {
    const axiosSecure = useAxiosSecure();
    const { _id, title, userEmail, status } = request || '';

    const handleDelete = id => {
        // console.log(id);

        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/newRequest/${id}`)

                if (res.data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Request has been deleted.",
                        icon: "success"
                    });

                    // updating state
                    const newRequests = requests.filter(request => request._id !== _id);
                    setRequests(newRequests);
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
                            <th>Email</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{index + 1}</th>
                            <td>{title}</td>
                            <td>{userEmail}</td>
                            <td>{status}</td>
                            <td>
                                <div className="flex gap-3">

                                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-primary">
                                        Cancel
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

export default RequestsTable;