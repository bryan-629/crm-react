import React, { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'


function VerCliente() {
    const [cliente,setCliente] =useState({})
    const [cargando, setCargando] = useState(false) 
    const params = useParams();

    useEffect(() => {
        setCargando(!cargando)
        const obterClienteApi = async () => {
        const response = await fetch(`http://localhost:4000/clientes/${params.id}`)
        const clientes = await response.json()
        console.log(clientes)
        setCliente(clientes)
        setCargando(false)
        };
        obterClienteApi();
        
    }, [])

  return (


    cargando ? (<h1>Cargando...</h1>):(
      Object.keys(cliente).length === 0 ? (<h1>No hay resultados</h1>):(
        <div>
                <>
                <h1 className=' font-black text-4xl text-blue-900 '>Ver Cliente</h1>
                <p className='mt-3'>Información del cliente</p>
                <p className='text-4xl text-gray-600 mt-10'><span className='uppercase font-bold text-gray-800 '>Cliente: </span>{cliente.nombre}</p>
                <p className='text-2xl text-gray-600 mt-4'><span className='uppercase font-bold text-gray-800'>Email: </span>{cliente.email}</p>
                <p className='text-2xl text-gray-600 '><span className='uppercase font-bold text-gray-800'>Teléfono: </span>{cliente.telefono}</p>
                <p className='text-2xl text-gray-600 '><span className='uppercase font-bold text-gray-800'>Empresa: </span>{cliente.empresa}</p>
                {cliente.notas? (<p className='text-2xl text-gray-600 '><span className='uppercase font-bold text-gray-800'>Notas: </span>{cliente.notas}</p>):null}
                </>
                
        </div>)
        
      )
    ) 
}

export default VerCliente