import React from 'react'
import { Row ,Col ,Card } from 'react-bootstrap';
import logo from '../images/Custom-workflows.svg';
import logo1 from '../images/Dedicated-support-team.svg';
import logo2 from '../images/End-to-end-branding.svg';
import logo3 from '../images/Third-party-integration.svg';


const arr=[
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo3,
        name:'card-1',
        sty:'width:150px'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo1,
        name:'card-2'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo2,
        name:'card-3'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo3,
        name:'card-4'
    }
]


const Comp8 = () => {
    return (
        <div style={{
            marginLeft:'120px',
            marginTop:'100px',
            textAlign:'left'
        }}>
            <Row>
                {arr.map(p=>(
                    <Col sm={12} lg={2} xm={3} className='mx-5 my-3'>
                        <Card  className='border-0' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p.src}  style={{width:'80px',marginLeft:'50px'}}/>
                            <Card.Body >
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>
                                {p.text}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Comp8
