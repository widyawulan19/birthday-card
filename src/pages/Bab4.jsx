import React from 'react'
import '../style/pages/Bab1.css'
import { IoChevronForwardOutline,IoChevronBackOutline  } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Bab4=()=> {
    const navigate = useNavigate();

    const handleNavigateToBab3 = () =>{
        navigate('/bab3');
    }

    const handleNavigateToBab5 = () =>{
        navigate('/bab5');
    }
  return (
    <div className='bab1-container'>
        <div className="bab1-header">
            <div className="btn" onClick={handleNavigateToBab3}>
                <IoChevronBackOutline/>
                Prev
            </div>
            <div className="btn" onClick={handleNavigateToBab5}>
                Next 
                <IoChevronForwardOutline/>
            </div>
        </div>
        <div className="bab1-main" style={{marginTop:'10px'}}>
            <div className="chapter-title">
                <p>Chapter 4</p>
                <h2>Tentang Kedewasaan yang Tumbuh Bersama</h2>
            </div>
            <div className="bab1-text">
                <div className="main-text">
                    {/* <img src={ch3} alt="" style={{height:'25vh', width:'20vw'}}/> */}
                   "Dewasa bukan tentang usia. Tapi tentang bagaimana seseorang belajar dari hidup."
                </div>
                 <p className='bab4-p'>
                    <span>text </span> Aku tahu kamu sedang belajar banyak hal.
                        Tentang hidup yang tidak selalu adil,
                        tentang impian yang tidak selalu datang sesuai rencana,
                        tentang luka yang tidak selalu bisa dijelaskan — tapi harus tetap dihadapi.

                        Aku melihat kamu belajar mengalah,
                        bukan karena kamu lemah,
                        tapi karena kamu cukup kuat untuk memilih kedamaian daripada ego.

                        Aku melihat kamu belajar memaafkan,
                        bukan karena orang lain pantas dimaafkan,
                        tapi karena kamu tahu hatimu tak layak terus membawa beban. <br />

                        <span>text </span>Aku tahu, menjadi dewasa bukan perjalanan yang mudah.
                        Kadang kamu harus terlihat tenang di luar,
                        padahal hatimu sedang berperang di dalam.
                        Kadang kamu harus tetap tersenyum di hadapan dunia,
                        padahal yang kamu butuhkan hanyalah pelukan yang menenangkan.

                        Dan meski tak selalu kamu tunjukkan,
                        aku tahu kamu berusaha sebaik mungkin menjadi versi terbaik dari dirimu.
                        Untuk dirimu sendiri. Untuk orang tuamu. Untuk masa depanmu.
                        Dan mungkin… untukku juga. <br />

                       <span>text </span> Aku bangga padamu.
                        Bukan karena kamu sempurna,
                        tapi karena kamu terus belajar. Karena kamu berani jujur pada prosesmu.

                        Semoga kamu terus tumbuh — bukan hanya menjadi lelaki yang kuat secara luar,
                        tapi juga tetap lembut dan bijak di dalam.
                        Seseorang yang tahu kapan harus menggenggam,
                        dan kapan harus melepaskan.

                </p>
            </div>
        </div>
        <div className="bab1-footer">
            5
        </div>
    </div>
  )
}

export default Bab4