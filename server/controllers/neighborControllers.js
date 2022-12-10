const Consumers  = require('../models/neighborModels'); 

const neighborControllers = {}; 

// getting consumers currently with email addresses since they're unique
    // email addresses will 100% be provided during login whereas we weren't sure if the unique id that mongo creates would be available when getConsumers is called
    // if id is available, should probably switch to that 
// get request to get consumer data needs to be an object containing the property email and the user email you're looking to get back
neighborControllers.getConsumers = async ({body}, res, next) => {
    try {
        res.locals.consumers = await Consumers.find({email: body.email}).exec()
        console.log('stored consumer: ', res.locals.consumers)
        return next(); 
    } catch(err) {
        return next ({
            log: `Error occured in getConsumers middleware, ${err}`,
            status: 400,
            message: { err: 'An error occurred when getting consumer data' },
        })
    }
}

// define controller for creating users (use .create)
neighborControllers.createConsumers = ({body}, res, next) => {
    try {
        Consumers.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            password: body.password,
            zipCode: body.zipCode
        })
        return next(); 
    } catch(err) {
        return next ({
            log: `Error occured in createConsumers middleware, ${err}`,
            status: 400,
            message: { err: 'An error occurred when creating consumer data' },
        })
    }
}

// define controller for deleting user (HINT: deleteone)
neighborControllers.deleteConsumers = async ({body}, res, next) => {
    try {
        await Consumers.deleteOne({ email: body.email}).exec()
        return next(); 
    } catch(err) {
        return next ({
            log: `Error occured in deleteConsumers middleware, ${err}`,
            status: 400,
            message: { err: 'An error occurred when deleting consumer data' },
        })
    }
}

// define controller for updating any part of a consumer
// consumer is identified using the req.params, looking for the consumer that matches the param id 
    // property identifies which key we need to update within our consumer
    // update field identifies the value we are replacing the existing one with 
neighborControllers.updateConsumer = async (req, res, next) => {
    try {
        const updateField =  Object.values(req.body).toString()
        const property = Object.keys(req.body).toString()
        await Consumers.findOneAndUpdate({ _id: req.params._id}, {[property]: updateField})
        return next(); 
    } catch(err) {
        return next ({
            log: `Error occured in updateConsumers middleware, ${err}`,
            status: 400,
            message: { err: 'An error occurred when updating consumer data' },
        })
    }
}

// export the module 
module.exports = neighborControllers;