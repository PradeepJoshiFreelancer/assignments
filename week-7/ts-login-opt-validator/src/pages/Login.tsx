import { useNavigate } from "react-router-dom";
import Container from "../components/Container";
import classes from "./Login.module.css";
import Heading from "../components/Heading";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();
  const onSendOTPHandller = () => {
    navigate("/validate");
  };
  return (
    <Container>
      <Heading headingText="Login Via OTP" />
      <br />
      <input className={classes.phone} placeholder="Enter your mobile number" />
      <br />
      <Button onclickHandller={onSendOTPHandller} buttonText="Send OTP" />
    </Container>
  );
}

export default Login;
