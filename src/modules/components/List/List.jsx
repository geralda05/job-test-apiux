import React, { useCallback } from 'react'
import Task from '../Task/Task'
import { useDispatch, useSelector } from 'react-redux'

const List = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks)

    const onClickRemove = useCallback((item) => {
        dispatch({type: 'REMOVE_ITEM', payload: item})
    }, [dispatch])
    
    return (
    <div>
        <h1 className="display-4 mb-3">Lista de Tareas</h1>
        {
           tasks && tasks.length > 0 &&
           <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Descripcion</th>
                </tr>
                </thead>
                <tbody>
                    {tasks && tasks.map(i => <Task key={i.id} item={i} onClickRemove={onClickRemove}></Task>)}
                </tbody>
           </table>
        }

        </div>
    )
}

export default List