import mongoose from 'mongoose';

// Set Mongoose to use global promise library to avoid deprecation warning
mongoose.Promise = global.Promise;

// Define MongoDB URI
const MONGO_URL = 'mongodb+srv://root:root@books-store-mern.pl4k5pa.mongodb.net/adminuser?retryWrites=true&w=majority';

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Optionally, you can remove the deprecated options:
            // useCreateIndex: true,
            // useFindAndModify: false,
        });
        console.log('Database connected');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

export default connectDB;
