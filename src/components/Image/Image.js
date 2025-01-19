import Product from "../Product/Product";
import Card from "react-bootstrap/Card";


const Image = () => {
    return <Card.Img variant="top" className={"p-1 rounded-4"} style={{height: 280,width: 280}} src={Product.image} />
}

export default Image;