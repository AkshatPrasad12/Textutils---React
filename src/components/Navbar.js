import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="#" >{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li> */}
      
    </ul>
    {/* <div className="custom-control custom-switch mr-4">
      <input type="checkbox" className="custom-control-input" onClick={props.colormode} id="customSwitch1" />
      <label className="custom-control-label" htmlFor="customSwitch1">Enable Blue Mode</label>
    </div> */}
    <div className={`custom-control custom-switch text-${props.mode==='light'?'dark':'light'} mr-4`}>
  <input type="checkbox" onClick={props.togglemode} className="custom-control-input" id="customSwitch1" />
  <label className="custom-control-label" htmlFor="customSwitch1">Enable Dark Mode</label>
    </div>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}


Navbar.propTypes={
    title:PropTypes.string,
    aboutText:PropTypes.string
}

Navbar.defaultProps={
    title:'Akshat',
    aboutText:'About me'
}