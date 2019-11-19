import React from 'react'
import { Container, Row, Col, Button, Card, CardBody, FormGroup, Label, Input, Form } from 'reactstrap';
import './Contact.css';

// class Contact extends React.Component {    
const Contact = () => {
    return (
        <Container> 
            <Row>
                <Col md="4" >
                    <Card >
                        <CardBody >
                            <Form className="Inq">
                                <h3>Inquiries</h3>
                                <Label for="GenInq">General: <a href="mailto:">info@enviroapps.com </a></Label>
                                
                                <Label for="eStarInq">eStar:<a href="mailto:">info@enviroapps.com</a> </Label>

                                <Label for="ItInq">IT: <a href="mailto:">itinfo@enviroapps.com</a></Label>
                                
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardBody>
                            <Form>
                                <h3 className="text-center mb-4">Contact Us</h3>
                                <FormGroup>
                                    <Label for="multiInterest" className="grey-text">
                                        Your Primary Interest With EnviroApps:</Label>
                                    <Input type="select" name="multiInt" id="multiInterest">
                                        <option>Environment</option>
                                        <option>Technology</option>
                                        <option>EAFarms</option>
                                        <option>EAPharmics</option>
                                        <option>ZoomVin</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Subject:</Label>
                                    <Input>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Comments:</Label>
                                    <Input type="textarea" name="comments" id="comments">
                                    </Input>
                                </FormGroup>

                            </Form>

                        </CardBody>
                    </Card>
                </Col>
                <Col md="4">
                    <Card>
                        <CardBody>
                            <Form>
                                <h3 className="text-center mb-4">Register</h3>
                                <Label for="EmailEx" className="grey-text">
                                    Your email: </Label>
                                <Input
                                    type="email"
                                    id="defaultFormLoginEmailEx"
                                    className="form-control" />
                                <br />
                                <Label for="passwordEx" className="grey-text">
                                    Your password </Label>
                                <input
                                    type="password"
                                    id="passwordEx"
                                    className="form-control" />
                                <div className="text-center mt-4">

                                    <Button color="primary" type="submit">Login</Button>
                                </div>
                            </Form>

                        </CardBody>
                    </Card>
                </Col>
            </Row>

        </Container>
    );
};
export default Contact;