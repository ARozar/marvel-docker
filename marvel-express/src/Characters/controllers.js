import { Character } from './models';

export async function getCharacters(req, res) {
    const characters = await Character
        .find()
        .limit(20)
        .sort({ name: 'asc' });

        res.json(characters)
}

export async function getCharacter(req, res) {

    const [character] = await Character.find({id: parseInt(req.params.id, 10)});

    if(character)
        res.json(character);

    res.status(404);
}