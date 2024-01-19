import { ReactElement } from "react"
import classes from "./Contianer.module.css"

interface ContainerProps{
    children: ReactElement[] | JSX.Element[] | JSX.Element
}

function Container({children} : ContainerProps){
    return <div className={classes.container}>
        {children}
    </div>
}

export default Container