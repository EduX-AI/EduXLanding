import { ArrowRight } from '@phosphor-icons/react';
import Head from 'next/head';
import Link from 'next/link';
import Markdown from '~/components/Markdown';
import PageWrapper from '~/components/PageWrapper';
import { TeamMember, TeamMemberProps } from '~/components/TeamMember';

export const teamMembers: Array<TeamMemberProps> = [
	{
		name: 'Ahmed I',
		role: 'CEO & Chief Engineer',
		imageUrl: '/images/team/ahmed.png',
		socials: {
			twitter: 'https://x.com/AhmedIbreljic',
			github: 'https://github.com/AhmedIbreljic'
		}
	},
	{
		name: 'Joseph N',
		role: 'Lead Software Engineer',
		imageUrl: '/images/team/joseph.jpg',
		socials: {
			twitter: 'https://x.com/JosephNguyen02',
			github: 'https://github.com/yoseple22'
		}
	},
	{
		name: 'Daniel M',
		role: 'Lead Firmware Engineer',
		imageUrl: '/images/team/dan.jpeg',
		socials: {
			twitter: 'https://x.com/DanielMaienza',
			github: 'https://github.com/dmaienza'
		}
	},
];

const investors: Array<TeamMemberProps> = [
	{
		name: 'University of Massachusetts Boston',
		role: '',
		investmentRound: '',
		imageUrl: '/images/investors/umb.png'
	},
	{
		name: 'Paul English',
		role: '',
		investmentRound: '',
		imageUrl: '/images/investors/paul-e.png'
	},
	{
		name: 'University of Massachusetts Lowell',
		role: '',
		investmentRound: '',
		imageUrl: '/images/investors/uml.png'
	}
];

const advisors: Array<TeamMemberProps> = [
	{
		name: 'Daniel Heihn',
		role: '',
		investmentRound: '',
		imageUrl: '/images/investors/naval.jpg'
	}
];

export default function TeamPage() {
	return (
		<PageWrapper>
			<Markdown articleClassNames="mx-auto mt-32 prose-a:text-white">
				<Head>
					<title>Our Team - EduX</title>
					<meta name="description" content="Who's behind EduX?" />
				</Head>
				<div className="team-page relative mx-auto">
					<div
						className="bloom subtle egg-bloom-one -top-60 right-[-400px]"
						style={{ transform: 'scale(2)' }}
					/>
					<div className="relative z-10">
						<h1 className="fade-in-heading text-5xl leading-tight sm:leading-snug ">
							Higher education degree scheduling{' '}
							<span className="title-gradient">explorer</span>.
						</h1>
						<p className="animation-delay-2 fade-in-heading text-white/50 ">
							We believe that your educational journey shouldn't be hindered by rigid scheduling constraints. It should be flexible, student-centered, and designed to empower you to graduate in under four years.
						</p>
						<p className="animation-delay-2 fade-in-heading text-white/50 ">
							The academic data we generate during our educational pursuits is a crucial part of our lifelong legacy. With our cutting-edge technology, we ensure that this data remains easily accessible, adaptable across various educational environments, and ultimately owned by you.
						</p>
						<p className="animation-delay-2 fade-in-heading text-white/50 ">
							Our commitment guarantees that you have complete control over your academic records and degree plans. We empower you to shape your educational destiny at any scale, making it easier than ever to achieve your academic goals efficiently and effectively."
						</p>
						<Link
							href="/docs/product/resources/faq"
							className="animation-delay-3 fade-in-heading text-underline flex flex-row items-center text-gray-400 underline-offset-4 duration-150 hover:text-white"
						>
							<ArrowRight className="mr-2" />
							Read more
						</Link>
						<div className="fade-in-heading animation-delay-5">
							<h2 className="mt-10 text-2xl leading-relaxed sm:mt-20 ">
								Leadership
							</h2>
							<div className="my-10 grid grid-cols-2 gap-x-5 gap-y-10 xs:grid-cols-3 sm:grid-cols-4">
								{teamMembers.map((member) => (
									<TeamMember key={member.name} {...member} />
								))}
							</div>
							<p className="text-sm text-gray-400">
								... and all the awesome{' '}
								<Link
									href="https://github.com/AhmedIbreljic/EduXLanding/contributors"
									target="_blank"
									rel="noreferrer"
									className="oss-credit-gradient duration-200 hover:opacity-75"
								>
									contributors
								</Link>{' '}
								on GitHub.
							</p>
							<h2
								id="investors"
								className="mb-2 mt-10 text-2xl leading-relaxed sm:mt-20 "
							>
								Advisors
							</h2>
							<p className="text-sm text-gray-400 ">
								We're working with some of the greatest leaders and talent in the technology world. 
							</p>
							<div className="my-10 grid grid-cols-3 gap-x-5 gap-y-10 sm:grid-cols-5">
								{advisors.map((advisor) => (
									<TeamMember
										key={advisor.name + advisor.investmentRound}
										{...advisor}
									/>
								))}
							</div>

							<h2
								id="investors"
								className="mb-2 mt-10 text-2xl leading-relaxed sm:mt-20 "
							>
								Investors
							</h2>
							<p className="text-sm text-gray-400 ">
								We're backed by some of the greatest investors in Higher Education. 
							</p>
							<div className="my-10 grid grid-cols-3 gap-x-5 gap-y-10 sm:grid-cols-5">
								{investors.map((investor) => (
									<TeamMember
										key={investor.name + investor.investmentRound}
										{...investor}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</Markdown>
		</PageWrapper>
	);
}
