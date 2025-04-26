import { useState } from "react";
const CONTACT_LINKS = [
	{ category: "Phone Number", link: { label: "+234 9012345678", href: "" } },
	{ category: "Our Location", link: { label: "Lagos, Nigeria.", href: "" } },
	{ category: "Email", link: { label: "veoctech@gmail.com", href: "" } },
	{ category: "Social Media", link: { label: "+234 9012345678", href: "" } },
] as const;

const ContactUs = () => {
	const [fullName, setFullName] = useState("");
	const [projectName, setProjectName] = useState("");
	const [description, setDescription] = useState("");
	const [timeline, setTimeline] = useState("");

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();

		const subject = encodeURIComponent(projectName);
		const body = encodeURIComponent(
			`Full Name: ${fullName}\nDescription: ${description}\nTimeline: ${timeline}`
		);

		window.location.href = `mailto:veoctech@gmail.com?subject=${subject}&body=${body}`;
	};

	return (
		<section className="contact-us">
			<div className="contact-us__ellipse" />
			<div className="contact-us__ellipse" />
			<div className="contact-us__container">
				<div className="contact-us__container__top">
					<h2 className="mb-4 text-md-center">
						Let&apos;s Build Something Together
					</h2>
					<button className="mx-md-auto">Book your spot now</button>
				</div>
				<div className="contact-us__container__bottom">
					<div className="contact-us__container__bottom__left">
						<div className="contact-us__container__bottom__left__header">
							<h2 className="mb-2">
								We are always ready
								<br /> to help you and
								<br /> answer your
								<br /> questions
							</h2>
							<p>
								Our team is always ready to answer all your
								questions
								<br /> and help with any problem or task you
								need solved.
							</p>
						</div>
						<div className="contact-us__container__bottom__left__links">
							{CONTACT_LINKS.map(
								({ category, link: { label, href } }) => (
									<div
										key={category}
										className="contact-us__container__bottom__left__links__item"
									>
										<span className="fw-semibold mb-3">
											{category}
										</span>
										<a
											href={href}
											title={category}
											className=""
										>
											<span>{label}</span>
										</a>
									</div>
								)
							)}
						</div>
					</div>
					<div className="contact-us__container__bottom__right">
						<h3 className="mb-2">Get In Touch</h3>
						<p>
							State what you need us to do and your
							<br /> preferred timeline which you need it
							<br /> completed
						</p>
						<form onSubmit={handleSubmit} className="mt-4">
							<div>
								<input
									type="text"
									id="fullName"
									placeholder="Full Name"
									value={fullName}
									onChange={(e) =>
										setFullName(e.target.value)
									}
								/>
							</div>
							<div>
								<input
									type="text"
									id="projectName"
									placeholder="Project name"
									value={projectName}
									onChange={(e) =>
										setProjectName(e.target.value)
									}
								/>
							</div>
							<div>
								<input
									type="text"
									id="description"
									placeholder="Description"
									value={description}
									onChange={(e) =>
										setDescription(e.target.value)
									}
								/>
							</div>
							<div>
								<input
									type="text"
									id="timeline"
									placeholder="Timeline"
									value={timeline}
									onChange={(e) =>
										setTimeline(e.target.value)
									}
								/>
							</div>
							<button type="submit" className="mt-4">
								Send a message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
