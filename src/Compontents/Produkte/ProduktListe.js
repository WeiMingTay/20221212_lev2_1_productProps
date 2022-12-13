import Produkte from "./Produkte";

let produktListen = [
	{
		img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
		name: "cocooil",
		preis: 30,
		url: "https://images.unsplash.com",
	},
	{
		img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ",
		name: "Polaroid",
		preis: 60,
		url: "https://images.unsplash.com",
	},
	{
		img: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		name: "Maui Moisture",
		preis: 20,
		url: "https://images.unsplash.com",
	},
];

const ProduktListe = () => {
	return (
		<div className="produktListe">
			{produktListen.map((e) => (
				<Produkte src={e.img} name={e.name} preis={e.preis} />
			))}
		</div>
	);
};
export default ProduktListe;
