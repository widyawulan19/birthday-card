import React from 'react'
import '../style/pages/Bab1.css'
import endch from '../asset/end.png'
import { IoChevronForwardOutline,IoChevronBackOutline  } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Kesimpulan() {
    const navigate = useNavigate()
    const handleNavigateToBab5 = () =>{
        navigate('/bab5')
    }

  return (
    <div className='bab1-container'>
        <div className="bab1-header">
            <div className="btn" onClick={handleNavigateToBab5}>
                <IoChevronBackOutline/>
                Prev
            </div>
            {/* <div className="btn" onClick={handleNavigateToKesimpulan}>
                Next 
                <IoChevronForwardOutline/>
            </div> */}
        </div>
        <div className="bab1-main" style={{marginTop:'10px'}}>
            <div className="chapter-title">
                <p>Kesimpulan </p>
                <h2>Terima Kasih Sudah Lahir</h2>
            </div>
            <div className="bab1-text">
                <div className="main-text">
                    <img src={endch} alt="" className='img-kesimpulan'/>
                   "Dari seluruh kemungkinan manusia yang bisa kulibatkan dalam hidupku—semesta memilih kamu. Dan aku bersyukur."
                </div>
                 <p style={{paddingTop:'20px'}}>
                    <span>text </span> Selamat ulang tahun, Ghiffari Daffa Demaal.
                    Untuk usia barumu, semoga Tuhan selalu menyertaimu.
                    Semoga kamu terus kuat, terus baik, dan terus jadi kamu — yang luar biasa.

                    Aku di sini. Selalu.

                </p>
            </div>
        </div>
        <div className="bab1-footer">
            7
        </div>
    </div>
  )
}

export default Kesimpulan