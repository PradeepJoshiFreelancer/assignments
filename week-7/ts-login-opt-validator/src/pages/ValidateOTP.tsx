import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Password from "../components/Password";
import classes from "./ValidateOTP.module.css";

function ValidateOTP() {
  const navigate = useNavigate()
  const onLoginHandller = () =>{
    navigate("/success")
  }
  return (
    <Container>
      <Heading headingText="Login Via OTP" />
      <div className={classes.optWrapper}>
      <Password numerOfInputs={4} />
      </div>
      <Button onclickHandller={onLoginHandller} buttonText="Login" />

    </Container>
  );
}

export default ValidateOTP;
