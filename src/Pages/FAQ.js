import './FAQ.css'

import QnA from '../Components/QnA.js'

import { FaMinus, FaPlus } from 'react-icons/fa'

export default function () {
    return (
        <div className="text-white faq-section mt-4 pb-8">
            <QnA
                qID="q1"
                question="How do I add myself to a Leaderboard?"
                answer={<p>Head to the Discord's servers bot channel. (Usually named #bot-commands or something similar) <br />
                Here type in: <code className="">&LR &lt;board&gt; add &lt;Account Name&gt;</code> <br />
                Example: <code className="">&LR soloq add G2 Caps</code> <br /><br />
                Head over to the <a href="/Commands">Commands Page</a> for a full list of avaliable commands
                </p>}
            />

            <QnA
                qID="q2"
                question="How often does the Leaderboards update?"
                answer={<p>The Leaderboards updates roughly every 30 minutes. <br />
                In Discord check when the message was sent, then add roughly 30 minutes. <br />
                On the website there is countdown timer at the top of the leaderboard counting down to next estimated update.<br />
                Premium servers can update <span className="italic">on demand!</span> by the use of the <code>&LR update &lt;board&gt;</code> in the associated Leaderboard channel</p>}
            />

            <QnA
                qID="q8"
                question="How do I change region?"
                answer={<p>The Leaderboards updates roughly every 30 minutes. <br />
                In Discord check when the message was sent, then add roughly 30 minutes. <br />
                On the website there is countdown timer at the top of the leaderboard counting down to next estimated update.<br />
                Premium servers can update <span className="italic">on demand!</span> by the use of the <code>&LR update &lt;board&gt;</code> in the associated Leaderboard channel</p>}
            />

            <QnA
                qID="q3"
                question="What games is currently supported?"
                answer={<p>Currently supported: <br />
                - LoL Solo Queue <br />
                - LoL Flex Queue <br />
                - TeamFight Tactics <br /><br />
                Planned or in progress: <br />
                - Apex Legends<br />
                - CSGO<br />
                - Valorant<br />
                - Legends of Runeterra<br />
                - Rainbow Six Siege<br />
                - RuneScape<br />
                - PUBG<br />
                - Path of Exile<br />
                - World of Warcraft<br />
                - Come with suggestions? (Note: It needs an accessible API)<br />
                </p>}
            />

            <QnA
                qID="q4"
                question="What does Premium give me?"
                answer={<p>Currently Premium allows you to have up to 200 people per leaderboard, while Non-Premium is maximum 25 per leaderboard. <br />
                It also allows you to update the Leaderboards on demand, meaning you can flex on your friends even quicker when you finally get out of bronze! <br />
                In the future there might also be featured Discord servers on the front-page of this site aswell. This is a huge maybe!
                </p>}
            />

            <QnA
                qID="q5"
                question="What data is stored?"
                answer={<p>
                    I am personally not a fan of saving data, so I store very minimal amounts.<br />
                Website: <br />
                - Discord ID of who logs in and when. <br />
                Discord Bot: <br />
                - Username & User ID of the Game Account <br />
                - Discord ID of whom added the Game Account <br />
                - When the Game Account was added <br /> <br />
                If the Game Account gets removed, the data is also removed
                </p>}
            />

            <QnA
                qID="q7"
                question="Why U.GG?"
                answer={<p>Cowlandia is in no way sponsored or affiliated in anyway with U.GG. <br /> The reason it is chosen is very simple; It's the service I personally prefer and use.</p>}
            />

            <QnA
                qID="q6"
                question="I have another issue..."
                answer={<p>Sure! Hit me up on <a href="twitter.com/anmagicalcow" target="_blank">Twitter</a> or try contacting me on Discord: <code>Cow#8079</code></p>}
            />
        </div>
    )
}