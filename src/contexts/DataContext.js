
import {createContext,useState,useReducer} from 'react'
import DataReducer from '../reducers/DataReducer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const DataContext = createContext();

const initialState = {
    items:[],
    toEdit:(null)
}

export const DataProvider =({children})=>{

const [state,dispatch] = useReducer(DataReducer,initialState)

const additem = (item)=>{
    dispatch({type:"ADD_ITEM",payload:item})
}


    const deleteItem = (id)=>{
        dispatch({type:"DELETE_ITEM",payload:id})
        toast.success('item deleted successfully')

    }

    const editItem = (item)=>{
            dispatch({type:"EDIT_ITEM",payload:item})
    }

    const updateItem = (NewDatatoUpdate)=>{
        dispatch({type:"UPDATE_ITEM",payload:NewDatatoUpdate})
    }


    return(
        <DataContext.Provider value={{
            items:state.items,
                deleteItem,
                additem,
                toEdit:state.toEdit,
                editItem,
                updateItem
        }}>{children}</DataContext.Provider>
    )
}

export default DataContext