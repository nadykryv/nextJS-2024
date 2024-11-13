import React from 'react';
import NavLinkClientComponent from "@/components/nav-link-client-component/NavLinkClientComponent";
import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";

const MenuComponent = () => {
    return (
        <div>
            <ul className={styles}>
                <li>
                    <NavLinkClientComponent path={'/'}>Home</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/users'}>users</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/posts'}>posts</NavLinkClientComponent>
                </li>
                <li>
                    <NavLinkClientComponent path={'/comments'}>comments</NavLinkClientComponent>
                </li>

            </ul>
            <hr/>

        </div>
    );
};

export default MenuComponent;