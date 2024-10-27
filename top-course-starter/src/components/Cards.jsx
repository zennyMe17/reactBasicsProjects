import React from "react";
import Card from "./Card"
const Cards = (props)=>{
    let courses = props.courses;

    

    //returns you a list of all courses recieved from the api response
     const getCourses = ()=>{
        let allCourses = [];
         Object.values(courses).forEach((courseCategory)=>{
             courseCategory.forEach((course)=>{
                 allCourses.push(course);
             })
         })
         return allCourses;
     }

    return(
        <div  className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map( (course)=>{
                    return <Card key={course.id} course = {course}/>
                } )
            }
        </div>
    )
}
export default Cards;