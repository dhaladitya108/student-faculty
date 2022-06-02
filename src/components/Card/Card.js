import "./Card.css";

function Card(props) {
  let crdClass = "crd";
  if (!props.isCenter) {
    crdClass += " mx-auto vertical-padding";
  }
  return <div className={crdClass}>{props.children}</div>;
}

export default Card;
