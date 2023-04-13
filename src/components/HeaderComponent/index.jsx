import React from "react";
import './styles.css'
import Sobre from "../../objects/Sobre";
import Menu from "../../objects/Menu";
import CollabLogo from "../../objects/CollabLogo";


const HeaderComponent = ()=>(
    <header className="HeaderComponent">
        <CollabLogo />
        <Sobre />
        <Menu />
    </header>
)

export default HeaderComponent