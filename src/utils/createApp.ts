import express from 'express';

export default function createApp() {
	const app = express();

	app.use(express.json());

	app.get('/healthcheck', (req, res) => {
		res.status(200).json({ message: 'OK' });
	});

	return app;
}
