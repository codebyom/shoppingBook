
import React,{useContext} from 'react'
import {Button} from 'react-bootstrap'
import DataContext from '../contexts/DataContext'
const ItemList = ({item}) => {

  const {deleteItem,editItem,toEdit} = useContext(DataContext)
  return (
    <>
            <tr>

                                <td>{item.id}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemQuentity}</td>
                                <td>not bought</td>
                                <td>
                                    <Button variant='danger' className='delete-btn' onClick={()=>deleteItem(item.id)} >Delete</Button>
                                    <Button variant='primary' onClick={()=>editItem(item)}>Edit</Button>
                                </td>
            </tr>
         
    </>
  )
}

export default ItemList