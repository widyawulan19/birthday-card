import React from 'react'
import '../style/pages/Bab1.css'
import ch1 from '../asset/ch1.jpg'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Bab1=()=> {
    const navigate = useNavigate();

    const handleNavigateToProlog = () =>{
        navigate('/prolog')
    }
    const handleNavigateToBab2 = () =>{
        navigate('/bab2')
    }

  return (
    <div className='bab1-container'>
        <div className="bab1-header">
            <div className="btn" onClick={handleNavigateToProlog}>
                <IoChevronBackOutline/>
                Prev
            </div>
            <div className="btn" onClick={handleNavigateToBab2}>
                Next 
                <IoChevronForwardOutline/>
            </div>
        </div>
        <div className="bab1-main">
            <div className="chapter-title">
                <p>Chapter 1</p>
                <h2>Sang Pemuda dan Hari Istimewa</h2>
            </div>
            <div className="bab1-text">
                <div className="main-text">
                    <img src={ch1} alt="" />
                      "Tak semua hari diciptakan sama. Ada hari yang dilahirkan hanya untuk satu nama."
                </div>
                 <p>
                    <span>text </span> Tanggal 8 Juli bukan sekadar tanggal. Ia adalah perayaan perjalanan. <br />
                    Seiring waktu berjalan, Ghiffari tumbuh dari anak kecil yang penuh rasa ingin tahu menjadi seorang lelaki yang penuh semangat, cinta, dan integritas.
                    Hari ini, di usia ke-26, aku ingin mengajakmu menoleh sejenak ke belakang — bukan untuk menyesali, tapi untuk menghargai sejauh apa kamu telah melangkah.
                </p>
            </div>
        </div>
        <div className="bab1-footer">
            2
        </div>
    </div>
  )
}

export default Bab1