
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './pagestyle.css'
const Aboutpage = () => {
  return (
    <>
        <div className="main_about-div">
            <Container>
                <Row>
                    <Col sm={11} md={11} lg={6} xl={6}>
                       <div className="about_iamge">
                           <img src="/image/ompic.jpeg" alt="" />
                       </div>
                    </Col>
                    <Col sm={11} md={11} lg={6} xl={6}>
                        <div className="main_content_div_about">
                            <h2 className="title_about">About</h2>
                            <div className="content_about">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iste repudiandae iure laboriosam qui dignissimos harum placeat. 
                                Ducimus, ut nulla voluptas ea quia laboriosam voluptates veniam sunt aut minus nobis?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repudiandae illo quibusdam iusto voluptas sed aspernatur 
                                praesentium consequatur deleniti magnam. Non libero praesentium, vitae quis maiores numquam ipsum atque provident!

                                <div className="developer_about">
                                    <h2 className="developer">Developer: <span className='author_name_span'>Om Prakash Joshi</span></h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Aboutpage