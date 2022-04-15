
import React,{useContext} from 'react'
import './style.css'
import {Button, Table} from 'react-bootstrap'
import ItemList from './ItemList'
import DataContext from '../contexts/DataContext'

const ItemTable = () => {

const {items} = useContext(DataContext)

  return (
    <>
            <div className="main_table_div">
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Item Name</th>
                                <th>Quentity</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                items.map((item,index)=>(
                                  <ItemList item={item} key={item.id} index={index}/>
                                ))
                              }
                        </tbody>
                    </Table>
            </div>
    </>
  )
}

export default ItemTable