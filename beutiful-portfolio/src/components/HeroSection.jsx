
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";


const TypewriterSkills = () => {
	const [skillIndex, setSkillIndex] = useState(0);
	const [displayed, setDisplayed] = useState("");
	const [typing, setTyping] = useState(true);

	useEffect(() => {
		let timeout;
		// Initial delay after intro animation (3.5s)
		if (displayed === "" && typing && skillIndex === 0) {
			timeout = setTimeout(() => {
				setDisplayed(skills[skillIndex].slice(0, 1));
			}, 3500); // Wait for intro animation to finish
		} else if (typing) {
			if (displayed.length < skills[skillIndex].length) {
				timeout = setTimeout(() => {
					setDisplayed(skills[skillIndex].slice(0, displayed.length + 1));
				}, 200);
			} else {
				timeout = setTimeout(() => setTyping(false), 1800);
			}
		} else {
			if (displayed.length > 0) {
				timeout = setTimeout(() => {
					setDisplayed(skills[skillIndex].slice(0, displayed.length - 1));
				}, 100);
			} else {
				timeout = setTimeout(() => {
					setSkillIndex((prev) => (prev + 1) % skills.length);
					setTyping(true);
				}, 300);
			}
		}
		return () => clearTimeout(timeout);
	}, [displayed, typing, skillIndex]);

	return (
		<div className="h-12 md:h-16 flex items-center justify-center">
			<span className="text-3xl md:text-5xl text-primary font-bold">
				{displayed}
				<span className="animate-blink">|</span>
			</span>
		</div>
	);
};

const skills = [
  "Software Engineer",
	"Frontend developer",
	"Full-Stack developer",
];

const AnimatedSkills = () => {
	const [index, setIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const showTimeout = setTimeout(() => setVisible(false), 1800);
		const nextTimeout = setTimeout(() => {
			setIndex((prev) => (prev + 1) % skills.length);
			setVisible(true);
		}, 2200);
		return () => {
			clearTimeout(showTimeout);
			clearTimeout(nextTimeout);
		};
	}, [index, visible]);

	return (
		<div className="h-8 md:h-10 flex items-center justify-center">
			<span
				className={`text-lg md:text-xl text-primary font-semibold transition-opacity duration-400 ease-in-out ${
					visible ? "opacity-100" : "opacity-0"
				}`}
			>
				{skills[index]}
			</span>
		</div>
	);
};

export const HeroSection = () => {
	return (
		<>
			<section
				id="hero"
				className="relative min-h-screen flex flex-col items-center justify-center px-4"
			>
				<div className="container max-w-4xl mx-auto z-10">
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
						{/* Text Section */}
						<div className="flex-1 text-center md:text-left space-y-6">
							<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
								<span className="opacity-0 animate-fade-in"> Hello, I'm</span>
								<span className="text-primary opacity-0 animate-fade-in-delay-1">
									{" "}
									Firaol
								</span>
								<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
									{" "}
									Tesfaye
								</span>
							</h1>
										<TypewriterSkills />
													<div className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed bg-background/80 rounded-xl shadow p-4 font-sans">
														<p className="font-medium tracking-wide text-foreground/90 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
															I build websites that feel easy to use — the kind that just make sense. I focus on the details that shape smooth interactions and responsive layouts. It’s about creating digital experiences people enjoy using — ones that work seamlessly and leave a lasting impression.
														</p>
														<p className="mt-3 font-medium text-foreground/80 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
															I’m constantly growing, picking up new skills, and finding better ways to build. What drives me most is the joy of turning a simple idea into something real, something people can actually use, connect with, and enjoy.
														</p>
														<p className="mt-3 font-bold text-xl text-primary tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
															Thanks for taking the time to check out my work. I’m glad you’re here.
														</p>
													</div>
							<div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center">
								<a href="#projects" className="cosmic-button">
									View My Work
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span className="text-sm text-muted-foreground mb-2"> Scroll </span>
				<ArrowDown className="h-5 w-5 text-primary" />
			</div>
		</>
	);
};
