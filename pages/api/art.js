import { createArt } from '../../db/redis';

export default async function handler(req, res) {
    const id = await createArt(req.body);
    res.status(200).json({ id });
    console.log(typeof id);
}