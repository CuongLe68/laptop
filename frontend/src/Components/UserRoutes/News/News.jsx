import './News.scss';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createAxios } from '../../../createInstance';
import { loginSuccess } from '../../../redux/authSlice';

function News() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const axiosJWT = createAxios(user, dispatch, loginSuccess);

    return (
        <div className="news-container">
            <NavBar />
            <div className="news-wrapper">
                Tin tức nha: https://ttcenter.com.vn/hang-mdm-la-gi-co-nen-mua-macbook-hang-mdm-hay-khong
            </div>
            <Footer />
        </div>
    );
}

export default News;
