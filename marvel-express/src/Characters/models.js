const mongoose = require('mongoose');

const Character = mongoose.model('Character', { id: Number});

export {Character};