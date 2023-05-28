import mongoose from 'mongoose';



const Connection = async (username, password) => {
    const URL = `mongodb://127.0.0.1:27017/Blog_post`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false ,useCreateIndex: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;