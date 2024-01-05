const { Vehicle, Task } = require('../models');
const {error, success, incomplete} = require('../helpers');
const router = require('express').Router();
// Import Model
// Import helper functions

//! Create Task for Vehicle
router.post('/:vehicleId', async (req,res) => {
    try {
        //1. Obtain data from our user
        const {title, date, details, resolved } = req.body;

        //2. Capture the ID from our parameter.
        const { vehicleId } = req.params;

        //3. Check if Vehicle exists and respond if not.
        const vehicleCheck = await Vehicle.findOne({_id: vehicleId});

        if (!vehicleCheck) throw new Error("Vehicle not available");

        //4. Build our task object we want to pu to the collection.
            //a: What if a user doesn't provide a date?
            //b: If the task isn't noted as resolved, how can we default to false?
            //c: Set the ID of the vehicle within the object.
        //5. Save object to the database.

        const task = await new Task({title, date, details, resolved,
        vehicle_id: vehicleCheck._id}).save();

        //6. Structure how we may want to save task object for the vehicle it is being assigned to.
            //ex: We wouldn't need to store the vehicles ID within the tasks array of that vehicle.
        const forVehicle = {
            id: task._id,
            title: task.title,
            date: task.date
        }

        //7. Update our Vehicles tasks array so that it may reference it.

        await Vehicle.findOneAndUpdate(
            {_id: vehicleId},
            {$push: {tasks: forVehicle}}
        );
        //8. Response to User (success/incomplete)

        task ?
            success(res, task) :
            incomplete(res);
        
    } catch (err) {
        error(res,err);
    }
});

module.exports = router;