import React from 'react'
import { Row ,Col ,Card } from 'react-bootstrap';
import logo1 from '../images/Calendar-Scheduler-2.svg';
import logo2 from '../images/Class-Reminders.svg';
import logo3 from '../images/Resource-Scheduling.svg';
import logo4 from '../images/Scheduling-Mobile-App.svg';
import logo5 from '../images/Team-Management-1.svg';
import logo6 from '../images/Booking-Settings-1.svg';
import logo7 from '../images/Online-prepayments-10.svg';
import logo8 from '../images/Reporting-and-Analytics.svg';


const arr=[
    {
        text:"See your entire schedule at a glance with Appointy's easy-to-use calendar with colour-coded tiles for teachers and sessions. Sync schedule with your personal or professional calendars so that you're never double booked",
        src:logo1,
        name:'Calender Scheduler'
    },
    {
        text:"Send automated email and text reminder notifications to students prior to a session meeting or a class to ensure that they don't miss it. Customize them to add info like room number, location Links, etc.",
        src:logo2,
        name:'Class Reminders'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo3,
        name:'card-1'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo4,
        name:'card-1'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo5,
        name:'card-1'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo6,
        name:'card-1'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo7,
        name:'card-1'
    },
    {
        text:'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry',
        src:logo8,
        name:'card-1'
    }
]

const Comp2 = () => {
    return (
        <div style={{
            marginLeft:'120px',
            marginTop:'60px',
            textAlign:'left'
        }}>
            <Row>
                {arr.map(p=>(
                    <Col sm={12} lg={2} xm={3} className='mx-5 my-3'>
                        <Card  className='border-0' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={p.src}  style={{width:'150px'}}/>
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

export default Comp2
