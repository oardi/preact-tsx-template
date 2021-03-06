import { Fragment, h } from 'preact';
// import PropTypes from 'prop-types';

export const FormError = ({ className = 'invalid-feedback', errors = [] }) => {
	return (
		<Fragment>
			{
				errors &&
				<div className={className}>
					{errors.map(e => <div key={e.validator}>{e.message}</div>)}
				</div>
			}
		</Fragment>
	);
};

// FormError.propTypes = {
// 	className: PropTypes.string,
// 	errors: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			validator: PropTypes.string,
// 			message: PropTypes.string
// 		})
// 	)
// };
