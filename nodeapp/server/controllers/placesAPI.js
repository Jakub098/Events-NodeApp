const placesRepository = require('../repositories/placesRepository');

exports.getPlaces = (req, res, next) => {
    placesRepository.getPlaces()
        .then(places => {
            res.status(200).json(places);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getPlaceById = (req, res, next) => {
    const placeId = req.params.placeId;
    placesRepository.getPlaceById(placeId)
    .then(place => {
        if (!place) {
            res.status(404).json({
                message: `Place with id: ${placeId} not found!`
            })
        } else {
            res.status(200).json(place);
        }
    })
}

exports.createPlace = (req, res, next) => {
    placesRepository.createPlace(req.body)
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

exports.updatePlace = (req, res, next) => {
    const placeId = req.params.placeId;

    placesRepository.updatePlace(placeId, req.body)
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

exports.deletePlace = (req, res, next) => {
    const placeId = req.params.placeId;

    placesRepository.deletePlace(placeId)
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