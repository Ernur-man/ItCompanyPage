import { Link } from "react-router-dom"
import './first.less'
import Header from '../../../components/Header'
export default function FirstBlock(){
    return(
        <>
            
            <main className="main-first-block">
                <div className="container">
                    <article>
                        <span>STRATEGY.<p>HEIGHT.</p><br/><p>SUCCESS.</p></span>
                        <button><Link to="/CONTACT">Contact Us</Link></button>
                    </article>
                </div>
            </main>
        </>
    )
}