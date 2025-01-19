import Product from "../Product/Product";
import Card from "react-bootstrap/Card";
import "./Description.css";


const Description = () => {
    return <Card.Text className={"overflow-auto h-150px"}>
        {Product.description}
    </Card.Text>
}

export default Description;