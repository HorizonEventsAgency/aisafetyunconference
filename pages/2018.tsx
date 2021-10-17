import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import banner from '../public/banner2018.jpg'
import Section from '../components/Section'

export default function Home2018() {
    return (
        <>
            <Head>
                <meta name="description" content="The AI Safety Unconference 2018 is an afternoon of participant-driven discussions on AI safety during NeurIPS 2018." />
                <title>AI Safety Unconference 2018</title>
            </Head>

            <h1>AI Safety Unconference 2018</h1>
            <p>
            Saturday December 8, 1200-1800
                <br />
                <a href="https://goo.gl/maps/UtvmWSyKiVQ2">La Factry &mdash; 1111 Saint-Antoine St W, Montreal, QC H3C 1B3</a>
            </p>

            <Image src={banner} alt="Montréal landscape" />

            <Section title="Description">
                <p>
                The potential benefits and risks of AI technologies loom large on the future of the world. Creating safe AI, both in the near-term and long-term, is a multifaceted and complex endeavour. By bridging perspectives and coordinating better we can increase the likelihood of desired outcomes.
                </p>
                <p>The <i>AI Safety Unconference</i> brings together people interested in AI safety for an afternoon of participant-driven moderated discussions. The focus of the event being to maximize valuable social time, supported by a minimal structure. Discussion groups will self-assemble to cover multiple topics and intersections of the field — from specific technical AI safety problems to longer-term governance issues.
                </p>
            </Section>

            <Section title="Agenda">
                <p>
                    <ul>
                        <li>1200-1300 Welcome and lightning talks</li>
                        <li>1300-1315 Explanation of Cycles and the Wall of topics</li>
                        <li>1315-1515 Discussion cycles</li>
                        <li>1515-1530 Break and lightning talks</li>
                        <li>1530-1730 Discussion cycles</li>
                        <li>1730-1800 Closure</li>
                    </ul>
                    A vegan lunch will be provided, along with snacks & drinks.
                </p>
            </Section>

            <Section title="Registration">
                <p>Closed.</p>
            </Section>

            <Section title="Background readings">
                <p>
                    See Victoria Krakovna&apos;s up-to-date <a href="https://vkrakovna.wordpress.com/ai-safety-resources/">resource list on AI safety</a>.
                    Also, see the <Link href="/2018_papers"><a>the list of AI-safety related papers that were accepted to NeurIPS 2018</a></Link>.
                </p>
            </Section>

            <Section title="Attendees">
                <p>Based on early signups, here&apos;s a sample of the people you&apos;ll get to meet:</p>
                <ul>
                    <li>Adam Gleave	(CHAI, UC Berkeley)</li>
                    <li>Alex Ray (OpenAI)</li>
                    <li>Arushi Jain (Mila, McGill)</li>
                    <li>Daniel Filan (UC Berkeley)</li>
                    <li>Dylan Hadfield-Menell	(UC Berkeley, CHAI)</li>
                    <li>Eric Langlois	(University of Toronto, Vector Institute)</li>
                    <li>Ethan Perez (New York University)</li>
                    <li>Gillian Hadfield (University of Toronto, OpenAI, Vector Institute, CHAI)</li>
                    <li>Jacob Hilton (OpenAI)</li>
                    <li>Jan Leike	(DeepMind)</li>
                    <li>Matthew Rahtz (CHAI)</li>
                    <li>Rob Graham (McGill University)</li>
                    <li>Siddharth Reddy	(UC Berkeley)</li>
                    <li>Sören Mindermann (FHI, Vector Institute)</li>
                    <li>Stuart Armstrong	(FHI)</li>
                    <li>Susmit Jha (SRI International)</li>
                    <li>Victoria Krakovna	(DeepMind)</li>
                    <li>Yarin Gal	(University of Oxford)</li>
                </ul>
            </Section>

            <Section title="Lightning talks">
                <ul>
                    <li>Recursive reward modeling (<a href="https://arxiv.org/abs/1811.07871">arxiv.org/abs/1811.07871</a>) by Jan Leike (DeepMind)</li>
                    <li>Inverse reinforcement learning for video games (<a href="https://arxiv.org/abs/1810.10593">arxiv.org/abs/1810.10593</a>) by Aaron Tucker (CHAI)</li>
                    <li>Benchmarking Neural Network Robustness to Common Corruptions and Perturbations (<a href="https://openreview.net/forum?id=HJz6tiCqYm">openreview.net/forum?id=HJz6tiCqYm</a>) by Dan Hendrycks (UC Berkeley)</li>
                    <li>Measuring side effects (<a href="https://arxiv.org/abs/1806.01186">arxiv.org/abs/1806.01186</a>) by Victoria Krakovna (DeepMind)</li>
                    <li>Meta-learning for myopic agents by David Krueger (Mila)</li>
                </ul>
            </Section>

            <Section title="Organizers">
                <ul>
                    <li><a href="https://orpheuslummis.info">Orpheus Lummis</a> (Effective Altruism Québec)</li>
                    <li><a href="http://va.ug.hn/">Vaughn DiMarco</a> (MTLDATA)</li>
                    <li><a href="https://scholar.google.ca/citations?user=5Uz70IoAAAAJ&hl=en">David Krueger</a> (Mila)</li>
                </ul>
                <p>For questions or more info, reach out to the organizers: <a href="mailto:contact@aisafetyunconference.info">contact@aisafetyunconference.info</a>.</p>
            </Section>

            <Section title="Support">
                <p>Thanks to the following organisations or people for their support.</p>
                <ul>
                    <li><a href="https://app.effectivealtruism.org/funds/far-future">Long-Term Future Fund</a> part of <a href="https://app.effectivealtruism.org/funds/">EA Funds</a> for funding</li>
                    <li><a href="https://futureoflife.org/">Future of Life Institute</a> for funding</li>
                    <li><a href="https://nexalogy.com">Nexalogy</a> for funding</li>
                    <li><a href="http://maic.co/">MAIC</a> for guidance</li>
                    <li><a href="https://vkrakovna.wordpress.com/">Victoria Krakovna</a> (DeepMind) for feedback</li>
                </ul>
            </Section>

            <p id="lastupdate">(last update: 2018-12-09)</p>
            </>
    )
}

