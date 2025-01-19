import Product from "../Product/Product";
import Card from "react-bootstrap/Card"

const Price = () => {
    return <Card.Text style={{fontWeight: "bold"}}>
        {Product.price} €
    </Card.Text>;
}

export default Price;