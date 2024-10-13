import {PortfolioCard, screenDetails} from "../types/types.ts";

export const links = ["portfolio", "about us", "contact"];

export const screenDetailsArray:screenDetails[] = [
	{
		upperTitle: "Project",
		lowerTitle: "Paramour",
		details:
			"Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
		image: 1,
	},
	{
		upperTitle: "Seraph",
		lowerTitle: "Station",
		details:
			"The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
		image: 2,
	},
	{
		upperTitle: "Federal II",
		lowerTitle: "Tower",
		details:
			"A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
		image: 3,
	},
	{
		upperTitle: "Trinity Bank",
		lowerTitle: "Tower",
		details:
			"Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
		image: 4,
	},
];

export const portfolioArray:PortfolioCard[] = [
	{
		title: "Seraph Station",
		date: "September 2019",
		url: "/src/assets/portfolio/image-SeraphStation.png",
	},
	{
		title: "Eebox Building",
		date: "August 2017",
		url: "/src/assets/portfolio/image-Eebox.png",
	},
	{
		title: "Federal II Tower",
		date: "March 2017",
		url: "/src/assets/portfolio/image-FederalTowerII.png",
	},
	{
		title: "Project Del Sol",
		date: "January 2016",
		url: "/src/assets/portfolio/image-ProjectDelSol.png",
	},
	{
		title: "Le Prototype",
		date: "October 2015",
		url: "/src/assets/portfolio/image-Prototype.png",
	},
	{
		title: "228B Tower",
		date: "April 2015",
		url: "/src/assets/portfolio/image-228BTower.png",
	},
	{
		title: "Grand Edelweiss Hotel",
		date: "December 2013",
		url: "/src/assets/portfolio/image-Hotel.png",
	},
	{
		title: "Netcry Tower",
		date: "August 2012",
		url: "/src/assets/portfolio/image-Netcry.png",
	},
	{
		title: "Hypers",
		date: "January 2012",
		url: "/src/assets/portfolio/image-Hypers.png",
	},
	{
		title: "SXIV Towers",
		date: "March 2011",
		url: "/src/assets/portfolio/image-SXIVTower.png",
	},
	{
		title: "Trinity Bank Tower",
		date: "September 2010",
		url: "/src/assets/portfolio/image-BankTower.png",
	},
	{
		title: "Project Paramour",
		date: "February 2008",
		url: "/src/assets/portfolio/image-ProjectParamour.png",
	}
];

export const leaderInfo =  [
	{
		name: "Jake Richards",
		title: "Chief Architect",
		url: "/src/assets/about/image-suit1.png"
	}, {
		name: "Thompson Smith",
		title: "Head of Finance",
		url: "/src/assets/about/image-suit2.png",
	} ,{
		name: "Jackson Rourke",
		title: "Lead Designer",
		url: "/src/assets/about/image-suit3.png",
	} , {
		name: "Maria Simpson",
		title: "Senior Architect",
		url: "/src/assets/about/image-suit4.png",
	}
]