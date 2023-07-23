import request from 'supertest';
import createApp from '../src/utils/createApp';

const app = createApp();

describe('GET /healthcheck', () => {
	it('should return 200 OK', async () => {
		const { status, body } = await request(app).get('/healthcheck');

		expect(status).toBe(200);
		expect(body.message).toBe('OK');
	});
});
