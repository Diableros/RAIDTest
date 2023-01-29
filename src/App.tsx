import { useEffect, useState } from 'react';
import LinkItem from './components/LinkItem';

const BASE_URL = 'https://api.npoint.io/fcd1d2aabea282573bef';

function App() {
	const [items, setItems] = useState<string[]>([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then((response) => response.json())
			.then((data) => setItems(data.items));
	}, []);

	return (
		<div className="App">
			<ul className="links">
				{items.map((item) => (
					<LinkItem name={item} />
				))}
			</ul>
		</div>
	);
}

export default App;
