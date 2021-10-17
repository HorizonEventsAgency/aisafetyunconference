import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

import banner from '../public/banner2018.jpg'
import Section from '../components/Section'

export default function Papers2018() {
    return (
        <>
            <Head>
                <title>AI Safety Unconference 2018</title>
            </Head>

            <h1>AI Safety Unconference 2018</h1>
            <Image src={banner} alt="Montréal landscape" />

            <Section title="AI safety papers accepted at NeurIPS 2018">
                <ul>
                    <li>Occam&apos;s razor is insufficient to infer the preferences of irrational agents (Armstrong & Mindermann) [<a href="https://arxiv.org/abs/1712.05812">arxiv</a>]</li>
                    <li>Where Do You Think You&apos;re Going?: Inferring Beliefs about Dynamics from Behavior (Reddy, Dragan & Levine) [<a href="https://arxiv.org/abs/1805.08010">arxiv</a>]</li>
                    <li>Learning Safe Policies with Expert Guidance (Huang, Wu, Precup & Cai) [<a href="https://arxiv.org/abs/1805.08313">arxiv</a>]</li>
                    <li>On Learning Intrinsic Rewards for Policy Gradient Methods (Zheng, Oh & Singh) [<a href="https://arxiv.org/abs/1804.06459">arxiv</a>]</li>
                    <li>Learning Task Specifications from Demonstrations (Vazquez-Chanlatte et al) [<a href="https://arxiv.org/abs/1710.03875">arxiv</a>]</li>
                    <li>Reward learning from human preferences and demonstrations in Atari (Leike et al) [<a href="https://arxiv.org/abs/1811.06521">arxiv</a>]</li>
                    <li>Negotiable Reinforcement Learning for Pareto Optimal Sequential Decision-Making (Desai, Critch, Russell) [<a href="https://papers.nips.cc/paper/7721-negotiable-reinforcement-learning-for-pareto-optimal-sequential-decision-making">papers.nips.c</a>]</li> 
                </ul>
            </Section>

            <p>Back to <Link href="/2018"><a>AISU 2018</a></Link>.</p>
            </>
    )
}
