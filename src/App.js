import partner_dp from './images/DP/Vikas.png';

import twitter_icon from './images/social_icons/twitter.svg';
// import behance_icon from './images/social_icons/behance.svg';
// import dribbble_icon from './images/social_icons/dribbble.svg';
// import linkedin_icon from './images/social_icons/linkedin.svg';
import facebook_icon from './images/social_icons/facebook.svg';
import insta_icon from './images/social_icons/insta.svg';

import fatima_profile from './images/talent_card/Fatima.png'
import anshu_profile from './images/talent_card/Anshu.png'
import aquib_profile from './images/talent_card/Aquib.png'
import mehul_profile from './images/talent_card/Mehul.png'
import abhishek_profile from './images/talent_card/Abhishek.png'
import riten_profile from './images/talent_card/Riten.png'

import brand_design from './images/icons/branding_design.svg'
import creative_tool from './images/icons/creative_tool.svg'
import dashboard_design from './images/icons/dashboard_design.svg'
import landing_page_design from './images/icons/landing_page_design.svg'
import others from './images/icons/others.svg'
import ui_ux_design from './images/icons/ui_ux_design.svg'
import web_development from './images/icons/web_development.svg'

import big_cta from './images/CTA-web.png'
import mobile_cta from './images/CTA-mobile.png'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


function App() {
	return (
		<div className="main container my-5">
			<header className="partner-header">
				<div className="row justify-content-start align-items-center">
					<div className="col-xl-3 text-center">
						<div className="partner-header-dp">
							<img src={partner_dp} alt="" />
						</div>
					</div>
					<div className="col-xl-9">
						<div className="partner-header-deatils">

							<h1 className='text-primary fw-bold'>Vikas Singh</h1>
							<p className='text-lightgray fw-500 my-3'>Building AutopilotGeek and growing from $0 to $250k ARR l Helping Tech Startups, Entrepreneur, Coaches, TEDx, Fortune 500</p>
							<div className='social-icons pt-2 d-flex justify-content-start align-items-center'>
								<div className='mr-2'>
									<a href="https://twitter.com/learnwithvikash">
										<img src={twitter_icon} width={35} alt="" />
									</a>
								</div>

								{/* <div className='mr-2'>
									<a href="">
										<img src={behance_icon} width={35} alt="" />
									</a>
								</div>

								<div className='mr-2'>
									<a href="">
										<img src={dribbble_icon} width={35} alt="" />
									</a>
								</div> */}

								<div className='mr-2'>
									<a href="https://www.facebook.com/vikash4work24x7">
										<img src={facebook_icon} width={35} alt="" />
									</a>
								</div>

								<div className='mr-2'>
									<a href="https://www.instagram.com/stay_fool/">
										<img src={insta_icon} width={35} alt="" />
									</a>
								</div>

								{/* <div className='mr-2'>
									<a href="">
										<img src={linkedin_icon} width={35} alt="" />
									</a>
								</div> */}

							</div>
						</div>
					</div>
				</div>
			</header>


			
			<div className="row justify-content-center my-5 align-items-center">
				<div className="col-md-11">
					<div className='background-gradient'>
						<div className='background-white'>
							<div className="money-card card p-1">
								<div className="card-body text-center py-5">
									<div className='money-card-number'>
										<span className='text-gradient'>$6,849</span>
									</div>
									<div className="row justify-content-center">
										<div className="col-md-7">
											<div className='my-4'>
												<p className='fw-500 text-primary'>The total amount I have sent to skilled individuals on Fueler</p>
											</div>
										</div>
									</div>
									<div className='pt-3'>
										<a href="https://fueler.io/register" className='btn btn-primary px-4 btn-lg text-primary'>Get Started</a>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>


			<div className="row justify-content-center py-5 align-items-center">
				<div className="col-md-12">
					<div className="projects-done mb-4 pb-2">
						<div className="heading">
							<h1 className='fw-bold text-primary text-center'>100+ Projects Done in these domains</h1>
						</div>
					</div>

					
					<div className="d-flex justify-content-center flex-wrap align-items-center">
						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={ui_ux_design} height={35} alt="" />
									<h4 className='text-primary fw-500'>UI/UX Design</h4>
								
								</div>
							</div>
						</div>
						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={brand_design} height={35} alt="" />
									<h4 className='text-primary fw-500'>Branding Design</h4>
								</div>
							</div>
						</div>
						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={dashboard_design} height={35} alt="" />
									<h4 className='text-primary fw-500'>Dashboard Design</h4>
								</div>
							</div>
						</div>
						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={landing_page_design} height={35} alt="" />
									<h4 className='text-primary fw-500'>Landing Page Design</h4>
								</div>
							</div>
						</div>
						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={web_development} height={35} alt="" />
									<h4 className='text-primary fw-500'>Web Development</h4>
								</div>
							</div>
						</div>

						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={creative_tool} height={35} alt="" />
									<h4 className='text-primary fw-500'>Creative Tool</h4>
								</div>
							</div>
						</div>

						<div className="project-card card">
							<div className="card-body px-5">
								<div className="text-center">
									<img src={others} height={35} alt="" />
									<h4 className='text-primary fw-500'>Others</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>




			<div className="row justify-content-center py-5 align-items-center">
				<div className="col-md-11">
					<div className="projects-done mb-4 pb-2">
						<div className="heading">
							<h1 className='fw-bold text-primary text-center'>Talent Hired</h1>
						</div>
					</div>

					
					<div className="row talent-hired">

						<div className="col-md-4 mb-4">
							<div className='talent-hired-card'>
								<a href="https://fueler.io/ritendn">
									<img src={riten_profile} alt={'Riten Debnath'} className='mw-100' />
								</a>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div className='talent-hired-card'>
								<a href="https://fueler.io/saha">
									<img src={abhishek_profile} alt={'Abhishek Saha'} className='mw-100' />
								</a>
							</div>
						</div>


						<div className="col-md-4 mb-4">
							<div className='talent-hired-card'>
								<a href="https://fueler.io/ashandilya64">
									<img src={anshu_profile} alt={'Anshu Shandilya'} className='mw-100' />
								</a>
							</div>
						</div>


						<div className="col-md-4 mb-4">
							<div className='talent-hired-card'>
								<a href="https://fueler.io/aquib">
									<img src={aquib_profile} alt={'Aquib Jawed'} className='mw-100' />
								</a>
							</div>
						</div>


						<div className="col-md-4 mb-4">
							<div className='talent-hired-card'>
								<a href="https://fueler.io/mehulkundu">
									<img src={mehul_profile} alt={'Mehul Kundu'} className='mw-100' />
								</a>
							</div>
						</div>

						<div className="col-md-4 mb-4">
							<div className='talent-hired-card'>
								<a href="https://fueler.io/fatimalji">
									<img src={fatima_profile} alt={'Fatima Alji'} className='mw-100' />
								</a>
							</div>
						</div>

					</div>
					

				</div>
			</div>

			

			<div className="row justify-content-center py-5 align-items-center">
				<div className="col-md-11">
					<a href="https://fueler.io/register" >

						<div className='cta-big'>
							<img src={big_cta} className='mw-100' alt="" />
						</div>
						<div className='cta-small'>
							<img src={mobile_cta} className='mw-100' alt="" />
						</div>

					</a>
				</div>
			</div>
			





		</div>
	);
}

export default App;
