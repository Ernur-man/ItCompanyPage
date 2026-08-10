import axios from 'axios'
import './first.less'
import { useRef, useState } from 'react'
import ModalWindow from'../../../components/ModalWindow'
export default function FirstBlock(){
    const [activeName, setActiveName] = useState('nameInp')
    const [activeMail, setActiveMail] = useState('mailInp')
    const [activeTable, setActiveTable] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const inpName = useRef(null)
    const inpMail = useRef(null)

    function movePlaceholderName(){
        const el = inpName.current
        setActiveName('active_name')
        el.focus()
    }
    function removePlaceholderName(){
        const el = inpName.current
        if (!el.value){
            setActiveName('nameInp')
        }
    }
    function movePlaceholderMail(){
        const el = inpMail.current
        setActiveMail('active_mail')
        el.focus()
    }
    function removePlaceholderMail(){
        const el = inpMail.current
        if (!el.value){
            setActiveMail('mailInp')
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!emailRegex.test(email) && name.length > 3){
            setEmail("Enter correct email!")
            setName("Name length must be higher 3!")
        };
        axios.post('https://formspree.io/f/xljrdpbg', {
            name: name,
            email: email
        })
        .then(()=>{
            setSuccess(true)
            setName("")
            setEmail("")
            setTimeout(()=>{
                setSuccess(false)
            }, 2000)
        })
        .catch((e)=>alert("Error: ", e))
    }
    return(
        <main className="contact">
            <div className="container">
                <h2>CONTACT US</h2>
                <article>
                    <aside className='form_aside' >
                        <h3>Drop us a line</h3>
                        <form onSubmit={handleSubmit} method="POST">
                            <p className={activeName} onClick={movePlaceholderName}>Name</p>
                            <input type="text" ref={inpName} onBlur={removePlaceholderName} value={name} onChange={(e)=>setName(e.target.value)} onClick={movePlaceholderName} required/>
                            <p className={activeMail} onClick={movePlaceholderMail}>Email*</p>
                            <input type="email" ref={inpMail} onClick={movePlaceholderMail} value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={removePlaceholderMail} required/>
                            <textarea placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                            <button>SEND</button>
                        </form>
                        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                        <ModalWindow active={success}/>
                    </aside>
                    <aside>
                        <h3>ITM Consulting</h3>
                        <p className='esp'>Location: Heidar Aliyev Street 2, 010000 Astana, Kazakhstan</p>
                        <p>Phone number (Telegram, WhatsApp): <a href="tel:+77773331234">+7(777) 333 1234</a></p>
                        <p className='esp'>Email: <a href="denis@itmcon.com">denis@itmcon.com</a></p>

                        <h4>Hours</h4>

                        <div style={{height: activeTable ? '250px': ''}}>
                            <h3>
                                <span onClick={() => setActiveTable(!activeTable)}>
                                    {activeTable
                                        ? 'Mon 09:00 am - 06:00 pm'
                                        : <>
                                            Open Today
                                            <p>09:00 am - 06:00 pm</p>
                                          </>
                                    }
                                </span>
                                <i className={`fa-solid ${activeTable ? 'fa-caret-up' : 'fa-caret-down'}`} onClick={() => setActiveTable(!activeTable)}></i>
                            </h3>
                            {
                                activeTable && (
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Tue</td>
                                                <td>09:00 am - 06:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Wed</td>
                                                <td>09:00 am - 06:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Thu</td>
                                                <td>09:00 am - 06:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Fri</td>
                                                <td>09:00 am - 06:00 pm</td>
                                            </tr>
                                            <tr>
                                                <td>Sat</td>
                                                <td>Closed</td>
                                            </tr>
                                            <tr>
                                                <td>Sun</td>
                                                <td>Closed</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )
                            }

                        </div>

                    </aside>
                </article>
            </div>
        </main>
    )
}
