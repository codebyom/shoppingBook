
import React,{useState,useContext,useEffect} from 'react'
import './style.css'
import {Container,Row,Col, Form,Button} from 'react-bootstrap'
import ItemTable from './ItemTable'
import DataContext from '../contexts/DataContext'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Home = () => {

const [itemName,setItemName] = useState('')
const [itemQuentity,setItemQuentity] = useState('')


const {additem,items,toEdit,updateItem} = useContext(DataContext)

const addNewItem = (e)=>{
    e.preventDefault();

    if(itemName === '' || itemQuentity===''){
        toast.error('Please fill all the field properly')
    }
    else{
       if(toEdit){
           updateItem({
               id:toEdit.id,
               itemName,
               itemQuentity
           })
           setItemName('')
           setItemQuentity('')
           toast.success('Item Updated Successfully')
           toEdit(null)
       }
       else{
            const newItem={
                id: Math.floor(Math.random()*100+1),
                itemName,
                itemQuentity
            }
            additem(newItem)
            setItemName('')
            setItemQuentity('')
            toast.success('Item Added Successfully')
       }
    }
    
}

    useEffect(()=>{
            if(toEdit){
                setItemName(toEdit.itemName)
                setItemQuentity(toEdit.itemQuentity)
            }
    },[toEdit])



  return (
        <>
            <div className="main_div_home">
                    <Container>
                        <Row>
                            <Col sm={11} md={6} lg={4} xl={4}>
                             <div className="main_form_div">
                             <Form>
                                 <h2 className="form_title">{toEdit?'Update Item':'Add Item'}</h2>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Item Name"  value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
                            
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Item Quentity</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Item Quentity" value={itemQuentity} onChange={(e)=>setItemQuentity(e.target.value)}/>
                                </Form.Group>
                                <Button variant="primary" type="submit" className='add_btn' onClick={addNewItem}>
                                    {toEdit?'Update Item':'Add Item'}
                                </Button>
                                </Form>
                             </div>
                            </Col>


                            <Col sm={11} md={6} lg={8} xl={8}>
                              <ItemTable/>
                            </Col>
                        </Row>
                    </Container>
            </div>
        </>
  )
}

export default Home