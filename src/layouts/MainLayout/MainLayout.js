import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import css from "./MainLayout.module.css";

import { Header, UserInfo } from "../../components";

const MainLayout = () => {
    const [backgroundColor, setBackgroundColor] = useState();

    const handleClick = () => {
        setBackgroundColor("url(https://top-fon.com/uploads/posts/2021-07/1626839085_57-p-top-krasnii-fon-64.jpg)  center fixed ");
    };

    return (
        <div className={css.MainLayout} style={{ background: backgroundColor }}>
            <div className={`App ${backgroundColor}`} >
                <button className={backgroundColor} onClick={handleClick} >Change Background Color</button>
            </div>
            <div className={css.background}>
                <div className={css.top}>
                    <div className={css.webtitle}>
                        <div>
                            <img
                                src={
                                    "https://thumbs.dreamstime.com/b/%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%B8%D0%B5-%D1%81%D0%B6%D0%B0%D1%82%D1%8B%D0%B9-%D0%BA%D1%83%D0%BB%D0%B0%D0%BA-%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF-%D0%B8%D0%BB%D0%B8-%D1%8F%D1%80%D0%BB%D1%8B%D0%BA-%D1%81%D0%B8%D0%BB%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BE%D0%BA-%D0%BF%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%82%D0%B0%D0%BA%D0%B6%D0%B5-99997060.jpg"
                                }
                                alt={"bird_logo"}
                            />
                        </div>
                        <div className={css.owufilm}>
                            <b>BANDIERA</b>
                        </div>
                    </div>

                    <div className={css.usertitle}>
                        <div className={css.userlogo}>
                            <img
                                src={
                                    "https://img.freepik.com/free-psd/3d-illustration-of-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1677216399~exp=1677216999~hmac=b82bda25deaf6897dab2c686a84fd6fec3fa9483540066ab1ccce984227adaa0"
                                }
                                alt={"user_logo"}
                            />
                        </div>
                        <div>
                            <UserInfo />
                        </div>
                    </div>
                </div>

                <div>
                    <Header />
                    <Outlet />
                </div>


            </div>
        </div>
    );
};

export { MainLayout };