import '../blocks/first.less'
import aboutfon from  '../../../assets/AboutMainFon.webp'
export default function FirstBlock(){
    return(
        <>
            <main className="firstAbout">
                <div className="container">
                    <img src={aboutfon}/>
                    <h2>Our individual approach is your success</h2>
                    <article>
                        <aside>
                            <p>
                                In our company, we attach special importance to an individual approach to each project. We carefully analyze the unique needs and goals of our customers in order to develop the most effective and personalized solutions. Each case is considered as a unique challenge that requires careful study and a creative approach. Our specialists work closely with clients to understand their business strategy, market features, and expectations. Thanks to this, we can offer innovative and task- specific solutions that best meet the needs of each client and help achieve our goals with a high level of satisfaction.
                            </p>
                            <p>
                                <span>The main advantages of our company: <br /></span>
                                <li>1.Individual approach- we deeply understand the unique needs of each client and develop strategies that best meet their goals.</li>
                                <li>2.Experienced team- our specialists have rich professional experience and expertise in various business areas.</li>
                                <li>3.Practical orientation- we do not just advise, but offer real solutions that bring measurable results.</li>
                                <li>4.Innovative methods- we use modern analytical tools and advanced technologies to achieve maximum efficiency.</li>
                                <li>5.We are building long- term partnerships- not only one project is important to us, but the development of your business in the future.</li>
                                <li>6.Flexibility and adaptability- we respond quickly to market changes and customer needs, offering timely adjustments.</li>
                            </p>
                        </aside>
                        <aside>
                            <h3>Why choose Us</h3>
                            <p>
                                We appreciate the individual approach and close cooperation so that each strategy is maximally adapted to your needs. Together with us, you will open new horizons for your business and ensure its sustainable growth.
                                Our team is able to recognize hidden client opportunities, anticipate challenges, and create strategies that work in practice rather than remaining on paper.
                            </p>
                            <button>OUR SERVICES</button>
                        </aside>
                    </article>
                </div>
            </main>
        </>
    )
}