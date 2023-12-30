const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'userModel', required: true },
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: 'vehicleModel', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
});

const ReservationModel = mongoose.model('Reservation', reservationSchema);

module.exports = ReservationModel;
