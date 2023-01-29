import { useLocation } from 'react-router';

const SingleItemPage = () => {
	let { state } = useLocation();

	return (
		<div className="single-item">
			<p>
				This <span className="single-item--blue">is</span> page{' '}
				<span className="single-item--blue">for </span> {state.name}
			</p>
		</div>
	);
};

export default SingleItemPage;
