import React,{useState} from 'react';
import {Button,Card,CardBody,Form,FormGroup,Label,Input,CardLink, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import seeRadioIcon from '../../assets/seeRadio.png';
const Login=()=>{
    console.log('login');
    const eye = <FontAwesomeIcon icon={faEye} />;
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

return(
    <div>
        <div row>
            <Col>
                <img src={seeRadioIcon} style={{margin:'5% 33% 1% 0', height:'70px'}} alt='icon'/>
            </Col>
        </div>
        <Card style={{margin:'0 30% 10% 30%',borderRadious:'10px'}}>
            <CardBody>
                <Form>
                    <FormGroup row>
                        <Label for="exampleEmail">Email{' '}<sup style={{color:'red'}}>*</sup></Label>
                        <Input className='border-top-0 border-right-0 border-left-0' type="email" name="email" placeholder="Enter email.." />
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword">Password{' '}<sup style={{color:'red'}}>*</sup></Label>
                        <Input className='border-top-0 border-right-0 border-left-0 col-lg-11' type={passwordShown ? "text" : "password"} name="password"placeholder="Enter password.." />
                        <i className='border-bottom col-lg-1' onClick={togglePasswordVisiblity}>{eye}</i>
                    </FormGroup>
                    <FormGroup row>
                        <Button className="col-lg-12" color="primary">Login</Button>
                    </FormGroup>
                    <FormGroup>
                        <CardLink href="#">Forgot password?</CardLink>
                    </FormGroup>
                </Form>
            </CardBody>
        </Card>
    </div>
);
}
export default Login;