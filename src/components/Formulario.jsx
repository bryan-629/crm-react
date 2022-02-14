import React from 'react'
import {Formik, Form, Field} from 'formik'
function Formulario() {
  return (
    <div className=' bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className=' font-bold text-xl text-gray-600 uppercase text-center'>Agregar Cliente</h1>
        <Formik
        initialValues={{
            nombre: '',
            apellido: '',
            empresa: '',
            email: '',
            telefono: '',
            notas: ''
        }}>
            <Form className='mt-10'>
                <div className=' mb-4'>
                    <label className=' text-gray-800 ' htmlFor='nombre'>Nombre:</label>
                    <Field type='text'
                    id='nombre'
                    name='nombre'
                    className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del Cliente' ></Field>
                </div>
                <div className=' mb-4'>
                    <label className=' text-gray-800 ' htmlFor='empresa'>Empresa:</label>
                    <Field type='text'
                    id='empresa'
                    name='empresa'
                    className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Empresa del Cliente' ></Field>
                </div>
                <div className=' mb-4'>
                    <label className=' text-gray-800 ' htmlFor='email'>Email:</label>
                    <Field type='text'
                    id='email'
                    name='email'
                    className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Email del Cliente' ></Field>
                </div>
                <div className=' mb-4'>
                    <label className=' text-gray-800 ' htmlFor='tel'>Teléfono:</label>
                    <Field type='tel'
                    id='tel'
                    name='telefono'
                    className=' mt-2 block w-full p-3 bg-gray-50' placeholder='Teléfono del Cliente' ></Field>
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
                value='Agregar Cliente'
                className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'>
                </input>
                
            </Form>       
        </Formik>
    </div>
  )
}

export default Formulario