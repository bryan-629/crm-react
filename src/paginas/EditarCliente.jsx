import {useParams} from 'react-router-dom'
import Formulario from '../components/Formulario.jsx'
import {useEffect, useState} from 'react'
function EditarCliente() {

  const [cliente,setCliente] =useState({})
  const [cargando, setCargando] = useState(false) 
  const params = useParams();

  useEffect(() => {
      setCargando(!cargando)
      const obterClienteApi = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${params.id}`)
      const clientes = await response.json()
      console.log(clientes)
      setCliente(clientes)
      setCargando(false)
      };
      obterClienteApi();
  }, [])

  return (
    <>
        <h1 className=' font-black text-4xl text-blue-900 '>Editar Cliente</h1>
        <p className='mt-3'>Ultiliza este formulario para editar este cliente </p>
        {cliente?.nombre ? (
          <Formulario
          cliente={cliente}
          cargando={cargando}
          setCargando={setCargando}
          ></Formulario>
        ):(<p>Cliente ID no valido</p>)}
        
    </>
  )
}

export default EditarCliente