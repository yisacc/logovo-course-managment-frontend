import {Form, Select} from "antd";

const FormSelect=({placeholder,name,loading})=>{
    return(
        <Form.Item
            name={name}
            rules={[{ required: true, message: `${placeholder}` }]}
        >
            <Select
                showSearch={false}
                size={"large"}
                name={name}
                placeholder={placeholder}
                loading={loading}
                options={[]}
            >
            </Select>
        </Form.Item>
    )
}
export default FormSelect
