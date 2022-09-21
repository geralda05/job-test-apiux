const initialValue = {
    tasks: [{
      id: 1,
      name: 'Tarea Inicial',
      description: 'Estas son las asignaciones de la tarea'
    }]
  }
  
const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, tasks: [...state.tasks, {...action.payload, id: state.tasks.length+'_'+action.payload.name}]}
        case 'REMOVE_ITEM':
            console.log(action.payload);
            return { ...state, tasks: state.tasks.filter(i => i.id !== action.payload.id)}
        case 'MODIFY_ITEM':
            return { ...state, tasks: state.tasks.map(i => ((i.id === action.payload.id) ? action.payload : i))}
        default:
            return state
    }
}

export default reducer;