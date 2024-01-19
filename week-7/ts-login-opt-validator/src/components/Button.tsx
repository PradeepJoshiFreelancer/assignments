import classes from './Button.module.css'

interface ButtonProps{
    onclickHandller: () => void
    buttonText: string
}
function Button({onclickHandller, buttonText}: ButtonProps){
    return <button className={classes.OTPButton} onClick={onclickHandller}>
    {buttonText}
  </button>
}

export default Button