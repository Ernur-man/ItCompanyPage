import './first.less'
import service from '../../../assets/service.webp'
import laptop from '../../../assets/laptop.webp'
import plain from '../../../assets/plain.webp'

export default function FirstBlock(){
    return(
        <>
            <main className="services">
                <div className="container">
                    <h2>SERVICES</h2>
                    <article>
                        <nav>
                            <h3>Consulting in the aviation sector</h3>
                            <img src={plain}/>
                            <p>Our company has extensive experience in the field of air traffic control and integration of IT solutions for this industry. We can offer the following services:</p>

                            <span>1. Consulting services in the field of air traffic control - selection and integration of navigation and communication equipment from the world's leading manufacturers.</span>
                            <span>2. Audit and optimization of systems - a comprehensive analysis of existing air traffic control systems with recommendations for improving their efficiency and safety.</span>
                            <span>3. Staff training - conducting trainings and master classes for specialists aimed at professional development and mastering new technologies.</span>
                            <span>4. Integration of IT solutions- turnkey software development and implementation, adaptation and integration with existing customer systems.</span>
                            <span>5. Execution and implementation of plans, projects and cooperation agreements with foreign organizations in the field of air traffic control. </span>
                        </nav>
                        <nav>
                            <h3>IT consulting</h3>
                            <img src={laptop}/>
                            <p>The IT consulting services we offer will help your business become more technologically advanced, efficient and competitive:</p>

                            <span>1. Analysis of the IT infrastructure Assessment of the current state of IT systems, identification of bottlenecks, identification of potential for optimization and modernization of infrastructure.</span>
                            <span>2. Developing an IT strategy Create a long-term plan for the introduction of new technologies that meet your company's business goals, as well as identify priority projects.</span>
                            <span>3. Introduction and integration of technologies Support in the selection, implementation and integration of modern software solutions, cloud platforms, security systems and other technologies.</span>
                            <span>4. IT planning and project management Assistance in planning resources, deadlines and budget for the implementation of IT projects, as well as managing their execution.</span>
                            <span>5. Information systems security Development and implementation of data protection strategies, audit of security systems, recommendations for improving the level of information protection.</span>
                            <span>6. Migration to the cloud and digital transformation Consultations on the transition to cloud platforms, automation and optimization of business processes using modern technologies.</span>
                            <span>7. Training and professional development of employees Conducting trainings and master classes on new systems and technologies for your staff.</span>
                            <span>8. Support and maintenance of IT infrastructure Technical support, maintenance of servers, network, and software solutions for business continuity.</span>
                        </nav>
                        <nav>
                            <h3>HR consulting</h3>
                            <img src={service}/>
                            <p>HR consulting is a mentor for businesses that helps unlock the potential of a team and make an organization more efficient. It is needed to avoid mistakes in the selection of employees, increase motivation, develop the right personnel management strategy and adapt the company to modern market challenges. We offer the following services:</p>

                            <span>1. Analytics and audit of personnel processes- we examine current practices, identify weaknesses and areas for growth.</span>
                            <span>2. Development of a personnel management strategy- we help to create a personnel development plan, taking into account business goals.</span>
                            <span>3. Staff selection and hiring- we look for talented candidates, conduct interviews and evaluate competencies.</span>
                            <span>4. Employee training and development- we develop training programs for the team to grow professionally.</span>
                            <span>5. Staff Performance Assessment- we are implementing evaluation and motivation systems to encourage everyone's contribution.</span>
                            <span>6. Corporate culture and organizational structure change- we help to create a positive atmosphere and optimal work models.</span>
                            <span>7. Development of HR policies and procedures- we create regulatory documents that comply with legislation and best practices.</span>
                            <span>8. Consulting on labor relations issues- we solve difficulties with employment contracts, conflicts and dismissals.</span>
                            <span>9. Introduction of modern HR technologies- automation of processes, use of cloud systems for data management.</span>
                        </nav>
                    </article>
                </div>
            </main>
        </>
    )
}