import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { Registrar } from "./Registrar"
import { Listar } from "./Listar"
import { Filtrado } from "./Filtrado"
import Logo from "./imagenes/Logo.PNG"

export const MenuOperario = (props) => {

  const [reg, setReg] = useState("");
  const [lis, setLis] = useState("");
  const [fil, setFil] = useState("");
 
  

  function cerrarSesion(){
    document.getElementById("caja_menu").style.display = "none";
    document.getElementById("form_login").style.display = "block";
    document.getElementById("txtusu").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("txtusu").focus();
  }


  function op_registrar(){
    setReg("1");
    setLis("0");
    setFil("0");
  }


  function op_listar(){
    setReg("0");
    setLis("1");
    setFil("0");
  }
  function op_filtro(){
    setReg("0");
    setLis("0");
    setFil("1");

  }



  return (
    
    <>
    <div id="caja_menu" style={{textAlign:"left"}}>
    <nav className="navbar navbar-expand-lg navbar-light fluid" style={{backgroundColor:'#fff4cc'}}>
      <div className="container-fluid">

        <img></img>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className='container-fluid' >
              <div className='row' >
                <div className='col-1' style={{paddingLeft:10}} >
                <img src={Logo} width="50" height="60" ></img>
                </div>
                <div className='col-2' style={{paddingLeft:10}}>
                <NavLink to="" className="nav-link  h5  text-center" style={{color:'gray'}} onClick={ op_registrar } >Registrar</NavLink>
                </div>
                <div className='col-2' style={{paddingLeft:20}}>
                <NavLink to="" className="nav-link  h5  text-center" style={{color:'gray'}} onClick={ op_listar} >Listar</NavLink>
                </div>
                <div className='col-2' >
                <NavLink to="" className="nav-link  h5  text-center" style={{color:'gray'}} onClick={ op_filtro } >Filtros</NavLink>
                </div>
              </div>
            </div>
            <div className='container-fluid '  >
              <div className='row align-items-end"' >
                <div className='col-5' >
                <NavLink to="" className="nav-link  h5  text-center" style={{color:'gray'}}>Usuario : { props.usu.toUpperCase() }</NavLink>  
                </div>
                <div className='col-4' >
                <NavLink to="" className="nav-link  h5  text-center" style={{color:'gray'}}>Perfil :Operario </NavLink>
                </div>
                <div className='col-3' >
                <a className="nav-link  h5  text-center"  style={{color:"gray"}}  href=" "  onClick={ cerrarSesion } >LogOut</a>                
                </div>
              </div>
            </div>
        </div>
      </div>
    </nav>
    <div className="fixed-bottom" style={{background:'gray'}}>
      <footer style={{textAlign:"center"}} > Desarrollado por : christian Carvallo</footer>
    </div>
  </div>

  { reg === "1" && <Registrar/> }
  { lis === "1" && <Listar/>}
  { fil === "1" && <Filtrado/> }

</>
  )
}
