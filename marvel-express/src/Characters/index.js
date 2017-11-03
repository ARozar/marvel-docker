import { Router, Express } from 'express';
import { getCharacters, getCharacter } from './controllers';

const routes = Router();

routes.get('/', getCharacters);

routes.get('/:id', getCharacter);


const characters = (app) =>{
    app.use('/characters', routes);
}

export default characters;