import React,{ useState }from "react";
import {useColors} from "./ColorProvider";
export default function AddColorForm(){
    const [title,setTitle]=useState("");
    const [color,setColor]=useState("#000000");
    const {addColor}=useColors();
    const submit=e=>{
        e.preventDefault();
        addColor(title,color);
        setTitle("");
        setColor("");
    };
    return (
        <form onSubmit={submit} >
            <div className="div-form">
            <input value={title} onChange={event=>setTitle(event.target.value)} type="text" placeholder="color title" required/>
            <input id="style1" value={color} onChange={event=>setColor(event.target.value)} type="color" required/>&nbsp;
            <button id="btn">ADD</button>
            </div>
        </form>
    );
}