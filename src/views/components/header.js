import {Avatar} from "antd";
import {
    UserOutlined,
} from '@ant-design/icons';

const Header=()=>{
    return(
        <div className="rounded-t-3xl bg-light-gray h-14 pb-2 pr-2">
            <div className="p-2 text-right">
                <Avatar size={"large"} icon={<UserOutlined />} />
                    <span className={"pl-2 dark-cyan-blue"}>Имя</span>
                    <span className={"pl-2 dark-cyan-blue"}>Фамилия</span>
            </div>
        </div>
    )
}
export default Header
