import React from 'react';
import Link from "next/link";
import {styles} from "next/dist/client/components/react-dev-overlay/internal/components/Toast";

const MenuComponent = () => {
    return (
        <div>
            <ul className={styles}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/users"}>users</Link>
                </li>
                <li>
                    <Link href={"/posts"}>posts</Link>
                </li>
                <li>
                    <Link href={"/comments"}>comments</Link>
                </li>
            </ul>
            <hr/>

        </div>
    );
};

export default MenuComponent;