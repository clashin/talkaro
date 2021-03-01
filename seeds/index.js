const Post = require('../models/post');
const mongoose = require('mongoose');
const { places, descriptors } = require('./seedhelpers');

mongoose.connect('mongodb://localhost:27017/talkaro', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Mongo Connection Open !')
    })
    .catch((err) => {
        console.log('Oh No Mongo Connection Error!!');
        console.log(err);
    })

const sample = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}


const seedDB = async () => {
    await Post.deleteMany({});
    for (i = 0; i < 50; i++) {
        const p = new Post({
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elis,saepe cupiditate delectus laboriosam excepturi! Sapiente vel eligendi est iure recusandae,modi eius!'
        })
        await p.save();
    }
}

seedDB();