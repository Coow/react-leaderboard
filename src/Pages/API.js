import QnA from '../Components/QnA.js'
import './FAQ.css'


export default function () {
    return (
        <div className="text-white">
            <div className="faq-section py-8">
                <QnA
                    qID="q1"
                    question="Get Common Guilds"
                    answer={<p><code>POST api.mrcow.xyz/riotboard/v2/guilds<br />
                    Body: &#123; guilds: [guildID1, guildID2] &#125;</code><br />
                        <br />
                    Max array length: 200
                    </p>}
                />
                <QnA
                    qID="q2"
                    question="Get Leaderboard"
                    answer={<p><code>GET api.mrcow.xyz/riotboard/v2/guild/$guildID/$board</code><br />
                    Returns unsorted JSON of leaderboard<br />
                    Allowed Boards: soloq, flex, tft<br />
                    </p>}
                />
                <QnA
                    qID="q3"
                    question="Rate Limit"
                    answer={<p>Currently no rate limit has been added, but if it becomes an issue it might get added.
                    </p>}
                />
            </div>
        </div>
    )
}