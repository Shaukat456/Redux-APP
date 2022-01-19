const initialData = {
  list: [],
};

const TodoReducer = (state = initialData, action) => {
  switch (action.type) {
    case "Addi":
      const { id, InputData } = action.payload;
      return {
        ...state,
       list: [
          ...state.list,
          {
            id: id,
            InputData: InputData,
          },
        ],
      };
     

  
    
    default:
        return state;
  }
};

export default TodoReducer;
