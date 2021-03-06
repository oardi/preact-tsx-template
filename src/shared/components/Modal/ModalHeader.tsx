import { ComponentChildren, h } from 'preact';

interface IModalHeaderProps {
	children: ComponentChildren;
	onClose?: Function;
}

export const ModalHeader = ({ children, onClose }: IModalHeaderProps) => {

	const handleClick = () => {
		onClose && onClose();
	};

	return (
		<div className="modal-header">
			<h5 className="modal-title">
				{children}
			</h5>
			<button type="button" className="close" onClick={handleClick}>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	);
};
