const mongoose = require('mongoose')
const uri = 'mongodb+srv://sajidalhijas:Car-Rental-System@car-rental-system.bpsjw85.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}


module.exports = connectDB;