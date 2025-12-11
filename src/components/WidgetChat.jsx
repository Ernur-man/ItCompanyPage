import { useState, useRef, use } from 'react'
import './widgetChat.less'

export default function WidgetChat(){
    const [activeModal, setActiveModal] = useState(false)
    const [activeName, setActiveName] = useState('nameInpModal')
    const [activeMail, setActiveMail] = useState('mailInpModal')

    const inpNameModal = useRef(null)
    const inpMailModal = useRef(null)
    
    function movePlaceholderNameModal(){
        const el = inpNameModal.current
        setActiveName('active_nameModal')
        el.focus()
    }
    function removePlaceholderNameModal(){
        const el = inpNameModal.current
        if (!el.value){
            setActiveName('nameInpModal')
        }
    }
    function movePlaceholderMailModal(){
        const el = inpMailModal.current
        setActiveMail('active_mailModal')
        el.focus()
    }
    function removePlaceholderMailModal(){
        const el = inpMailModal.current
        if (!el.value){
            setActiveMail('mailInpModal')
        }
    }

    function checkModal(e){
        const tag_Name = e.target.tagName
       if(tag_Name === "DIV" || tag_Name === "MAIN" ){
            setActiveModal(false)
       }
    }

    
    window.addEventListener('click', checkModal)
       
    return(
        <>
                <div className="widget" onClick={()=>setActiveModal(!activeModal)}>
                    <nav>
                        {!activeModal ? <i className="fa-solid fa-message"></i> : <i className="fa-solid fa-x"></i>}
                    </nav>
                </div>
                {
                    activeModal && (
                            <aside className='ModalWindow'>
                                {activeModal && (<i className="fa-solid fa-x" onClick={()=>setActiveModal(!activeModal)}></i>)}
                                <article>
                                    <h3>ITM Consulting</h3>
                                </article>
                                <form>
                                    <p className={activeName} onClick={movePlaceholderNameModal}>Name</p>
                                    <input type="text" ref={inpNameModal} onBlur={removePlaceholderNameModal} onClick={movePlaceholderNameModal}/>
                                    <p className={activeMail} onClick={movePlaceholderMailModal}>Email*</p>
                                    <input type="text" ref={inpMailModal} onClick={movePlaceholderMailModal} onBlur={removePlaceholderMailModal}/>
                                    <textarea placeholder='How can we help?*'></textarea>
                                    <button>SEND</button>
                                </form>
                                <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                            </aside>
                    )
                }
        </>
    )
}