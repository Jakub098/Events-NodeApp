const eventTypeRepository = require('../repositories/eventTypesRepository');

exports.getEventTypes = (req, res, next) => {
    eventTypeRepository.getEventTypes()
        .then(eventTypes => {
            res.status(200).json(eventTypes);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getEventTypeById = (req, res, next) => {
    const eventTypeId = req.params.eventTypeId;
    eventTypeRepository.getEventTypeById(eventTypeId)
    .then(eventType => {
        if (!eventType) {
            res.status(404).json({
                message: `Event type with id: ${eventTypeId} not found!`
            })
        } else {
            res.status(200).json(eventType);
        }
    })
}

exports.createEventType = (req, res, next) => {
    eventTypeRepository.createEventType(req.body)
    .then(newObj => {
        res.status(201).json(newObj);
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
}

exports.updateEventType = (req, res, next) => {
    const eventTypeId = req.params.eventTypeId;

    eventTypeRepository.updateEventType(eventTypeId, req.body)
    .then(newObj => {
        res.status(200).json({message: "Updated!"});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
}

exports.deleteEventType = (req, res, next) => {
    const eventTypeId = req.params.eventTypeId;

    eventTypeRepository.deleteEventType(eventTypeId)
    .then(() => {
        res.status(200).json({message: "deleted!"});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
}