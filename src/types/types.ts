export interface FooterProps {
	links: string[]; // links is an array of strings
}

export interface PortfolioCard {
	title: string;
	date: string;
	url: string;
}

export interface screenDetails {
	upperTitle: string;
	lowerTitle: string;
	details: string;
	image: string;
}

export interface AboutCardDetails {
	name: string;
	title: string;
	url: string;
}

export interface ContactInfoDetails {
	mail: string;
	address: string;
	phone: string;
}