import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import banner from '../public/banner2019.jpg'
import Section from '../components/Section'

export default function Home2019() {
    return (
        <>

            <Head>
                <meta name="description" content="The AI Safety Unconference 2019 is a day of participant-driven discussions on AI Safety during NeurIPS." />
                <title>AI Safety Unconference 2019</title>
            </Head>

            <h1>AI Safety Unconference 2019</h1>

            <p>
            Monday December 9, 10:00-18:00
                <br />
                <a href="https://g.page/ThePaceAtCC?share">The Pace, 520 Alexander St, Vancouver, BC V6A 1C7</a>
            </p>

            <Image src={banner} alt="Vancouver landscape" />

            <Section title="Description">
                <p>
                The AI Safety Unconference brings together persons interested in all aspects of AI safety, from technical AI safety problems to issues of governance and responsible use of AI, for a day during the NeurIPS week. As an unconference, the event aims to maximize valuable social interactions between participants, through free-form discussions, moderated discussion groups, one-on-ones, lightning talks.
                </p>
            </Section>


            <Section title="Agenda">
                <p>
                    <ul>
                        <li>10:00-12:00 Welcome, one-on-ones, free discussion, posters</li>
                        <li>12:00-13:00 Lunch, lightning talks, explanation of afternoon</li>
                        <li>13:00-13:50 Moderated discussions 1</li>
                        <li>14:00-14:50 Moderated discussions 2</li>
                        <li>15:00-15:30 Coffee/tea break and poster session</li>
                        <li>15:30-16:20 Moderated discussions 3</li>
                        <li>16:30-17:20 Moderated discussions 4</li>
                        <li>17:30-18:00 Closure</li>
                    </ul>
                    A vegan lunch will be provided, along with snacks & coffee/tea. This agenda is tentative and we welcome feedback from participants.
                </p>
            </Section>


            <Section title="Participation">
                <p><b>Registration</b>: closed.</p>

                <p>
                    <b><a href="https://groups.google.com/forum/#!forum/ai-safety-unconference/join">Join the email group</a></b>, and…
                    <ul>
                        <li>Start a thread for any topic you are interested in discussing.</li>
                        <li>Indicate if you’re interested in moderating or leading a discussion group.</li>
                        <li>Suggest background readings or share your thoughts on existing topics… What are you curious about?  What opinions or perspectives do you want to promote or challenge?</li>
                        <li>Post in the “one-on-one” thread and let other participants know which topics you are excited to discuss individually. As examples, last year’s discussion topics included “<i>Establishing trust in advanced AI systems</i>”, “<i>Concrete threat models</i>”, and “<i>Governance, policy, strategy</i>”.</li>
                    </ul>
                </p>

                <p><b>Give a Lightning Talks</b>: Lightning talks (5-6 minutes in length) will take place during the lunch hour.</p>

                <p><b>Background readings</b>: We recommend <a href="https://vkrakovna.wordpress.com/ai-safety-resources/">Victoria Krakovna&apos;s AI safety resources</a> and the <a href="https://rohinshah.com/alignment-newsletter/">Alignment newsletter</a> as outlooks of the field.</p>

                <p><Link href="/2019_papers"><a>List of accepted papers related to AI safety at NeurIPS 2019</a></Link> (crowdsourced on email group).</p>

            </Section>

            <Section title="Testimonials">
                <ul>
                    <li><i>A great way to meet the best people in the area and propel daring ideas forward.</i> — Stuart Armstrong</li>
                    <li><i>The event was a great place to meet others with shared research interests. I particularly enjoyed the small discussion groups that exposed me to new perspectives.</i> — Adam Gleave</li>
                </ul>
            </Section>


            <Section title="Organisers">
                <ul>
                    <li>David Krueger (Mila)</li>
                    <li>Orpheus Lummis (Effective Altruism Québec)</li>
                    <li>Gretchen Krueger (OpenAI)</li>
                    <li>Richard Mallah (FLI)</li>
                    <li>Joe Collman</li>
                </ul>
                <p>If you have any questions or thoughts, reach out to <a href="mailto:contact@aisafetyunconference.info">contact@aisafetyunconference.info</a>. If you&apos;re interested in organising the unconference, let&apos;s chat!</p>
                <p>You can send us <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8XxXu1ma6ytGTAHAOglofr92Qq_YSttanBLJqqZ-jkcMfSw/viewform">anonymous feedback</a>.</p>
            </Section>


            <Section title="Support">
                <p>Thanks to the following organisations for their support.</p>
                <ul>
                    <li><a href="https://ea-foundation.org/">Effective Altruism Foundation</a></li>
                    <li><a href="http://survivalandflourishing.fund/">Survival and Flourishing Fund</a></li>
                    <li><a href="https://futureoflife.org/">Future of Life Institute</a></li>
                </ul>
            </Section>

            <Section title="Other years">
                <ul>
                    <li><Link href="/2018"><a>2018</a></Link></li>
                </ul>
            </Section>

            <p id="lastupdate">(last update: 2019-12-07)</p>

            </>
    )
}
