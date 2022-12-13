import ProduktListe from "./ProduktListe";
import "./../Produkte.css";
import Button from "./Button/Button";

const Produkte = (props) => {
	return (
		<article>
			<div className="produktImage">
				<img src={props.src} />
			</div>
			<div className="produktInfos">
				<p>{props.name}</p>
				<p>{props.preis} €</p>
				<Button />
                {/* <button >Buy Me</button> */}
			</div>
		</article>
	);
};

export default Produkte;
