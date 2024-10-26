import React from "react";
import Card from "./Card"
const Cards = (props)=>{

    let allCourses = [];

    //returns you a list of all courses recieved from the api response
    const getCourses = ()=>{
        Object.values(props.courses).forEach((courseCategory)=>{
            courseCategory.forEach((course)=>{
                allCourses.push(course);
            })
        })
        return allCourses;
    }

    return(
        <div>{!props.courses ? (
            <div>No Data Found</div>
        ) : (
            getCourses().map( (course)=>{
                     return <Card key={course.id} course={course}/>
                 } )
        )}          
        </div>
    )
}
export default Cards;