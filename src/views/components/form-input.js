import {Form, Input} from "antd";

const FormInput=({name,message,placeholder})=>{
    return(
        <Form.Item
            name={name}
            rules={[{ required: true, message: `${placeholder}` }]}
        >
            <Input size={"large"} placeholder={placeholder} />
        </Form.Item>
    )
}
export default FormInput
