import { getAllArts } from '../../db/redis';

export default async function handler(req, res) {
    const arts = await getAllArts();
    res.status(200).json({ arts });
}