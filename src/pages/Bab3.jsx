import React from 'react'
import '../style/pages/Bab1.css'
import ch3 from '../asset/ch3.jpg'
import { IoChevronForwardOutline,IoChevronBackOutline  } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Bab3() {
    const navigate = useNavigate();

    const handleNavigateToBab2 = () =>{
        navigate('/bab2')
    }

    const handleNavigateToBab4 = () =>{
        navigate('/bab4')
    }
  return (
    <div className='bab1-container'>
        <div className="bab1-header">
            <div className="btn" onClick={handleNavigateToBab2}>
                <IoChevronBackOutline/>
                Prev
            </div>
            <div className="btn" onClick={handleNavigateToBab4}>
                Next 
                <IoChevronForwardOutline/>
            </div>
        </div>
        <div className="bab1-main" style={{marginTop:'10px'}}>
            <div className="chapter-title">
                <p>Chapter 3</p>
                <h2>Cinta, Kamu, dan Kita</h2>
            </div>
            <div className="bab1-text">
                <div className="main-text">
                    <img src={ch3}  alt="" className='img-bab3'/>
                    "Cinta bukan tentang siapa paling sempurna. Tapi siapa yang paling setia dalam luka dan tawa."
                </div>
                 <p className='bab3-p'>
                    <span>text </span> Cinta ini sederhana, tapi dalam.
                        Aku tidak hanya mencintai senyummu yang hangat dan menenangkan,
                        tapi juga hal-hal kecil yang tak semua orang perhatikan —
                        caramu menunjukkan perhatian tanpa banyak kata,
                        caramu mendengarkan tanpa menghakimi,
                        caramu diam-diam menguatkanku hanya dengan keberadaanmu.

                        Aku mencintai versimu yang penuh semangat saat bicara tentang mimpi-mimpimu,
                        dan versimu yang lelah tapi tetap berusaha saat hari tak berjalan sesuai rencana.
                        Aku mencintai caramu tumbuh —
                        caramu berproses, belajar, dan perlahan menjadi versi yang lebih baik dari dirimu sendiri.

                        Karena aku percaya, cinta yang sejati bukan yang datang dengan gemuruh,
                        tapi yang tetap bertahan dalam sunyi.
                </p>
            </div>
        </div>
        <div className="bab1-footer">
            4
        </div>
    </div>
  )
}

export default Bab3