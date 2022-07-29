import React, { useState, useEffect } from 'react'
export const Listar = () => {



    const obtenerRegistros = () => {
    var datos = localStorage.getItem("registros");
    if(datos){
    return JSON.parse(datos);
    }else{
    return [];
    }
    }
    const [registros, setRegistros] = useState(obtenerRegistros());

    const botonEliminar = (miIndex) => {
        if(window.confirm("¿Está Seguro De Querer Eliminar El Registro?")){
        var registrosFiltrados = registros.filter((e, index) => {
        return miIndex !== index
        });
        setRegistros(registrosFiltrados);
        }
    }

    useEffect(() => {
    localStorage.setItem("registros", JSON.stringify(registros))
    }, [registros])


    return (


    <div className="bg-light" style={{marginTop:20, padding:20}}>
    <div className="h3"> Listado  de ventas de Muebles </div>
    <div className="table-responsive">
    { registros.length > 0 ?
    <>
    <table className="table table-bordered table-hover" style={{marginTop:12}}>
    <thead className="text-center" style={{background:"lightgray"}}>
    <tr> 
                <th scope="col">Nro de Compra</th>
                <th scope="col">Nombre de Producto</th>
                <th scope="col">Codigo de Producto</th>
                <th scope="col">Nombres Comprador</th>
                <th scope="col">Apellidos Comprador</th>
                <th scope="col">Tipo de Pago</th>
                <th scope="col">Sexo</th>
                <th scope="col">Edad</th>
                <th scope="col">Cantidad Comprada</th>
                <th scope="col">Estado</th>
                <th scope="col">Entrega</th>
                <th scope="col">Region</th>
                <th scope="col">Eliminar</th>
    </tr>
    </thead>
    <tbody className="text-center align-baseline">
    {
    registros.map((x, index) => (
        <tr key={index}>
            <td>{ x.nroPedido }</td>
            <td>{ x.nomPro }</td>
            <td>{ x.codPro }</td>
            <td>{ x.nomCli }</td>
            <td>{ x.apeCli }</td>
            <td>{ x.tipPag }</td>
            <td>{ x.sexCli }</td>
            <td>{ x.edaCli }</td>
            <td>{ x.canCom }</td>
            <td>{ x.estCom }</td>
            <td>{ x.entCom }</td>
            <td>{ x.regCli }</td>
            <td className="text-center"> <button className="btn btn-outline-danger" onClick={()=>botonEliminar(index)}>    <i class="bi bi-trash3-fill"></i> </button></td>
        </tr>
    ))
    }
    </tbody>
    </table>
    </>
    : <p className='h5' style={{color:"red"}}>"No Hay Registros Para Listar"</p>
    }
   
    </div>
    </div>
    )
   }
   