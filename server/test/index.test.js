const app = require('../src/App');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {

    describe(`GET /rickandmorty/character/:id`, () => {
        it(`Responde con status: 200`, async () => {
            await agent.get('/rickandmorty/character/1').expect(200)
        })

        it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body
            expect(response).toHaveProperty('id')
            expect(response).toHaveProperty('name')
            expect(response).toHaveProperty('species')
            expect(response).toHaveProperty('gender')
            expect(response).toHaveProperty('status')
            expect(response).toHaveProperty('origin')
            expect(response).toHaveProperty('image')
        })

        it(`Si hay un error responde con status: 500`, async () => {
            await agent.get('/rickandmorty/character/999999999999').expect(500)
        })
    })
})

describe("_GET /rickandmorty/login_", () => {
   it('La informacion del login es correcta', async () => {
    const response = (await agent.get(`/rickandmorty/login?email=meli@gmail.com&password=Hola123`)).body
    expect(response.access).toEqual(true)
   }) 
   it('La informacion del login es incorrecta', async () => {
    const response = (await agent.get(`/rickandmorty/login?email=asdasd&password=lalala`)).body
    expect(response.access).toEqual(false)
   }) 
})

describe("_POST /rickandmorty/fav_", () => {
    const character1 = {id: '1', name: 'Melina'}
    const character2 = {id: '2', name: 'Marina'}

    it('Devuelve un personaje en primer llamado', async () => {
        const response = (await agent.post('/rickandmorty/fav').send(character1)).body
        expect(response).toContainEqual(character1)
    })
    it('Devuelve dos personajes en segundo llamado', async () => {
        const response = (await agent.post('/rickandmorty/fav').send(character2)).body
        expect(response).toContainEqual(character1)
        expect(response).toContainEqual(character2)
    })
})

describe("_DELETE /rickandmorty/fav/:id_", () => {
    const character1 = {id: '1', name: 'Melina'}
    const character2 = {id: '2', name: 'Marina'}

    it('Devuelve un arreglo con los elementos previos', async () => {
        const response = (await agent.delete('/rickandmorty/fav/3')).body
        expect(response).toContainEqual(character1)
        expect(response).toContainEqual(character2)
    })
    it('Elimina correctamente un personaje pasado por ID', async () => {
        const response = (await agent.delete('/rickandmorty/fav/1')).body
        expect(response).not.toContainEqual(character1)
        expect(response).toContainEqual(character2)
    })
})