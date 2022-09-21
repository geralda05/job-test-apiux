import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export default function Task({item, onClickRemove}) {
    const dispatch = useDispatch()
    const [modify, setModify] = React.useState(false);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const onClickModify = useCallback(() => {
        dispatch({type: 'MODIFY_ITEM', payload: {name, description, id: item.id}});
        setModify(false);
    }, [dispatch, name, description, item])

    const handleModify = () => {
        setName(item.name);
        setDescription(item.description);
        setModify(!modify);
    }

    return (
        <>
            <tr>
                <th>{item.name}</th>
                <td>{item.description}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => onClickRemove(item)}>Delete</button> 
                    <button className="btn btn-secondary" onClick={handleModify}>Modify</button>
                </td>
            </tr>
            {
                modify &&
                <tr>
                    <th><input value={name} onChange={e => setName(e.target.value)} placeholder='Nombre' /></th>
                    <th><input value={description} onChange={e => setDescription(e.target.value)} placeholder='Descripcion' /></th>
                    <th><button className="btn btn-success" onClick={() => onClickModify()}>Modificar</button></th>
                </tr>                
            }
        </>
    )
}