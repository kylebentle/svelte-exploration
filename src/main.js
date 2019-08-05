import App from './App.svelte';

const app = new App({
	target: document.querySelector('#dataviz-graphic'),
	props: {
		name: 'world'
	}
});

export default app;