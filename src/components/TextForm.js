import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("UpperCase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case","success");
    }
    const handleExtraSpaces=()=>{
        // console.log("UpperCase was clicked");
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra Spaces","success");
  
        
    }
   
    const handleCopy=()=>{
        // console.log("UpperCase was clicked");
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
        
    }
    const handle=()=>{
        // console.log("UpperCase was clicked");
        let newText=(" ");
        setText(newText);
        props.showAlert("Cleared","success");

    }
    const handleLowClick=()=>{
        // console.log("LowCase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case","success");

    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text,setText]=useState('Enter Text Here');
    // text="bjdnskndf"; //wrong way to chamnge the state 
    // setText=("nvdknvkjn");//correct way to change the state 
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}} >
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} rows="8"></textarea>
</div>
<button className="btn btn-outline-success mx-2" onClick={handleUpClick}>Convert to UpperCase </button>
<button className="btn btn-outline-info mx-2" onClick={handleLowClick}>Convert to LowerCase </button>
<button className="btn btn-outline-danger mx-2" onClick={handle}>Clear </button>
<button className="btn btn-outline-primary mx-2" onClick={handleCopy}>Copy to Clipboard </button>
<button className="btn btn-outline-warning mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
        <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} minutes read</p>
    <h3>preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
