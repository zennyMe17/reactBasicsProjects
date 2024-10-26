import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';

const Card = ({course})=>{
    return(
        <div>
             <div>
                <img src={course.img.url}></img>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem" />
                    </button>
                </div>

            </div> 
            <div>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export default Card