import * as api from 'marvel-api';
import dbConfig from './dbConfig';

var marvel = api.createClient({
  publicKey: process.env.MARVEL_PUB,
  privateKey: process.env.MARVEL_PK
});

dbConfig(downloadAll);  

async function downloadAll() {

  let count = 0;

  const { meta } = await marvel.characters.findAll(0, 1)

  const Character = await import('./characterModel');

  for (let i = meta.offset - 1; i < meta.total; i += meta.limit) {
    try {

      const { data } = await marvel.characters.findAll(meta.limit, i);

      console.log(data);

      await Character.default.collection.insert(data);

      count += data.length;

    } catch (error) {

      console.log('Error: ', error);
      continue;
    }
  }

  return count;
  
}