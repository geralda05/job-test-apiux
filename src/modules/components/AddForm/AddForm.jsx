import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'

const AddForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const dispatch = useDispatch()

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault() 
            
            if(name === '' || description === ''){
                alert('Los campos son obligatorios')
                return 
            }

            dispatch({ type: 'ADD_ITEM', payload: { name, description } })
            setName('')
            setDescription('')
        },
        [setName, setDescription, name, description, dispatch],
    )    

    return (
        <form onSubmit={onSubmit}>
            <h1 className="display-4 mb-3">Añadir Tarea</h1>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Nombre</label>
                <input value={name} className="form-control" id="nameInput" placeholder="Some text" onChange={e => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="descInput" className="form-label">Descripción</label>
                <input value={description} className="form-control" id="descInput" onChange={e => setDescription(e.target.value)} placeholder='Some description' required />
            </div>
            <button type="submit" className="btn btn-success">Agregar item</button>
        </form>
    )
}

export default AddForm