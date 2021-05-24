import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{
            color:'grey',
            background:'black',
            height:'80px',
            textAlign:'center'
        }}>
            <Row>
                <Col className='text-center py-3'>
                    copyright 2020 &copy; Appointy. All rights Reserved.
                </Col>
            </Row>
        </div>
    )
}

export default Footer
