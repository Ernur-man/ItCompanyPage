import './subscribe.less'
import { useRef, useState } from 'react'

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

    return(
        <>
            <main className="subscribe">
                <div className="container">
                    <form>
                        <h3>Subscribe</h3>
                        <input ref={inp} type="text" onBlur={removeMovePlaceholder} onClick={MovePLaceholder}/>
                        <p className={element} onClick={MovePLaceholder}>Email Address</p>
                        <button>Sign Up</button>
                    </form>
                </div>
            </main>
        </>
    )
}