import { Link } from "react-router-dom"
import './header.less'
import { useEffect, useState } from "react"
import logo from '../assets/LOGO.webp'


export default function Header(){
    const [active, setActive] = useState('')
    const [activeHeader, setActiveHeader] = useState(false)
    const menu = ["HOME", "ABOUT", "SERVICES", "CONTACT"]
    
    useEffect(()=>{
        if(active){
            localStorage.setItem('nav',active)
        }
        
    },[active])

    useEffect(()=>{
        const newActive = localStorage.getItem('nav')
        setActive(newActive)
    },[])

    function removeHeader(e){
        const tag_Name = e.target.tagName
        if(tag_Name === "DIV" || tag_Name === "MAIN"){
            setActiveHeader(false)
        }
    }
    window.addEventListener('click', removeHeader)
    return(
        <>
            {
                activeHeader && (
                    <aside className="header-aside">
                        <div className="container">
                            <menu>
                                {
                                    menu.map((el,i)=>(
                                        <Link key={i} to={el == "HOME" ? "itmnew2/" : `itmnew2/${el}`} className={active === el ? "active" : "good"} onClick={()=>setActive(el)}>{el}</Link>
                                    ))
                                }
                            </menu>
                        </div>
                    </aside>
                )
            }
            <div className="nav-bar" onClick={()=>setActiveHeader(!activeHeader)}>
                <nav></nav>
                <nav></nav>
                <nav></nav>
            </div>
            <header>
                <div className="container">
                    <img src={logo}/>
                    <menu>
                        {
                            menu.map((el,i)=>(
                                <Link key={i} to={el == "/HOME" ? "itmnew2/HOME" : `itmnew2/${el}`} className={active === el ? "active" : ""} onClick={()=>setActive(el)}>{el}</Link>
                            ))
                        }
                    </menu>
                </div>
            </header>
        </>
    )
}