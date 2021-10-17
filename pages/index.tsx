import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import banner from '../public/banner2022.jpg'
import Section from '../components/Section'


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="The AISAU at NeurIPS is a day of participant-driven discussions on AI Safety and Alignment during NeurIPS." />
                <title>AI Safety and Alignment Unconference</title>
            </Head>

            <h1>AI Safety and Alignment Unconference</h1>

            <Image src={banner} alt="New Orleans cityscape" />

            <Section title="Status">
                <p>
                    NeurIPS is online-only in 2020 and 2021 because of the COVID-19 pandemic. The AISAU is designed to be an in-person event, therefore not happening in these years. NeurIPS 2022 is planned to be <a href="https://blog.neurips.cc/2021/07/02/neurips-2021-deadline-extension-2/">in-person in New Orleans</a>. We hope for the unconference to happen then and there.
                </p>
            </Section>

            <Section title="Description">
                <p>
                The AI Safety and Alignment Unconference brings together persons interested in all aspects of AI safety and alignment, from technical AI safety problems to issues of governance and responsible use of AI, for one day during the NeurIPS week. As an unconference, the event aims to maximize valuable social interactions between participants, through free-form discussions, moderated discussion groups, one-on-ones, and lightning talks.
                </p>
            </Section>

            <Section title="Participation">
                <p>
                    <b><a href="https://groups.google.com/forum/#!forum/ai-safety-unconference/join">Join the email group</a></b>, and…
                    <ul>
                        <li>Start a thread for any topic you are interested in discussing.</li>
                        <li>Indicate if you’re interested in moderating or leading a discussion group.</li>
                        <li>Suggest background readings or share your thoughts on existing topics… What are you curious about?  What opinions or perspectives do you want to promote or challenge?</li>
                        <li>Post in the “one-on-one” thread and let other participants know which topics you are excited to discuss individually. As examples, last year’s discussion topics included “<i>Establishing trust in advanced AI systems</i>”, “<i>Concrete threat models</i>”, and “<i>Governance, policy, strategy</i>”.</li>
                    </ul>
                </p>

                <p><b>Give a Lightning Talk</b>: Lightning talks (5-6 minutes in length) take place during the lunch hour.</p>

                <p><b>Background readings</b>: We recommend <a href="https://vkrakovna.wordpress.com/ai-safety-resources/">Victoria Krakovna's AI safety resources</a> and the <a href="https://rohinshah.com/alignment-newsletter/">Alignment newsletter</a> as outlooks of the field.</p>
            </Section>

            <Section title="Testimonials">
                <ul>
                    <li><i>A great way to meet the best people in the area and propel daring ideas forward.</i> — <a href="https://www.fhi.ox.ac.uk/team/stuart-armstrong/">Stuart Armstrong</a></li>
                    <li><i>The event was a great place to meet others with shared research interests. I particularly enjoyed the small discussion groups that exposed me to new perspectives.</i> — <a href="https://www.gleave.me/">Adam Gleave</a></li>
                </ul>
            </Section>

            <Section title="Organisers">
                <ul>
                    <li>David Krueger</li>
                    <li>Orpheus Lummis</li>
                    <li>Joe Collman</li>
                </ul>
                <p>If you have any questions or thoughts, reach out to <a href="mailto:contact@aisafetyunconference.info">contact@aisafetyunconference.info</a>. If you're interested in organising the unconference, let's chat! You can send us <a href="https://docs.google.com/forms/d/e/1FAIpQLSe8XxXu1ma6ytGTAHAOglofr92Qq_YSttanBLJqqZ-jkcMfSw/viewform">anonymous feedback</a>.</p>
            </Section>

            <Section title="Previous years">
                <ul>
                    <li><Link href="/2019"><a>2019</a></Link></li>
                    <li><Link href="/2018"><a>2018</a></Link></li>
                </ul>
            </Section>

            <p id="lastupdate">(last update: 2021-10-07)</p>
            </>
    )
}

export default Home
