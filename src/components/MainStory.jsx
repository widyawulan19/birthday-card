import React from 'react'
import '../style/components/MainStory.css'
import bunga4 from '../asset/bunga4.png'
import { IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const MainStory=()=> {
    const navigate = useNavigate();

    const NavigateToProlog = () =>{
        navigate('/prolog')
    }
  return (
    <div className='main-story-container'>
        <div className="main-story-header">
            <h2>Ghiffari, Dalam Lembar Usia ke-26</h2>
        </div>
        <div className="main-story-con">
            <img src={bunga4} alt="" />
        </div>
        <div className="main-story-footer">
            <div className="btn-continue" onClick={NavigateToProlog}>
                Continue 
                <IoChevronForwardOutline/>
            </div>
        </div>
    </div>
  )
}

export default MainStory