import React from 'react';

import "./Nameheader.css";

const Nameheader = () => {
	return (
		<div className="Nameheader text-white p-5">
			<p><em>Hey, I'm</em></p>
			<span><h1>BIPIN SHRESTHA</h1></span>
			<div className="blog">
				<div className="btn-group">
					<div className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						Blog
        			</div>
					<div className="dropdown-menu">
						<a className="dropdown-item" data-toggle="modal" data-target="#english">English</a>
						<a className="dropdown-item" data-toggle="modal" data-target="#nepali">नेपाली</a>
					</div>
				</div>
			</div>
			<div className="account_links">
				<a href="https://www.linkedin.com/in/bipinstha/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
				<a href="https://github.com/bipinstha7" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
				<a href="https://twitter.com/bipinstha7" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
			</div>


			{/* English Modal */}
			<div className="modal fade" id="english" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">I am planning to write articles.</h5>
						</div>
						<div className="modal-body">
							It might be on any topics: coding, tech, health, politics...
							But I don't know when I'm gonna start coz currently I am working on a side project and incase of writing people needs some encouragement. 
							<p className='lead'>If you are here then you might be my friend, colleague or a relative. Go on encourage me and be the part of awesomeness. If you are also interested in writing things; join with me - you'll enjoy my company :)</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#discourage" data-dismiss="modal">Discourage</button>
							<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#encourage" data-dismiss="modal">Encourage</button>
						</div>
					</div>
				</div>
			</div>

			{/* encourage */}
			<div className="modal fade" id="encourage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<p style={{fontSize:'1.25rem'}}>If you know me personally, shoot me a text through <strong>sms</strong>, <strong>facebook</strong>, <strong>viber</strong> or direct <strong>call</strong> but if you don't know me personally or you are not connected with me on social medias then simply head over to the <strong>contact secton</strong> and send me a <strong>text</strong>.</p>
							<p><strong>Have a good time sir / ma'am</strong></p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary "  data-toggle="modal" data-dismiss="modal">Got It</button>
						</div>
					</div>
				</div>
			</div>

			{/* discourage */}
			<div className="modal fade" id="discourage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<p style={{fontSize:'1.25rem'}}>Dude are you kidding me ? You are the first person I have ever experienced who is willing to discourage someone. Get some life man/women :) </p>
							<p>HaHaHa I'm just joking. I truly respect your opinion. I know people have their own perpective and you are a free citizen of a free country.</p>
							<p>If you have something to tell me that encouraged you to click discourage button then please simply send me a text through sms, facebook, viber, call or link from the contact section. </p>
							<p><strong>Have a good time sir / ma'am</strong></p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary "  data-toggle="modal" data-dismiss="modal">Let me think</button>
						</div>
					</div>
				</div>
			</div>

			{/* nepali Modal */}
			<div className="modal fade" id="nepali" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">म लेख (आर्टिकल) लेख्ने बिचार  गर्दै छु। </h5>
					</div>
						<div className="modal-body">
							लेख जुनसुकै बिषयमा नि हुन सक्छ : कोडिङ, प्रबिधी, स्वास्थ्य, राजनीति ।।।
							तर मैले कैले सुरु गर्छु भनेर मलाई थाहा छैन किनकी म ऐले साइड प्रोजेक्टमा काम गर्दै छु र लेख लेख्ने कुरामा मान्छेलाई प्रोत्साहन पनि चाहिन्छ।

							<p className='lead'>यदि तपाईं यहाँ आउनु भएको छ भने तपाईं मेरो साथी, सहयोगी अथवा नातेदार हुन सक्नुहुन्छ। मलाई प्रोत्साहन गर्नुहोस र यो सुखद कार्यको एउटा हिस्सा बन्नुहोस। यदी तपाईं पनि केही लेख्न इच्छुक हुनुहुन्छ भने म सँग सामेल हुनुहोस। तपाईंले म सँगको हातेमालोबाट आनन्द लिनुहुनेछ।
							 :)</p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#nepalidiscourage" data-dismiss="modal">हतोत्साहित गर्नुहोस</button>
							<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#nepaliencourage" data-dismiss="modal">प्रोत्साहन गर्नुहोस</button>
						</div>
					</div>
				</div>
			</div>

			{/* प्रोत्साहन गर्नुहोस */}
			<div className="modal fade" id="nepaliencourage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<p style={{fontSize:'1.25rem'}}>यदि तपाईं मलाई ब्यक्तिगत रुपमा चिन्नुहुन्छ भने मलाई <strong>फोन</strong> गर्न सक्नुहुन्छ,अथवा <strong>फेसबूक</strong>, <strong>भाईबरमा</strong> म्यासेज गर्न सक्नुहुन्छ। तर तपाईं मलाई ब्यक्तिगत रुपमा चिन्नुहुन्न अथवा म सँग फोन र सामाजिक सन्जालमा जोडिनु भएको छैन भने तपाईं यो वेबसाइटको <strong>contact सेक्सन</strong>मा जानुहोस र मलाई म्यासेज गर्नुहोस।</p>
							<p><strong>तपाईंको समय शुभ रहोस</strong></p>
							 

						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary "  data-toggle="modal" data-dismiss="modal">मैले बुझें</button>
						</div>
					</div>
				</div>
			</div>

			{/* हतोत्साहित गर्नुहोस */}
			<div className="modal fade" id="nepalidiscourage" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-body">
							<p style={{fontSize:'1.25rem'}}>मित्र के तपाई मजाक गर्दै हुनुहुन्छ? मैले ऐलेसम्म अनुभब गरेको व्यक्तिमा तपाई पहिलो व्यक्ति हुनुहुन्छ जसले कसैलाई हतोत्साहित गर्न तयार छ। मित्र अलि गम्भीर हुनुहोस। :) </p>
							<p>हाहाहा म मजाक गर्दै छु। म साच्चै नै तपाइको बिचारको आदर गर्छु। मलाई थाहा छ मान्छेको आफ्नै परिभासा हुन्छ र तपाई एक स्वतन्त्र  मुलुकको एक स्वतन्त्र नागरिक हुनुहुन्छ।</p>
							<p>यदि तपाई कसरि हतोत्साहित गर्नुहोस भन्ने बटन थिच्न प्रोत्साहित हुनुभयो भनेर मलाई भन्न चाहनुहुन्छ भने मलाई फोन, फेसबुक, भाईबर अथवा contact सेक्सनको लिङ्कबाट म्यासेज गर्न सक्नुहुन्छ। </p>
							<p><strong>तपाईंको समय शुभ रहोस</strong></p>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary "  data-toggle="modal" data-dismiss="modal">म सोच्दै छु </button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nameheader;