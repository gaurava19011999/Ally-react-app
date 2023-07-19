import React ,{useState} from 'react'

export default function Form(props) {
  
  const click = ()=>{

    let newText = text.toUpperCase();
    setText(newText);
  }  
  const clickCopy=()=>{
    navigator.clipboard.writeText(text);
  }
  const clickClear=()=>{
    setText("");
  }

  const data = (event)=>{
    console.log("data")
    setText(event.target.value);
  }
  const [text,setText] = useState("Enter Text Here")  
  return (
    <>
    <div className=" mx-0" style={{backgroundColor:props.mode==='light'?'white':'#00000000', color:props.mode==='light'?'black':'white'}}>
    <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter YOur Text Here</label>
    <textarea className="form-control" value={text} onChange={data} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#00000000', color:props.mode==='light'?'black':'white'}}></textarea>
    <button className='mt-2 mx-2' onClick={click}>UpperCase</button>
    <button className='mt-2 mx-2' onClick={clickClear}>Clear</button>
    <button className='mt-2 mx-2' onClick={clickCopy}>Copy</button>
    </div>
    <div className="container mw-100 h-100" style={{backgroundColor:props.mode==='light'?'white':'#00000000', color:props.mode==='light'?'black':'white'}}>
        <p>{text.split(' ').length} Words and {text.length} Characters.</p>
    </div>
    </>
  )
}
