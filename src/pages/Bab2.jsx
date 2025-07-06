import React from 'react'
import '../style/pages/Bab1.css'
import { IoChevronForwardOutline,IoChevronBackOutline  } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Bab2=()=> {
    const navigate = useNavigate();

    const handleNavigateToBab1 = () =>{
        navigate('/bab1')
    }

    const handleNavigateToBab3 = () =>{
        navigate('/bab3')
    }

  return (
    <div className='bab1-container'>
        <div className="bab1-header">
            <div className="btn" onClick={handleNavigateToBab1}>
                <IoChevronBackOutline/>
                Prev
            </div>
            <div className="btn" onClick={handleNavigateToBab3}>
                Next 
                <IoChevronForwardOutline/>
            </div>
        </div>
        <div className="bab1-main">
            <div className="chapter-title">
                <p>Chapter 2</p>
                <h2>Pekerjaan, Mimpi, dan Jalan Panjang</h2>
            </div>
            <div className="bab1-text">
                <div className="main-text">
                     "Orang hebat bukan yang tak pernah lelah, tapi yang terus melangkah meski dunia tak selalu ramah."
                </div>
                 <p className='bab2-p'>
                    <span>text </span> Semoga pekerjaan yang kamu jalani tidak hanya memberimu penghasilan,
                        tapi juga kebahagiaan yang membuatmu tersenyum ketika bangun pagi,
                        dan rasa bangga yang membuatmu ingin terus bertumbuh meski hari terasa berat.

                        Semoga kamu tak hanya bekerja demi bertahan hidup,
                        tapi juga menemukan makna dalam setiap tugas yang kamu selesaikan.
                        Semoga kamu bisa melihat bahwa setiap hal kecil yang kamu lakukan — sekecil apa pun —
                        punya arti besar bagi dunia, bagi orang lain, dan terutama... bagi dirimu sendiri. <br />

                        <span>text </span> Semoga jalan kariermu terus terbuka luas,
                        dan kamu selalu dikelilingi oleh orang-orang yang melihat potensi dalam dirimu,
                        yang menghargai waktumu, dan yang percaya pada apa yang kamu bisa.

                        Jika suatu hari kamu merasa lelah dan mulai meragukan semuanya,
                        ingatlah bahwa kamu pernah bermimpi sampai sejauh ini.
                        Dan kamu punya hak untuk istirahat tanpa merasa bersalah.

                        Karena menjadi kuat bukan berarti tidak pernah lelah,
                        melainkan tahu kapan harus berhenti sejenak, menarik napas, dan berjalan lagi.

                        Semoga kamu tidak pernah lupa — bahwa istirahat adalah bagian dari perjalanan,
                        bukan kegagalan.

                        Dan aku? Aku akan selalu bangga padamu.
                        Dengan atau tanpa pencapaian, dengan atau tanpa gelar.
                        Karena aku tahu betapa kerasnya kamu berjuang.
                </p>
            </div>
        </div>
        <div className="bab1-footer">
            3
        </div>
    </div>
  )
}

export default Bab2