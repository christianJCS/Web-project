import React, { useState, useEffect } from 'react'

export const Registrar = () => {

  const obtenerRegistros = () => {
    var datos = localStorage.getItem("registros");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }

  const [registros, setRegistros] = useState(obtenerRegistros());
  const [nroPedido, setnroPedido] = useState("");
  const [nomPro, setnomPro] = useState("");
  const [codPro, setcodPro] = useState("");
  const [nomCli, setnomCli] = useState("");
  const [apeCli, setapeCli] = useState("");
  const [tipPag, settiPag] = useState("");
  const [sexCli, setsexCli] = useState("");
  const [edaCli, setedaCli] = useState("");
  const [canCom, setcanCom] = useState("");
  const [estCom, setestCom] = useState("");
  const [entCom, setentCom] = useState("");
  const [regCli, setregCli] = useState("");

  const registrarCompra = (e) => {
    e.preventDefault();
    var miObjeto = { nroPedido,nomPro, codPro,nomCli,apeCli,tipPag,sexCli,edaCli,canCom,estCom,entCom,regCli}
    setRegistros([...registros, miObjeto]);
    limpiarFormulario();
  }

  useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros))
  }, [registros] );

  const limpiarFormulario = () => {
    setnroPedido("");
    setnomPro("");
    setcodPro("");
    setnomCli("");
    setapeCli("");
    settiPag("");
    setsexCli("");
    setedaCli("");
    setcanCom("");
    setestCom("");
    setentCom("");
    setregCli("");
    document.getElementById("miFormulario").reset();
  }

  return (


    <div>
    <div className="container" id="titulo">
        <div id="mensajes"></div>
        <h1>Compras de Muebles</h1>
    </div>

        

      <div className="container">
          <div className="row top-buffer " id="row-1" style={{textAlign:"left",marginTop:20 }}>
              <div className="col-3 " id="columna-1-1">
                  <label for="input-nro-pedido" className="form-label">Numero de pedido</label>
                  <input type="text" id="input-nro-pedido" className="form-control" onChange={(e) => setnroPedido(e.target.value)}  required  />
              </div>
              <div className="col-1 " >
                    <label for="btnmod" className="form-label" >&nbsp;</label>
                    <br/>
              </div>
              <div className="col-3 " id="columna-2-1">
                  <label for="input-nombre-producto" className="form-label"  >Nombre de Producto</label>
                  <input type="text" id="input-nombre-producto" className="form-control" onChange={(e) => setnomPro(e.target.value)}  required />            
              </div>
              <div className="col-1 "  >
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
              <div className="col-3 " id="columna-3-1">
                  <label for="input-codigo-producto" className="form-label" >Codigo de Producto</label>
                  <input type="text" id="input-codigo-producto" className="form-control"  onChange={(e) => setcodPro(e.target.value)}  required />            
              </div>
              <div className="col-1 ">
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
              <div className="container" style={{marginTop:20}}>
          <div className="row top-buffer" id="row-2">
              <div className="col-3 " id="columna-1-2">
                  <label for="input-nombre-cliente" className="form-label" >Nombres Cliente</label>
                  <input type="text" id="input-nombre-cliente" className="form-control"  onChange={(e) => setnomCli(e.target.value)}  required />            
              </div>
              <div className="col-1 ">
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
              <div className="col-3 " id="columna-2-2">
                  <label for="apellidos-cliente" className="form-label">Apellidos Cliente</label>
                  <input type="text" className="form-control" id="input-apellido-cliente"  onChange={(e) => setapeCli(e.target.value)}  required />      
              </div>
              <div className="col-1 ">
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
              <div className="col-3 " id="columna-3-2">
                  <label for="input-tipo-pago" className="form-label">Tipo de Pago</label>
                  <select className="form-select" id="input-tipo-pago"  onChange={(e) => settiPag(e.target.value)}  required >
                      <option selected >Seleccione</option>
                      <option value="Credito">Credito</option>
                      <option value="Debito">Debito</option>
                      <option value="Cheque">Cheque</option>
                    </select>
              </div>
              <div className="col-1 ">
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
              <div className="container "style={{marginTop:20}}>
          <div className="row top-buffer" id="row-3">
              <div className="col-4 " id="columna-1-3">
                  <label >Sexo Cliente</label>
                  <br/>
                  <input className="form-check-input" type="radio"  name="opsex"  value="Masculino" id="opsexm"  onChange={(e) => setsexCli(e.target.value)}  required />
                  <label className="form-check-label" for="opsexm">
                    Masculino
                  </label>           
                  <input className="form-check-input" type="radio" name="opsex" value="Femenino" id="opsexf"  onChange={(e) => setsexCli(e.target.value)}  required />
                  <label className="form-check-label" for="opsexf">
                    Femenino
                  </label> 
              </div>

              <div className="col-3 " id="columna-2-3">
                  <label for="input-edad">Edad</label>
                  <input type="text" className="form-control" id="input-edad"  onChange={(e) => setedaCli(e.target.value)}  required />           
              </div>
              <div className="col-1 ">
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
              <div className="col-3 " id="columna-3-3">
                  <label for="input-cantidad"   >Cantidad Comprada</label>
                  <input type="text" className="form-control" id="input-cantidad" onChange={(e) => setcanCom(e.target.value)}  required/>                </div>
              </div>
              <div className="col-1 ">
                  <label  className="form-label" >&nbsp;</label>
                  <br/>
              </div>
      </div>
      <div className="container">
          <div className="row" id="row-4">
            <div className="col-3 " id="columna-3-2">
                <label for="input-estado" className="form-label">Estado de Compra</label>
                <select className="form-select" id="input-estado" onChange={(e) => setestCom(e.target.value)}  required>
                    <option selected >Seleccione</option>
                    <option value="Aprobada">Aprobada</option>
                    <option value="En proceso">En Proceso</option>
                    <option value="Rechazada">Rechazada</option>
                  </select>
            </div>
            <div className="col-1 ">
                <label  className="form-label" >&nbsp;</label>
                <br/>
            </div>
            <div className="col-4 " id="columna-1-3">
                <label >Entrega</label>
                <br/>
                <input className="form-check-input" type="radio"  name="opent"  value="Delivery" id="opentr" onChange={(e) => setentCom(e.target.value)}  required/>
                <label className="form-check-label" for="opentr">
                  Retiro en Tienda
                </label>           
                <input className="form-check-input" type="radio" name="opent" value="Retiro en tienda" id="opentd" onChange={(e) => setentCom(e.target.value)}  required/>
                <label className="form-check-label" for="opentd">
                  Delivery
                </label> 
            </div>
            <div className="col-3 " id="columna-3-2">
                <label for="input-region" className="form-label">Region</label>
                <select className="form-select" id="input-region" onChange={(e) => setregCli(e.target.value)}  required>
                    <option selected >Seleccione</option>
                    <option value="Tarapaca">Tarapaca</option>
                    <option value="Antofagasta">Antofagasta</option>
                    <option value="Atacama">Atacama</option>
                    <option value="Coquimbo">Coquimbo</option>
                    <option value="Valparaiso">Valparaiso</option>
                    <option value="O'Higgins">O'Higgins</option>
                    <option value="El Maule">El Maule</option>
                    <option value="El Bio Bio">El Bio Bio</option>
                    <option value="La Araucania">La Araucania</option>
                    <option value="Los Lagos">Los Lagos</option>
                    <option value="Aysen">Aysen</option>
                    <option value="Magallanes">Magallanes</option>
                    <option value="Region Metropolitana de Santiago">Region Metropolitana de Santiago</option>
                    <option value="Los Rios">Los Rios</option>
                    <option value="Arica y Parinacota">Arica y Parinacota</option>
                    <option value="Ñuble">Ñuble</option>
                  </select>
            </div>
            <div className="col-1 ">
                <label  className="form-label" >&nbsp;</label>
                <br/>
            </div>
            </div>
          </div>



      <div className="container top-buffer" id="button-box" style={{textAlign:"center", paddingTop:20}}>
        <button id="btn-reg" type="button" className="btn btn-primary" onClick={registrarCompra}>Registrar</button>  
      </div>
      
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}
