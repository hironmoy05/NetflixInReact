import homeTv from '../images/misc/home-tv.jpg';
import homeMobile from '../images/misc/home-mobile.jpg';
import homeImac from '../images/misc/home-imac.jpg';

const jumbo = [
	{
		id: 1,
		title: 'Enjoy on your TV.',
		subTitle:
			'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
		image: homeTv,
		alt: 'Tiger King on Netflix',
		direction: 'row',
	},
	{
		id: 2,
		title: 'Download your programmes to watch on the go.',
		subTitle: 'Save your data and watch all your favourites offline.',
		image: homeMobile,
		alt: 'Tiger King on Netflix',
		direction: 'row-reverse',
	},
	{
		id: 3,
		title: 'Watch everywhere.',
		subTitle:
			'Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.',
		image: homeImac,
		alt: 'Money Heist on Netflix',
		direction: 'row',
	},
];

export default jumbo;
