import React, {useState} from 'react'

export default function About() {
    const [mystyle, setmystyle] = useState({
        color : 'black',
        backgroundColor:'white'
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle=()=>{
                if(mystyle.color === 'black')
                {
                    setmystyle({
                        color : 'white',
                        backgroundColor:'black'
                    })
                    setBtnText("Enable Light Mode")
                }
                else{
                    setmystyle({
                        color : 'black',
                        backgroundColor:'white'
                    })
                    setBtnText("Enable Dark Mode")
                }
            
        }
    



  return (
    <div className='container'>
        <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" style={mystyle} aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" style={mystyle} data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree" style={mystyle}>
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed"  type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" style={mystyle} data-parent="#accordionExample">
      <div className="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>
<button onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
    </div>
  )
}
