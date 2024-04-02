import { useState } from 'react'
import './Login.css'

const LoginForm = ()=>{

    const[userInfo, setUserInfo]=useState({
        firstName: "",
        lastName: "",
        email:"",
        password:"",
        image: Blob
    })

    let firstname=document.getElementById('Firstname') 
    let firstnamep=document.getElementById ('firstnamep')
    let lastname=document.getElementById('Lastname') 
    let lastnamep=document.getElementById ('lastnamep')
    let image=document.getElementById('Image')
    let imagep=document.getElementById ('imagep')
    let password=document.getElementById('Password') 
    let passwordp=document.getElementById ('passwordp')
    let email=document.getElementById('Email') 
    let emailp=document.getElementById ('emailp')

const info=[{
    name: userInfo.firstName,
    element: firstname,
    paragraph: firstnamep
},
{
    name: userInfo.lastName,
    element: lastname,
    paragraph: lastnamep
},{
    name: userInfo.image,
    element:image,
    paragraph: imagep
}
, {
    name: userInfo.email,
    element: email,
    paragraph: emailp
}, {
    name: userInfo.password,
    element:password,
    paragraph: passwordp
}]


    const handleSubmit=(e)=>{
        
        e.preventDefault()
        
        for(let i=0; i<info.length; i++){
            if (info[i].name==="" || info[i].name===null ){
            info[i].paragraph.innerText="Field can't be empty"
            info[i].element.style.borderColor="red"
        } else{info[i].paragraph.innerText=""
        info[i].element.style.borderColor="blue"}

        if (info[i].name.length>0 &&  info[i].name.length<3){
            // info[i].element.style.borderStyle="2px red solid"
            // firstname.style.borderColor="red"
            info[i].paragraph.innerText="Field can't be less than 3 characters"
            info[i].element.style.borderColor="red"

            if(info[i].name==="gender"){
                continue
            }
        }  

        }
        
        console.log(userInfo);

        // console.log(userInfo.firstName, userInfo.lastName, userInfo.gender, userInfo.email, userInfo.password);
    }

    const handleInfo=(e)=>{
        const name= e.target.name
        const value= e.target.value
        setUserInfo(
            (prevState)=>({
                ...prevState,
                [name]:value
            })
        )
        

        for(let i=0; i<info.length; i++){
            if (info[i].name.length>0 && info[i].name.length<3 ){
            info[i].paragraph.innerText="Input can't be less than 3 characters"
            info[i].element.style.borderColor="red"
            
        } else if(info[i].name.length===0 || info[i].name.length>=3 ){
            info[i].paragraph.innerText=""
            info[i].element.style.borderColor="blue"}

        if (info[i].name.length>=1 && info[i].name.length<=3 && info[i].name===userInfo.password){


                info[i].paragraph.innerHTML= `<span> Password length: ${info[i].name.length}</span> <br /> <span>Password Strength: weak</span>`
                info[i].paragraph.style.color="red"
            }

        else if (info[i].name.length>3 && info[i].name.length<=7 && info[i].name===userInfo.password){
                info[i].paragraph.innerHTML= `<span> Password length: ${info[i].name.length}</span> <br /> <span>Password Strength: Good</span>`
                info[i].paragraph.style.color="blue"}
        else if(info[i].name.length>7 && info[i].name===userInfo.password){
                info[i].paragraph.innerHTML= `<span> Password length: ${info[i].name.length}</span> <br /> <span>Password Strength: Excellent</span>`
                info[i].paragraph.style.color="Green"
            }


        }
        
        
    }
    return(
        <form onSubmit={handleSubmit}>
            <h2>STUDENT REGISTRATION</h2>
            <div className="form-control">
                <label >First Name<input id="Firstname" name="firstName"
                type="text"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleInfo}
                /></label>
                <br />
                
                <p id="firstnamep"></p>

                <label >Last Name<input id="Lastname" name="lastName"
                type="text"
                placeholder="Last Name"
                value={userInfo.lastName}
                onChange={handleInfo}
                /></label>
        
                
                <p id="lastnamep"></p>
                
                <label>Email <br /><input id="Email" name="email"
                type="email"
                placeholder="eg:name@gmail.com"
                autoComplete="off"
                value={userInfo.email}
                onChange={handleInfo}
                /></label>
                
                <p id="emailp"></p>

                <label>Password<input id="Password" name="password"
                type="password"
                placeholder="*********"
                value={userInfo.password}
                onChange= {handleInfo}
                /></label>
                <p id="passwordp"></p>
                <br />

                <label >Image <br /> <input id='Image' type="file" name='image' accept='image/jpeg, image/png, image/jpg' src="" alt="" /></label>
                <p id="imagep"></p>
                
            </div>
            <br />
            
            <button type="submit" >Submit</button>

        </form>
    )
}



export default LoginForm