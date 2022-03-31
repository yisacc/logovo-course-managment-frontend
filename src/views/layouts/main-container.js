import React from "react";
import SideBar from "./sidebar";
import Container from "../components/container";

const MainContainer=()=>{
    return(
        <div className="grid w-full h-full" style={{gridTemplateColumns: "1fr 5fr", minHeight:"100vh"}}>
            <SideBar />
            <div className="bg-white m-6 rounded-3xl">
                <Container />
            </div>
        </div>
    )
}
export default MainContainer


