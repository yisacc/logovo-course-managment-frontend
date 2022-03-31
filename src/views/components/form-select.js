import {Form, Select} from "antd";

const FormSelect=({placeholder,name,loading,data})=>{
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
                options={data?.map((_, index) => {
                        return {
                            key: index,
                            value: _._id,
                            label: _.name
                        };
                    })}
            >
            </Select>
        </Form.Item>
    )
}
export default FormSelect
