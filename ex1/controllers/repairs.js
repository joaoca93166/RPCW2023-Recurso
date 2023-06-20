const repair = require('../models/repairs');
var repairs = require('../models/repairs');

//lista com todos os automoveis reparados
exports.listRepairs = () => {
    return repairs.find()
        .sort()
        .then(repairs => {
            return repairs
        })
        .catch(err => {
            return err
        })
}


//reparação com identificador id
exports.repairId = (id) => {
    return repairs.findById(id)
    .then(repair => {
        return repair
    })
    .catch(err => {
        return err
    })
}

//reparações num dado ano
exports.repairsYear = (ano) => {
    return repairs.find({ data: { $regex: `.*${ano}.*` }})
    .then(repairs => {
        return repairs
    })
    .catch(err => {
        return err
    })
}

//reparações por dada marca
exports.repairsMarca = (marca) => {
    return repairs.find({ 'viatura.marca': marca})
    .then(repairs => {
        return repairs
    })
    .catch(err => {
        return err
    })
}

exports.listMatriculas = () => {
    return repairs.distinct('viatura.matricula').sort()
    .then(repairs => {
        return repairs
    })
    .catch(err => {
        return err
    })
}

exports.listiNTERV = () => {
    return repairs.distinct('intervencoes').sort()
    .then(repairs => {
        return repairs
    })
    .catch(err => {
        return err
    })
}

exports.addRepair = (contract) => {
    return repairs.create(repair)
    .then(repair => {
        return repair
    })
    .catch(err => {
        return err
    })
}


exports.deleteRepair = (id) => {
    return repairs.findById(id)
    .then(repair => {
        return repair
    })
    .catch(err => {
        return err
    })
}
