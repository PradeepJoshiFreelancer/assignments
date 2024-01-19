import classes from "./Heading.module.css";

interface HeadingProps {
  headingText: string;
}
function Heading({ headingText }: HeadingProps) {
  return <h1 className={classes.heading}>{headingText}</h1>;
}

export default Heading;
