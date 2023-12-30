const express = require('express')
const { userRegistration } = require('../Controller/UserAuth/userReg')
const userLogin = require('../Controller/UserAuth/userLogin')
const makeReservation = require('../Controller/VehicleMangmnt/Reservation')
const { vehicleCreate, vehicleGetById, getVehicles, vehicleUpdate, vehicleDelete } = require('../Controller/VehicleMangmnt/vehicle')
const authenticateToken = require('../Middleware/protect')
const multer = require('multer')
const router = express.Router()

// Set up multer storage
const storage = multer.memoryStorage(); // This stores the file in memory as a Buffer
const upload = multer({ storage: storage });

const middleware = [authenticateToken]

router.route('/user').post(userRegistration)
// router.route('/user-jwt').get(tokenVerification)
router.route('/user-login').post(userLogin)

// router.route('/vehicle-create').post(vehicleCreate)
router.route('/vehicle-create').post(upload.single('image'), vehicleCreate);
router.route('/vehicle-get/:id').get(vehicleGetById)
router.route('/vehicle-get').get(getVehicles)
router.route('/vehicle-update/:id').put(vehicleUpdate)
router.route('/vehicle-delete/:id').delete(vehicleDelete)

router.route('/make-reservation').post(middleware, makeReservation);


module.exports = router 