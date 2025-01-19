import Form from "react-bootstrap/Form";
import {firstName} from "../../App";

const TextBox = () => {
    return <div className={"w-100"}>
        <Form.Text className={"m-1 border p-3 rounded d-block bg-body-tertiary"}>
            Hello, {firstName ? firstName : "there"}!
        </Form.Text>
    </div>;
}

export default TextBox;