import React from 'react'
import { Jumbotron, Container, Row, Col, Card, Table, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Contact.css';

class Contact extends React.Component {
    render () {
        return (
            <div className="contact" >
                <Jumbotron fluid style={{backgroundColor: '#58b0c0'}} >
                    <Container fluid >
                        <Row>
                            <Col xs="6">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th styles={{ align: "left", backgroundolor: 'black' }}>EMAIL:</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <h6>
                                            <tr>
                                                <td>For General Inquiries: </td><td><a href='mailto:info@enviroapps.com?Subject=Hello%20again' target="_top"><p>info@enviroapps.com</p></a></td>
                                            </tr>
                                            <tr>
                                                <td>For eStar related inquiries:</td><td><a href='mailto:info@eapharmics.com?Subject=Hello%20again' target="_top"><p>info@eapharmics.com</p></a></td>
                                            </tr>
                                            <tr>
                                            </tr>
                                            <td>For IT related inquiries:</td><td><a href='mailto:itinfo@enviroapps.com?Subject=Hello%20again' target="_top"><p>itinfo@enviroapps.com</p></a></td>
                                        </h6>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col xs="6">
                                <Card body inverse style={{ backgroundColor: 'black', opacity: 0.6 }}><b>CONTACT FORM</b>
                                    <Form inline style={{ fontSize: 11 }}>
                                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                            <Label for="interest">Your Interest With EnviroApps:</Label>
                                            <Input style={{ fontSize: 10.5 }} type="select" name="select" id="interest">
                                                <option>Environment</option>
                                                <option>Technology</option>
                                                <option>EAFarms</option>
                                                <option>EPHARMICS</option>
                                                <option>Zoomvin</option>
                                            </Input>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>Subject:</Label>
                                            <Input style={{ fontSize: 11 }} type="subject" name="subject">
                                            </Input>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label>Email:</Label>
                                            <Input style={{ fontSize: 11 }} type="email" name="email" placeholder="something@email.com">
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Comments:</Label>
                                            <Input style={{ fontSize: 11 }} type="textarea" name="text" placeholder="Comments">
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Button color="success" style={{ textAlign: 'center' }}>Submit</Button>
                                        </FormGroup>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>
                    </Container>

                </Jumbotron>
            </div>
        )
    }
}
export default Contact;