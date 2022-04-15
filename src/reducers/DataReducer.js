import { AccordionButton } from "react-bootstrap";

const DataReducer =(state,action)=>{
    switch(action.type){
           case "ADD_ITEM" :
               return{
                   ...state,
                   items:[...state.items,action.payload]
               }
            case "DELETE_ITEM":
                return{
                    ...state,
                    items: state.items.filter((item)=> item.id != action.payload)
                }
            case "EDIT_ITEM":
                return{
                    ...state,
                    toEdit: action.payload
                }
            case "UPDATE_ITEM":
                return{
                    ...state,
                    items: state.items.map((item)=> item.id === action.payload.id ? action.payload : items)
                }
    }
}

export default DataReducer