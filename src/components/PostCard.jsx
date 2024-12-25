import { format } from "date-fns";

const PostCard = ({ post }) => {
    const { photo, title, category, number, deadline} = post;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={photo}
                        alt={title}
                        className="rounded-xl w-[200px] h-[150px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p className="font-semibold">Category: {category}</p>
                    <p className="font-semibold">No of volunteers needed: {number}</p>
                    <p className="font-semibold">Deadline: {format (new Date(deadline), 'P')}</p>
                    <div className="card-actions mt-4">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;