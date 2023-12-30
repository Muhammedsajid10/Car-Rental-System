const ReservationModel = require('./ReservationSchema');
const vehicleModel = require('./vehicleSchema');


const makeReservation = async (req, res) => {
  try {
    const { vehicleId, startDate, endDate } = req.body;
    const userId = req.user.userId;

    // Specified period for the vehicle availability check
    const isAvailable = await vehicleModel.findOne({
      _id: vehicleId,
      currentStatus: 'available'
    });

    if (!isAvailable) {
      return res.status(400).json({ message: 'Vehicle is not available for the specified period.' });
    }

    const reservationDetails = await ReservationModel.create({
      userId: userId,
      vehicleId: vehicleId,
      startDate,
      endDate,
    });

    // Update the vehicle status to 'reserved'
    await vehicleModel.findByIdAndUpdate(vehicleId, { currentStatus: 'reserved' });

    res.status(201).json({ message: 'Reservation successful.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};


module.exports = makeReservation;