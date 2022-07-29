import React from 'react'
import { useState } from 'react';
import{MenuJefe} from './MenuJefe'
import{MenuOperario} from './MenuOperario'


export const Login = () => {


  const [esJefe, setEsJefe] = useState("false");              
  const [esOperario, setEsOperario] = useState("false");     
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");
  const [cargo, setCar] = useState("");

  function iniciarSesion(e){                                 
    e.preventDefault();                                                
    var txtusu = document.getElementById("txtusu").value;                 
    var txtpas = document.getElementById("txtpas").value;  
    var txtpas = document.getElementById("txtpas").value;               
             
    if(txtusu.length===0 || txtpas.length===0){                         
      alert("Complete Los Datos Faltantes!!");
    }else{                                                                
      if(usu === "JPEREZ" && pas==="123456" && cargo === "jefe"){                            
        setEsJefe("true");                           
        document.getElementById("form_login").style.display = "none";   
                     
      }else{
        if(usu === "MSOTO" && pas==="654321"&& cargo === "operario"){                            
          setEsOperario("true");                                           
          document.getElementById("form_login").style.display = "none";   
        }else{ 
          alert("Error en el ingreso de las credenciales")
          setEsJefe("false");                                             
          setEsOperario("false");                                         
          document.getElementById("txtusu").value = "";             
          document.getElementById("txtpas").value = ""; 
          document.getElementById("cargo").value = "";
        }
      }
    }
  }

  return (
    

      <div className="container "  >  
        <div className="container" id='form_login'style={{ marginTop:200, padding:20}}>
          <div className="row" id="row-1">
                <div className="col-4" >
                </div>
                <div className="col-4"  >
                    <h1 style={{color:"blue", textalign:"center"}}>INICIO DE SESION</h1>
                </div>
                <div className="col-4" >
                </div>

          </div>

          <div className="row" id="row-2" style={{marginTop:30}}>
              <div className="col-2" >
              </div>
              <div className="col-2">
                <label htmlFor="txtusu"><strong>Login</strong></label>
              </div>
              <div className="col-6" >
              <input type="text" id="txtusu" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setUsu(e.target.value) }  required/>
              </div>
              <div className="col-2" >
              </div>
          </div>
          <div className="row" id="row-3" style={{marginTop:20}}>
              <div className="col-2" >
              </div>
              <div className="col-2" >
              <label htmlFor="txtusu"><strong>Password</strong></label>
              </div>
              <div className="col-6" >
              <input type="password" id="txtpas" style={{textAlign:"center"}} className="form-control"  onChange={ (e)=>setPas(e.target.value) }  required />
              </div>
              <div className="col-2" >
              </div>
          </div>

          <div className="row" id="row-4" style={{marginTop:20}}>
              <div className="col-2" >
              </div>
              <div className="col-2" >
              <label htmlFor="txtusu"><strong>PERFIL</strong></label>
              </div>
              <div className="col-6" >
              <select className="form-control form-control-lg" id='cargo'  onChange={ (e)=>setCar(e.target.value) }  required >
                <option value={"jefe"}>JEFE</option>
                <option value={"operario"}>OPERARIO</option>
              </select>
              </div>
              <div className="col-2" >
              </div>
          </div>
          <div className="row" id="row-5" style={{marginTop:20}}>
              <div className="col-4" >
              </div>
              <div className="col-4" >
              <input type="submit"  className="btn btn-primary" value="Registrar" onClick={ iniciarSesion } />
              </div>
              <div className="col-4" >
              </div>
          </div>
        </div>
        { esJefe === "true" && <MenuJefe usu={usu}  /> }
        { esOperario === "true" && <MenuOperario usu={usu}/> }  
      </div>
  )
}
