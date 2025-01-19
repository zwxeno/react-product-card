import Product from "../Product/Product";
import Card from "react-bootstrap/Card";

const Name = () => {
    return <Card.Title>{Product.name}</Card.Title>;
}

export default Name;