const express = require('express');
const partyModel = require('../models/partyModel')


exports.getparties = (req,res) => {
        const get_parties = partyModel.getAllParties();
        res.status(201).send({
            status: 201,
            data: [get_parties]
    })
}
