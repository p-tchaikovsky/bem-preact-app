import { decl } from 'bem-react-core';
import { h } from 'preact';

export default decl({
	block: 'Home',
	content() {
		return (
			<div>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		);
	}
});
