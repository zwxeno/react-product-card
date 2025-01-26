import Image from "react-bootstrap/Image";
import imageFile from "../../assets/images/wimg.png";
import "./WelcomeImage.css";
import {firstName} from "../../App";

const WelcomeImage = () => {
    return firstName && <Image src={imageFile} className={"welcome-image"} alt="welcome image" rounded/>;
}

export default WelcomeImage;