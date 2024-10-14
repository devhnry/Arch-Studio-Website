import {PortfolioCard, screenDetails} from "../types/types.ts";

import seraphStation from "../assets/portfolio/image-SeraphStation.webp";
import eeboxBuilding from "../assets/portfolio/image-Eebox.webp";
import federalIITower from "../assets/portfolio/image-FederalTowerII.webp";
import projectDelSol from "../assets/portfolio/image-ProjectDelSol.webp";
import lePrototype from "../assets/portfolio/image-Prototype.webp";
import tower228B from "../assets/portfolio/image-228BTower.webp";
import grandEdelweissHotel from "../assets/portfolio/image-Hotel.webp";
import netcryTower from "../assets/portfolio/image-Netcry.webp";
import hypers from "../assets/portfolio/image-Hypers.webp";
import sxivTowers from "../assets/portfolio/image-SXIVTower.webp";
import trinityBankTower from "../assets/portfolio/image-BankTower.webp";
import projectParamour from "../assets/portfolio/image-ProjectParamour.webp";

import jakeRichards from "../assets/about/image-suit1.webp";
import thompsonSmith from "../assets/about/image-suit2.webp";
import jacksonRourke from "../assets/about/image-suit3.webp";
import mariaSimpson from "../assets/about/image-suit4.webp";

import bgImg1 from "../assets/home/image-8.webp";
import bgImg2 from "../assets/home/image-5.webp";
import bgImg3 from "../assets/home/image-6.webp";
import bgImg4 from "../assets/home/image-7.webp";


export const links = ["portfolio", "about us", "contact"];

export const screenDetailsArray:screenDetails[] = [
	{
		upperTitle: "Project",
		lowerTitle: "Paramour",
		details:
			"Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
		image: bgImg1,
	},
	{
		upperTitle: "Seraph",
		lowerTitle: "Station",
		details:
			"The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
		image: bgImg2,
	},
	{
		upperTitle: "Federal II",
		lowerTitle: "Tower",
		details:
			"A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
		image: bgImg3,
	},
	{
		upperTitle: "Trinity Bank",
		lowerTitle: "Tower",
		details:
			"Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
		image: bgImg4,
	},
];

export const portfolioArray:PortfolioCard[] = [
	{
		title: "Seraph Station",
		date: "September 2019",
		url: seraphStation
	},
	{
		title: "Eebox Building",
		date: "August 2017",
		url: eeboxBuilding,
	},
	{
		title: "Federal II Tower",
		date: "March 2017",
		url: federalIITower,
	},
	{
		title: "Project Del Sol",
		date: "January 2016",
		url: projectDelSol,
	},
	{
		title: "Le Prototype",
		date: "October 2015",
		url: lePrototype,
	},
	{
		title: "228B Tower",
		date: "April 2015",
		url: tower228B,
	},
	{
		title: "Grand Edelweiss Hotel",
		date: "December 2013",
		url: grandEdelweissHotel,
	},
	{
		title: "Netcry Tower",
		date: "August 2012",
		url: netcryTower,
	},
	{
		title: "Hypers",
		date: "January 2012",
		url: hypers,
	},
	{
		title: "SXIV Towers",
		date: "March 2011",
		url: sxivTowers,
	},
	{
		title: "Trinity Bank Tower",
		date: "September 2010",
		url: trinityBankTower,
	},
	{
		title: "Project Paramour",
		date: "February 2008",
		url: projectParamour,
	}

];

export const leaderInfo = [
	{
		name: "Jake Richards",
		title: "Chief Architect",
		url: jakeRichards,
	},
	{
		name: "Thompson Smith",
		title: "Head of Finance",
		url: thompsonSmith,
	},
	{
		name: "Jackson Rourke",
		title: "Lead Designer",
		url: jacksonRourke,
	},
	{
		name: "Maria Simpson",
		title: "Senior Architect",
		url: mariaSimpson,
	}
];
