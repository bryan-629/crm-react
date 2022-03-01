import React from 'react'
import {useNavigate} from 'react-router-dom'
function Clientes({cliente, setClientes,handleEliminar}) {
  const navigate = useNavigate();
  return (
    <>
        <tr className='border-b hover:bg-gray-50'>
        <td className='p-2'>{cliente.nombre}</td>
        <td className='p-2'>
            <p><span className='text-gray-800 uppercase font-bold'>Email:</span>{cliente.email}</p>
            <p><span className='text-gray-800 uppercase font-bold'>Tel::</span>{cliente.telefono}</p>
        </td>
        <td className='p-2'>{cliente.empresa}</td>
        <td className='p-2'>
            <button type='button' className='bg-yellow-500 hover:bg-yellow-600 p-2  text-white w-full block uppercase font-bold text-xs mt-2 border-b' onClick={() => {navigate(`/clientes/${cliente.id}`)}}>Ver</button>
            <button type='button' className='bg-blue-600 hover:bg-blue-700 p-2  text-white w-full block uppercase font-bold text-xs mt-2' onClick={() => {navigate(`/clientes/editar/${cliente.id}`)}}>Editar</button>
            <button type='button' className='bg-red-600 mt-2 hover:bg-red-700 p-2 text-white w-full block uppercase font-bold text-xs' onClick={ () => handleEliminar(cliente.id)} >Eliminar</button>
        </td>
    </tr>
    </>
  )
}

export default Clientes