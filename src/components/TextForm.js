import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=Text.toUpperCase()
        SetText(newText)
        props.showAlerts("Converted to uppercase","primary")
    }
    const handleLoClick=()=>{
        let newText=Text.toLowerCase()
        SetText(newText)
        props.showAlerts("Converted to lowercase","warning")
    }
    const handleCopy=()=>{
        let newText=document.getElementById("myBox")
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlerts("Copied to clipboard","primary")
    }
    const handleSpaces=()=>{
       let newText=Text.split(/[ ]+/)
       SetText(newText.join(" "))
       props.showAlerts("Extra Spaces removed","primary")
    }
    const handleOnChange=(event)=>{
        SetText(event.target.value)
    }
   const [Text, SetText] = useState("")
    return (
        <>  
        <div className="container"  >
        {/* <div className="form-group my-5" > */}
    <h1 className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-danger my-3 mx-2" onClick={handleUpClick}>UPPERCASE</button>
    <button className="btn btn-danger my-3 mx-2" onClick={handleLoClick}>LOWERCASE</button>
    <button className="btn btn-danger my-3 mx-2" onClick={handleCopy}>Copy Text</button>
    <button className="btn btn-danger my-3 mx-2" onClick={handleSpaces}>Remove Extra Spaces</button>
  </div>
  
  {/* </div> */}
  <div className="container" style={{backgroundColor: props.mode==='dark'?'#061247':'white',color: props.mode==='dark'?'white':'black'}}>
    <h2>Txt Summary</h2>
    <p>{Text.split(" ").length} word and {Text.length} Character</p>
    <h2>Time Taken To Read</h2>
    <p>{0.008 * Text.split(" ").length}</p>
    <h3>Preview</h3>
    <h6>{Text.length>0?Text:"Enter Something in the above textbox to Priview it Here"}</h6>
  </div>
  </>

  )
}
