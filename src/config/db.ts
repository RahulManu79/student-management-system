import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string,
            // {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // }
        );
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

export default DB;
