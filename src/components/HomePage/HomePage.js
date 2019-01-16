import React from 'react';
import Login from '../common/Login/Login';
import style from './HomePage.scss';


function HomePage() {

    return (
        <div className={style.mainContainer}>
            <div className={style.rightHalf}>
                <section>
                    {/* <img src='' alt='Crowd sourcing logo' /> */}
                    <p>Welcome! Please login to your account.</p>
                    <Login />
                </section>
            </div>
        </div>
    )
}


export default HomePage;
