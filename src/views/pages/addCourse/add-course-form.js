import { Form, Input } from 'antd';
const AddCourseForm=({form})=>{
    return(
        <Form
            layout={'vertical'}
            form={form}
            preserve={false}
        >
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter project name' }]}
            >
                <Input placeholder="Название курса" />
            </Form.Item>
        </Form>
    )
}
export default AddCourseForm
