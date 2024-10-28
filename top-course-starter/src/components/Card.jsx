import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify'; 

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        console.log("Inside clickHandler"); 
        console.log("Current liked courses:", likedCourses); 

        if (likedCourses.includes(course.id)) {
            setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Liked Removed");
        } else {
            setLikedCourses((prev) => [...prev, course.id]);
            toast.success("Liked Successfully");
        }
    }

    console.log("Rendering card for:", course.title); 

    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt="Course Image" />
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={() => { console.log("Button clicked!"); clickHandler(); }}>
                        {
                            !likedCourses.includes(course.id) 
                                ? <FcLikePlaceholder fontSize="1.75rem" /> 
                                : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>
            <div className="p-4">
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description}</p>
            </div>
        </div>
    );
}

export default Card;
