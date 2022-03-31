import {useState} from "react";
import {Form, Input} from "antd";

const VideoForm=({name, placeholder,message})=>{
    const [selectedFile, setSelectedFile] = useState(null)
    const handleChange=(e)=>{
        const {value}=e.target
        if(value.includes("https://youtu.be/")){
            let result=value.replace("https://youtu.be/","https://youtube.com/embed/")
            setSelectedFile(result)
        }else{
            setSelectedFile('')
        }

    }

    return(
        <>
            <Form.Item
                name={name}
                rules={[{ required: true, message: `${message}` }]}
            >
                <Input onChange={handleChange} size={"large"} placeholder={placeholder} />
            </Form.Item>
            {!selectedFile ?(
                    <Form.Item
                        name='videoLink'
                        rules={[{ required: true, message: `` }]}
                    >
        <div className='uploadcontainer'>

                <Input className="videoLink" size={"large"} />

            <div className='grid justify-center upload-area bg-white border-2 border-dashed border-indigo rounded-3xl align-middle text-center py-10' id='uploadfile'>
                <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.167 10.167C40.501 10.167 41.5837 11.2497 41.5837 12.5837V22.7337L54.1817 13.9128C54.7279 13.531 55.4819 13.6639 55.8662 14.2125C56.0063 14.4155 56.0837 14.6572 56.0837 14.9037V44.097C56.0837 44.764 55.5423 45.3053 54.8753 45.3053C54.6264 45.3053 54.3847 45.228 54.1817 45.0878L41.5837 36.267V46.417C41.5837 47.751 40.501 48.8337 39.167 48.8337H5.33366C3.99966 48.8337 2.91699 47.751 2.91699 46.417V12.5837C2.91699 11.2497 3.99966 10.167 5.33366 10.167H39.167ZM36.7503 15.0003H7.75033V44.0003H36.7503V15.0003ZM19.8337 19.8337H24.667V27.0837H31.917V31.917H24.6646L24.667 39.167H19.8337L19.8312 31.917H12.5837V27.0837H19.8337V19.8337ZM51.2503 21.8661L41.5837 28.6327V30.3679L51.2503 37.1346V21.8637V21.8661Z" fill="#4079C6" fill-opacity="0.55"/>
                </svg>

                <h2 id='draganddropheader'>
                    Загрузить видео...
                </h2>
                <br></br>
            </div>
        </div>
                    </Form.Item>

            ):(
                // <iframe id="iframe" src={selectedFile} frameBorder="0"></iframe>
                <iframe className={"pb-2"} width="620" height="315" src={selectedFile} frameBorder="0" allowFullScreen></iframe>
            )}
            </>
    )
}
export default VideoForm
