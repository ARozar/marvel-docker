const mongoose  = require('mongoose');

export default async function connectDb(appStart) {
    const connString = process.env.MONGO_CONNECTION || '';
  
    const dbConfig = {
      useMongoClient: true
    }
  
    //as we should be using node > 7 we should have native promises
    mongoose.Promise = global.Promise;
  

    try {
      //try to connect using our configuration

      const db = await mongoose.connect(connString, dbConfig);
      //so we can see what is running as we develop
      mongoose.set('debug', true);
  
      if (appStart)//if we get this far launch the app
        appStart()
        .then(i => console.log(i))
        .catch(error => console.log(error));;
  
    } catch (error) {
      //using chalk to give any errors a forboding red colour        
      console.error('Could not connect to MongoDB!', error);
    }
  };