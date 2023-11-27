import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import banner from '../public/banner2019.jpg'
import Section from '../components/Section'

export default function Papers2019() {
    return <>
    <Head>
        <title>AI Safety Unconference 2019 - AI safety papers accepted at NeurIPS 2019</title>
    </Head>

    <h1>AI Safety Unconference 2019</h1>
    <Image src={banner} alt="Vancouver landscape" />

    <Section title="AI safety papers accepted at NeurIPS 2019">
        <p>The list is crowdsourced from the <a href="https://groups.google.com/forum/#!forum/ai-safety-unconference">email group</a>, but currently underrepresents the amount of AI safety-related papers at NeurIPS. Please send an email to the thread with your suggestions.</p>
        <ul>
            <li><a href="https://arxiv.org/abs/1906.12340">Using Self-Supervised Learning Can Improve Model Robustness and Uncertainty</a> (Dan Hendrycks, Mantas Mazeika, Saurav Kadavath, Dawn Song)</li>
            <li><a href="https://cdn.openai.com/safexp-short.pdf">Benchmarking Safe Exploration in Deep Reinforcement Learning</a> (Alex Ray, Joshua Achiam, Dario Amodei)</li>
            <li><a href="https://papers.nips.cc/paper/9228-functional-adversarial-attacks">Functional Adversarial Attacks</a> (Cassidy Laidlaw, Soheil Feizi)</li>
            <li><a href="https://arxiv.org/abs/1905.10615">Adversarial Policies: Attacking Deep Reinforcement Learning</a> (Gleave, Dennis, Kant, Wild, Levine, Russell)</li>
        </ul>
    </Section>
    <p>See also <Link href="/2018_papers">2018 papers list</Link>.</p>
    <p>Return to <Link href="/2019">AISU 2019</Link>.</p>
    </>;
}
