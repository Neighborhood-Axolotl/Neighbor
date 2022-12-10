const { Consumers } = require('../models/neighborModels'); 

const neighborControllers = {}; 

// getting consumers currently with email addresses since they're unique
    // email addresses will 100% be provided during login whereas we weren't sure if the unique id that mongo creates would be available when getConsumers is called
    // if id is available, should probably switch to that 
neighborControllers.getConsumers = async ({body}, res, next) => {
    try {
        res.locals.consumers = await Consumers.find({ email: body }).exec(); 
    } catch(err) {
        return next ({
            log: `Error occured in getConsumers middleware, ${err}`,
            status: 400,
            message: { err: 'An error occurred when getting consumer data' },
        })
    }
}

// define controller for creating users (use .create)
// define controller for deleting user (HINT: deleteone)
// define controller for updating any part of a user (req.params)

// export the module 