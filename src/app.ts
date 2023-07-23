import { Server } from 'http';
import createApp from './utils/createApp';
import { logger } from './utils/logger';
import { config } from './utils/config';

function main() {
	const app = createApp();

	const server = app.listen(config.PORT, () => {
		logger.info(`Server listening on port ${config.PORT}`);
	});

	signals.forEach((signal) => {
		process.on(signal, () => shutdown({ signal, server }));
	});
}

const signals = ['SIGINT', 'SIGTERM', 'SIGHUP'] as const;

function shutdown({ signal, server }: { signal: (typeof signals)[number]; server: Server }) {
	logger.info(`${signal} signal received: shutting down`);

	server.close(() => {
		logger.info('HTTP server closed');
	});

	process.exit(0);
}

main();
