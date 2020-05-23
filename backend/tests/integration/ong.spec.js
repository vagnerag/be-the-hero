const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    let ID = "";

    beforeAll(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "apad2@email.com",
                whatsapp: "31999990001",
                city: "Rio do Sul",
                uf: "SC"
            })
            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
            ID = response.body.id;
    });

    it('should be able to Login', async () => {
        const response = await request(app)
            .post('/sessions')
            .send({
                id: ID
            })
            expect(response.body).toHaveProperty('name');
    });
});