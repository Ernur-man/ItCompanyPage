import './subscribe.less'
import { useRef, useState } from 'react'

import axios from 'axios'

export default function Subscribe(){
    const inp = useRef(null)
    const [element, setElement] = useState('flexible')

    function MovePLaceholder(){
        const el = inp.current
        setElement('active_good')
        el.focus()  
    }
    function removeMovePlaceholder(){
        if(!inp.current.value){
            setElement('flexible')
        }   
    }

    async function sendWorkflow(e){
        e.preventDefault()
        try{
            const response = await axios.post('https://ai.mnu.kz/webhook-test/subscribe-form', {
                email: inp.current.value,
                date: new Date().toISOString(),
                source: 'footer_form'
            })
            console.log('Данные отправлены!', response.data);
        }
        catch(err){
            console.log(err)
        }
    }

    return(
        <>
            <main className="subscribe">
                <div className="container">
                    <form>
                        <h3>Subscribe</h3>
                        <input ref={inp} type="text" onBlur={removeMovePlaceholder} onClick={MovePLaceholder}/>
                        <p className={element} onClick={MovePLaceholder}>Email Address</p>
                        <button onClick={sendWorkflow}>Sign Up</button>
                    </form>
                </div>
            </main>
        </>
    )
}