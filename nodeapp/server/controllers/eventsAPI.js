const eventRepository = require('../repositories/eventsRepository');

exports.getEvents = (req, res, next) => {
    eventRepository.getEvents()
        .then(eventTypes => {
            res.status(200).json(eventTypes);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getEventById = (req, res, next) => {
    const evenId = req.params.evenId;
    eventRepository.getEventById(evenId)
    .then(eventType => {
        if (!eventType) {
            res.status(404).json({
                message: `Event with id: ${evenId} not found!`
            })
        } else {
            res.status(200).json(eventType);
        }
    })
}

exports.createEvent = (req, res, next) => {
    eventRepository.createEvent(req.body)
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

exports.updateEvent = (req, res, next) => {
    const evenId = req.params.evenId;

    eventRepository.updateEvent(evenId, req.body)
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

exports.deleteEvent = (req, res, next) => {
    const evenId = req.params.evenId;

    eventRepository.deleteEvent(evenId)
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