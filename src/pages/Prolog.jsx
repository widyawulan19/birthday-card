import React from 'react'
import '../style/pages/Prolog.css'
import { IoChevronForwardOutline,IoChevronBackOutline  } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Prolog=()=> {

    const navigate = useNavigate()

    const navigateToMain = () =>{
        navigate('/')
    }

    const navigateToBab1 = () =>{
        navigate('/bab1')
    }

  return (
    <div className='prolog-container'>
        <div className="prolog-header">
            <div className="btn" onClick={navigateToMain}>
                <IoChevronBackOutline/>
                Prev
            </div>
            <div className="btn" onClick={navigateToBab1}>
                Next 
                <IoChevronForwardOutline/>
            </div>
        </div>
        <div className="prolog-main">
            <h2>Prolog</h2>
            <div className="prolog-text">
                "Setiap jiwa yang lahir membawa takdir dan cerita—dan kisah ini dimulai pada tanggal 8 Juli 1999."
            </div>
            <p>
                <span>text</span> Pada zaman dahulu, di sebuah kota yang disinari matahari dengan lembut dan dibuai angin yang tenang, lahirlah seorang bayi laki-laki yang kelak akan membawa warna pada banyak hati. Namanya adalah Ghiffari Daffa Demaal. Ia bukan sekadar nama. Ia adalah makna.
                Dari tangis pertamanya, semesta tahu bahwa ia akan tumbuh menjadi seseorang yang berarti — bukan hanya untuk dirinya sendiri, tapi untuk dunia kecil bagi seseorang.
            </p>
        </div>
        <div className="prolog-footer">
            1
        </div>
    </div>
  )
}

export default Prolog