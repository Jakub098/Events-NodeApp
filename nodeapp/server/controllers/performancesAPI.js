const performancesRepository = require('../repositories/performancesRepository');

exports.getPerformances = (req, res, next) => {
    performancesRepository.getPerformances()
        .then(performances => {
            res.status(200).json(performances);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getPerformanceById = (req, res, next) => {
    const performanceId = req.params.performanceId;
    performancesRepository.getPerformanceById(performanceId)
    .then(performance => {
        if (!performance) {
            res.status(404).json({
                message: `performance with id: ${performanceId} not found!`
            })
        } else {
            res.status(200).json(performance);
        }
    })
}

exports.createPerformance = (req, res, next) => {
    performancesRepository.createPerformance(req.body)
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

exports.updatePerformance = (req, res, next) => {
    const performanceId = req.params.performanceId;

    performancesRepository.updatePerformance(performanceId, req.body)
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

exports.deletePerformance = (req, res, next) => {
    const performanceId = req.params.performanceId;

    performancesRepository.deletePerformance(performanceId)
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