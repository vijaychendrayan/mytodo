// import classes from "./Card.module.css";
const Card = (props) => {
  return (
    <div className="card">
      <section>{props.children}</section>
    </div>
  );
};
export default Card;
