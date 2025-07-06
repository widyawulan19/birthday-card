import React from 'react'
import '../style/pages/Bab1.css'
import finalCh from '../asset/finalCh.jpg'
import { IoChevronForwardOutline,IoChevronBackOutline  } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function Bab5() {
    const navigate = useNavigate()
    const handleNavigateToBab4 = () =>{
        navigate('/bab4')
    }
    const handleNavigateToKesimpulan = () =>{
        navigate('/kesimpulan')
    }
  return (
    <div className='bab1-container'>
            <div className="bab1-header">
                <div className="btn" onClick={handleNavigateToBab4}>
                    <IoChevronBackOutline/>
                    Prev
                </div>
                <div className="btn" onClick={handleNavigateToKesimpulan}>
                    Next 
                    <IoChevronForwardOutline/>
                </div>
            </div>
            <div className="bab1-main" style={{marginTop:'10px'}}>
                <div className="chapter-title">
                    <p>Final Chapter </p>
                    <h2></h2>
                </div>
                <div className="bab1-text">
                    <div className="main-text">
                        <img src={finalCh} alt="" className='img-bab5'/>
                       "Karena beberapa orang tidak hanya singgah. Mereka tinggal. Dan kamu, adalah tempat pulang."
                    </div>
                     <p className='bab5-p' >
                        <span>text </span> Hari ini mungkin hanya satu dari sekian banyak hari ulang tahunmu. Tapi untukku, ini adalah perayaan akan keberadaanmu — yang begitu berarti.
                        Terima kasih sudah hidup. Terima kasih sudah menjadi kamu.
                        Dan terima kasih... sudah mengizinkan aku menjadi bagian dari cerita hidupmu.
    
                    </p>
                </div>
            </div>
            <div className="bab1-footer">
                6
            </div>
        </div>
  )
}

export default Bab5