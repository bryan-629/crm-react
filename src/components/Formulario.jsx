import React from 'react'
import {Formik, Form, Field,ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

function Formulario({cliente, cargando, setCargando}) {

    const navigate = useNavigate()

    const handleSubmit = async (values) => {
       try{
           if (cliente.id) {
               //editando un registro
            const url = `http://localhost:4000/clientes/${cliente.id}`
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            navigate('/clientes')
           }else{
            //nuevo registro
            const url = 'http://localhost:4000/clientes'
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            navigate('/clientes')
           }
       }catch (error){
              console.log('error')
       }
    }
    
    const nuevoClienteSchema = Yup.object().shape({
            nombre: Yup.string().min(3,"El nombre es muy corto").max(20, 'El nombre es muy largo').required('El nombre es requerido'),
            empresa: Yup.string().min(3,"El nombre es muy corto").max(20, 'El nombre de la empresa es muy largo').required('El nombre de la empresa es requerido'),
            email: Yup.string().email('Email no valido').required('El email de la empresa es requerido'),
            telefono: Yup.number().integer('Numero no valido').positive('Numero no valido').typeError('El telefono debe ser un numero').required('El telefono es requerido')
            
    })

  return (
    <div className=' bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        {cargando ? (<h1>Cargando...</h1>) :(
            <>
            <h1 className=' font-bold text-xl text-gray-600 uppercase text-center'>{cliente?.nombre ?'Editar Cliente' : 'Agregar Cliente'}</h1>
            <Formik
            initialValues={{
                nombre: cliente?.nombre ?? '',
                empresa: cliente?.empresa ?? '',
                email: cliente?.email ?? '',
                telefono: cliente?.telefono ?? '',
                notas: cliente?.notas ?? ''
            }}
            enableReinitialize={true}
            validationSchema={nuevoClienteSchema}
            onSubmit={ async (values, {resetForm}) =>{
                await handleSubmit(values)
                resetForm()
            }}
            >
                {({errors}) => {
                    
                    return(
                    cargando? (<h1>Cargando...</h1>):(
                <Form className='mt-10'>
                    <div className=' mb-4'>
                        <label className=' text-gray-800 ' htmlFor='nombre'>Nombre:</label>
                        <Field type='text'
                        id='nombre'
                        name='nombre'
                        className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del Cliente' ></Field>
                        <ErrorMessage name='nombre' component='div' className='my-4 text-white p-3 font-bold  bg-red-600 uppercase'></ErrorMessage>
                    </div>
                    <div className=' mb-4'>
                        <label className=' text-gray-800 ' htmlFor='empresa'>Empresa:</label>
                        <Field type='text'
                        id='empresa'
                        name='empresa'
                        className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Empresa del Cliente' ></Field>
                        <ErrorMessage name='empresa' component='div' className='my-4 text-white p-3 font-bold  bg-red-600 uppercase'></ErrorMessage>
                    </div>
                    <div className=' mb-4'>
                        <label className=' text-gray-800 ' htmlFor='email'>Email:</label>
                        <Field type='text'
                        id='email'
                        name='email'
                        className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Email del Cliente' ></Field>
                        <ErrorMessage name='email' component='div' className='my-4 text-white p-3 font-bold  bg-red-600 uppercase'></ErrorMessage>
                    </div>
                    <div className=' mb-4'>
                        <label className=' text-gray-800 ' htmlFor='tel'>Teléfono:</label>
                        <Field type='tel'
                        id='tel'
                        name='telefono'
                        className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Teléfono del Cliente' ></Field>
                        <ErrorMessage name='telefono' component='div' className='my-4 text-white p-3 font-bold  bg-red-600 uppercase'></ErrorMessage>
                    </div>
                    <div className=' mb-4'>
                        <label className=' text-gray-800 ' htmlFor='notas'>Notas:</label>
                        <Field type='text'
                        as='textarea'
                        id='notas'
                        name='notas'
                        className=' mt-2 block w-full p-3 bg-gray-50 h-40' placeholder='Notas del Cliente' ></Field>
                    </div>
                    <input 
                    type='submit'
                    value={cliente?.nombre ?'Editar Cliente' : 'Agregar Cliente'}
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer'>
                    </input>
                    
                </Form> )
                )}}     
            </Formik></>
        )}
        
    </div>
  )
}
Formulario.defaultProps = { //si el props no se pasa, se le asigna un valor por defecto
    cliente: {
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        notas: ''
    }
}


export default Formulario