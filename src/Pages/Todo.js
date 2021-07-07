import './FAQ.css'
import QnA from '../Components/QnA.js'

    export default function Todo (props) {
    return (
        <div className="text-white faq-section mt-4">
            <QnA
                qID="q1"
                question="Upcoming games:"
                answer={<p>
                    - Apex Legends<br />
                    - CSGO<br />
                    - Valorant<br />
                    - Legends of Runeterra<br />
                    - Rainbow Six Siege<br />
                    - RuneScape<br />
                    - PUBG<br />
                    - Path of Exile<br />
                    - World of Warcraft<br />
                    - Come with suggestions? (Note: It needs an accessible API)<br /></p>}
            />

            <QnA
                qID="q2"
                question="Changing region"
                answer={<p></p>}
            />

        </div>
    )
}