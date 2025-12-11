import { Link } from "react-router-dom"
import '../blocks/second.less'
export default function SecondBlock(){
    return(
        <>
            <main className="second">
                <div className="container">
                    <article>
                        <h3>About Us</h3>
                        <p>
                            ITM Consulting is your reliable partner in business consulting. We specialize in providing 
                            comprehensive solutions that help companies reach new heights, optimize processes and implement strategic goals.  
                            Our services include business process analysis, development of development strategies, 
                            implementation of innovative technologies, change management and increasing team efficiency. With our extensive experience and 
                            expert knowledge, we help our clients overcome complex challenges and take advantage of new opportunities in the market.
                        </p>
                        <h3>Why Us?</h3>
                        <p>
                            We appreciate the individual approach and close cooperation so that each strategy is maximally adapted to your needs. Together with us, you will open new horizons for your business and ensure its sustainable growth.
                            Our team is able to recognize hidden client opportunities, anticipate challenges, and create strategies that work in practice rather than remaining on paper.
                        </p>
                        <button>
                            <Link to="/SERVICES">Services</Link>
                        </button>
                    </article>
                </div>
            </main>
        </>
    )
}