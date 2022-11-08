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
                As of 2022, the AI Safety Unconference is now organized by the <i><a href="https://aisafetyevents.org/">AI Safety Events</a></i> organization.
                Please find the latest events information at <a href="https://aisafetyevents.org/events/">aisafetyevents.org/events/</a>.
            </Section>

            <Section title="Description">
                <p>
                    The AI Safety and Alignment Unconference brings together persons interested in all aspects of AI safety and alignment, from technical AI safety problems to issues of governance and responsible use of AI, for one day during the NeurIPS week. As an unconference, the event aims to maximize valuable social interactions between participants, through free-form discussions, moderated discussion groups, one-on-ones, and lightning talks.
                </p>
            </Section>

            <Section title="Previous events">
                <ul>
                    <li><Link href="/2019"><a>2019</a></Link></li>
                    <li><Link href="/2018"><a>2018</a></Link></li>
                </ul>
            </Section>

            <p id="lastupdate">(last update: 2022-11-08)</p>
        </>
    )
}

export default Home
