import React, { Component } from 'react';
import './CSS/todo.css';
import { useState } from 'react';


const Form = () => {
    const [FirstName, setFirstName] = useState(''); 
    const [LastName, setLastName] = useState('');
    const [Password, setPassword] = useState('');
    const [InputImage, setInputImage] = useState('');
    const [gender, setGender] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({FirstName,LastName,Password,InputImage,URL,gender});
    }

    // const handler1 = (event) => {
    //     const file = event.target.files[0];
    //     setInputImage(file)
    //     const reader = new FileReader()
    //     const url = URL.createObjectURL(file);
    //     setURL(url);
    //   }
    return (
        <div className="Form">

            <form onSubmit={handleSubmit}>
                <h1>Patients Registration</h1>
                <label>FirstName :</label> 
                <input type="text" 
                value={FirstName} 
                onChange={e=>{
                e.preventDefault();
                setFirstName(e.target.value);
                }} 
                placeholder="FirstName..." /><br />

                <label>LastName :</label> 
                <input type="text" 
                value={LastName} 
                onChange={e=>{
                e.preventDefault();
                setLastName(e.target.value);
                }} 
                placeholder="LastName..." /><br />

                <label>Password :</label> 
                <input type="password" 
                value={Password} 
                onChange={e=>{
                e.preventDefault();
                setPassword(e.target.value);
                }} 
                placeholder="Password..." /><br />

                <label>InputImage :</label> 
                <input type="file" 
                value={InputImage} 
                onChange={e=>{
                setInputImage(e.target.value);
                }} placeholder="Password..." /><br />

                <label>Gender :</label><select 
                onChange={e=>{
                setGender(e.target.value);
                }} defaultValue="Select Gender">
                    <option defaultValue>Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select><br />
               
                <input type="submit"/>

            </form>

        </div>
        
    );
    // }
 }

export default Form;
