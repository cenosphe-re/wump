import pino from 'pino';

const transport = pino.transport({
	targets: [
		{
			level: 'error',
			target: 'pino/file',
			options: { destination: './logs/app.log', mkdir: true },
		},
		{
			level: 'info',
			target: 'pino-pretty',
			options: { destination: 1, colorize: true },
		},
	],
});

export const logger = pino(
	{
		redact: ['hostname'],
		timestamp: pino.stdTimeFunctions.isoTime,
	},
	transport,
);
