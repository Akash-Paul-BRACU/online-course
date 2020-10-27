import React, { useState } from 'react';
import '../Course/Course.css'
const Course = (props) => {
    const { picture, course, name, price, details, phone, email } = props.course;
    const [description, setDescription] = useState([]);
    const [contact, setContact] = useState([]);

    const courseStyle = {
        border: '5px solid cyan',
        margin: '10px',
        padding: '10px',
        width: '600px',
        height: '1000px',
        float: 'left',
    }

    const setDetails = () => setDescription(details);
    const setInfo = () => setContact([phone, email]);
    return (
        <div className="courseDesign" style={courseStyle}>
                
                    <img style={{width:'500px'}} src={picture} alt="" />
                
                
                    <h1>Courses:{course}</h1>
                    <h3>Instructor:{name}</h3>
                    <h4>Instructor Contact:{contact}</h4>
                    <h4>Price:${price}</h4>
                    <h4>Course Details:{description}</h4>

                    <button onClick={setDetails}>Course Details</button>
                    <button onClick={() => props.handleAddProduct(props.course)}>Add Course</button>
                    <button onClick={setInfo}>Instructor Info</button>
                
            </div>
    );
};

export default Course;