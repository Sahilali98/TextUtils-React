import React from 'react'
import { useState } from 'react';

export default function TextForms(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
   
    let newText=text.toUpperCase()
    setText(newText)
    props.showAlert("Upper Case Was Clicked","success")
  }

  const handleLoClick=()=>{
    let newText=text.toLowerCase()
    setText(newText)
  }

  const handleClearText=()=>{
    let newText=""
    setText(newText)
  }
  const handleCopy=()=>{
    let text=document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
  }
  const handleOnChange= (event)=>{
    // console.log("On Change")
    setText(event.target.value)
  }

  const handleOnClikCleanArea =()=>{
    // console.log("clean area")
    setText("")
  }
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
       <div className='container'>
   <h1 className={`container text-${props.textMode}`}>
    {props.heading}
   </h1>
<div className="mb-3" color='black'>

  <textarea className={`form-control text-${props.textMode}`} style={{background: props.mode==='light'?'white':'#040a36'}} id="myBox" rows="8" value={text} onChange={handleOnChange} onClick={handleOnClikCleanArea}  ></textarea>
</div>
<button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
{/* <b> </b> also use for space in between tag but it is not good practice also it is use for bold */}
<button type="button" className="btn btn-secondary mx-2" onClick={handleLoClick}>LowerCase</button>
<button type="button" className="btn btn-secondary mx-2" onClick={handleCopy}>Copy</button>
<button type="button" className="btn btn-secondary mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
<button type="button" className="btn btn-secondary mx-2" onClick={handleClearText}>Clear Text</button>
   </div>
   <div className={`container my-2 text-${props.textMode}`}>
    <h1>Your text sumary</h1>
    <p>{text.split(" ").length-1} words and {text.length} character</p>
    <p>{0.008*text.split(" ").length} Human read in Minutes</p>
    <h2>Preview</h2>
    <p>{text===""?'Enter text to preview':text}</p>
   </div>
    </>

  )
}
