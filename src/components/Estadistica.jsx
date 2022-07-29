import React, { useState } from 'react'



export const Estadistica = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registros");
    if(datos){
    return JSON.parse(datos);
    }else{
    return [];
    }
    }
    const [registros] = useState(obtenerRegistros());
    function miEstadistica(opcion){
    var i = 0;
    var resultado = 0;
    var miObjeto;
    var canFem = 0;
    var canMas = 0;
    
    if(opcion === 1){
      for(i=0; i<registros.length; i++){
        miObjeto = registros[i];
        if(miObjeto.sexCli ==='Masculino'){
          canMas =  canMas + 1
        }else{
          canFem = canFem + 1
        }
      }
      resultado = [canMas,canFem];


    }else if(opcion === 2){
    for(i=0; i<registros.length; i++){
    miObjeto = registros[i];
    resultado += parseInt(miObjeto.edaCli);
    } 
    }else if(opcion === 3){
    for(i=0; i<registros.length; i++){
    miObjeto = registros[i];
    resultado += parseInt(miObjeto.canCom);
    }
    resultado = (resultado/registros.length).toFixed(2);
    }
    return resultado;
  }
  return (
  <div className="bg-light" style={{marginTop:20, padding:20}}>
  <div className="h3">
  Resumen Estadístico
  </div>
  <div className="table-responsive">
  { registros.length > 0 ?
  <div className="row row-cols-1 row-cols-md-3 g-2" style={{padding:5, width:"90%", margin:"0 auto"}}>
  <div className="col">
  <div className="card">
  <div className="card-body">
  <h5 className="card-title">Cantidad por Sexo</h5>
  <p className="card-text"> Masculino :{ miEstadistica(1)[0]}</p>
  <p className="card-text"> Femenino :{ miEstadistica(1)[1]}</p>

  </div>
  </div>
  </div>
  <div className="col">
  <div className="card">
  <div className="card-body">
  <h5 className="card-title">Suma de edades</h5>
  <p className="card-text"> { miEstadistica(2) } </p>
  </div>
  </div>
  </div>
  <div className="col">
  <div className="card">
  <div className="card-body">
  <h5 className="card-title">Promedio de cantidades compradas </h5>
  <p className="card-text"> { miEstadistica(3) } </p>
  </div>
  </div>
  </div>
  </div>
  : <p className="h5" style={{color:"red"}}>"No Hay Registros Para La Estadistica!!"</p>
  }
  </div>
  </div>
  )
 }
 