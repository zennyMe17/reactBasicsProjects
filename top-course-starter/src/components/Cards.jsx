import React, { useState } from 'react'
import Card from "./Card";


const Cards = (props) => {
    console.log("Printing Category selected");
    console.log(props.category);
    

    
    const [likedCourses, setLikedCourses] = useState([]);
    //   let allCourse = [];

    // It Returns list of all courses received from the api Response

    // const getCourses = () => {
    //     Object.values(props.courses).forEach((courseCategory) => {
    //         courseCategory.forEach((course) => {
    //             allCourse.push(course);
    //         });
    //     });
    //     return allCourse;
    // };

    function getCourses() {
         //if (props.category === "All") {
            let allCourses = [];
            Object.values(props.courses).forEach((array) => {
                array.forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
         //}
        // else
        // {
        //     return props.courses[category];
        // }
    }

    //   console.log(allCourse);
    return (
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course)=>{
                    return <Card key={course.id}
                     course = {course}
                      likedCourses= {likedCourses}
                      setLikedCourses = {setLikedCourses}/>
                } )
            }
        </div>
    );
};

export default Cards;
