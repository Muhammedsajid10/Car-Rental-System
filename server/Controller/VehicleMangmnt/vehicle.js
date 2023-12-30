const vehicleModel = require("./vehicleSchema");

const vehicleCreate = async (req, res) => {
  try {
    console.log('Received Data:', req.body);
    const { model, year, rentalCost, currentStatus } = req.body;
    const image = req.file; // Access the uploaded file


    console.log('Received Image:', image);

    const vehicleDetails = await vehicleModel.create({
      model,
      year,
      rentalCost,
      currentStatus,
      // image: image.buffer.toString('base64'), // Convert Buffer to base64 string
      image: image.buffer,
    });
    console.log('vehicle : ', vehicleDetails);

    res.status(201).json({ message: 'Vehicle added successfully.', data: vehicleDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






const getVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleModel.find();
    res.json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const vehicleGetById = async (req, res) => {
  try {
    const _id = req.params.id;
    const vehicle = await vehicleModel.findOne({ _id });
    if (vehicle) {
      res.json(vehicle);
    } else {
      res.status(404).json({ error: 'Vehicle not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const vehicleUpdate = async (req, res) => {
  try {
    const { model, year, rentalCost, currentStatus, image } = req.body;
    const _id = req.params.id;
    const updatedVehicle = await vehicleModel.findByIdAndUpdate(_id, {
      model,
      year,
      rentalCost,
      currentStatus,
      image,
    });
    if (updatedVehicle) {
      res.json({ message: 'Vehicle updated successfully.' });
    } else {
      res.status(404).json({ error: 'Vehicle not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const vehicleDelete = async (req, res) => {
  try {
    const _id = req.params.id;
    const deletedVehicle = await vehicleModel.findByIdAndDelete(_id);
    if (deletedVehicle) {
      res.json({ message: 'Vehicle deleted successfully.' });
    } else {
      res.status(404).json({ error: 'Vehicle not found.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { vehicleCreate, getVehicles, vehicleGetById, vehicleUpdate, vehicleDelete };
