import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "../Image/Image";
import Price from "../Price/Price";
import Name from "../Name/Name";
import Description from "../Description/Description";
import TextBox from "../TextBox/TextBox";


const ProductCard = () => {
    return (
        <div style={{width: '18rem'}}>
            <Card className={"m-1 bg-body-secondary"}>
                <Image/>
                <Card.Body>
                    <Name/>
                    <Description/>
                    <Price/>
                    <Button variant="primary">Buy now</Button>
                </Card.Body>
            </Card>
            <TextBox/>
        </div>
    );
}

export default ProductCard;