import { Link } from 'react-router-dom';

const LinkItem = ({ name }: { name: string }) => {
	const lowCaseName = name.toLowerCase();

	return (
		<li className="links__item">
			<Link to={`/single/${lowCaseName}`} state={{ name: `${lowCaseName}` }}>
				{name}
			</Link>
		</li>
	);
};

export default LinkItem;
