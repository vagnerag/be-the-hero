const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
    let ID = "";
    beforeEach(async () => {
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .set({
                Authorization: "3349d9e4"
            })
            .send({
                title: "Caso 01",
                description: "Detalhes do caso 01",
                value: 110
            })
            expect(response.body).toHaveProperty('id');
            ID = response.body.id;
    });

    it('should be able to delete a incident', async () => {
        const response = await request(app)
        .del('/incidents/'+ID)
        .set({
            Authorization: "3349d9e4"
        })
        .expect(204)
    });
});