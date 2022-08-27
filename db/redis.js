import { Client, Entity, Schema, Repository } from 'redis-om';

const client = new Client();

async function connect() {
    if (!client.isOpen()) {
        await client.open(process.env.REDIS_URL);
    }
}

class Art extends Entity {}

let schema = new Schema(
    Art,
    {
        art: { type: 'text' },
        artName: { type: 'string' },
        author: { type: 'string' }
    },
    {
        dataStructure: 'JSON',
    }
);

export async function createArt(data) {
    await connect();

    const repository = client.fetchRepository(schema);
    const art = repository.createEntity(data);
    const id = await repository.save(art);

    return id;
}

export async function createIndex() {
    await connect();

    const repository = client.fetchRepository(schema);
    await repository.createIndex();
}

export async function getAllArts() {
    await connect();

    const repository = client.fetchRepository(schema);
    const arts = await repository.search().return.all();

    return arts;
}