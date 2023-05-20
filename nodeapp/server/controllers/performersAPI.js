const performersRepository = require('../repositories/performersRepository');

exports.getPerformers = (req, res, next) => {
    performersRepository.getPerformers()
        .then(performers => {
            res.status(200).json(performers);
        })
        .catch(err => {
            console.log(err);
        })
}

exports.getPerformerById = (req, res, next) => {
    const performerId = req.params.performerId;
    performersRepository.getPerformerById(performerId)
    .then(performer => {
        if (!performer) {
            res.status(404).json({
                message: `performer with id: ${performerId} not found!`
            })
        } else {
            res.status(200).json(performer);
        }
    })
}

exports.createPerformer = (req, res, next) => {
    performersRepository.createPerformer(req.body)
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

exports.updatePerformer = (req, res, next) => {
    const performerId = req.params.performerId;

    performersRepository.updatePerformer(performerId, req.body)
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

exports.deletePerformer = (req, res, next) => {
    const performerId = req.params.performerId;

    performersRepository.deletePerformer(performerId)
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