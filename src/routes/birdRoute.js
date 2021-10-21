'use strict';

const { request } = require('express');
const { birds } = require('../model');

//get
const getAllBirds = async (req, res) => {
  try {
    let birdsData = await birds.findAll();
    res.status(200).send(birdsData);
  } catch(err) {
    res.send(err);
  }
};

//get
const getABird = async (req, res) => {
  try{
    let birdData = await birds.findByPk(req.params.id);

    if(!birdData){
      return res.status(404);
    }
    res.status(200).send(birdData);
  }catch(err){
    res.send(err);
  }
};

//post
const addABird = async (req, res) => {
  try{
    let newBird = await birds.create({
      name: req.body.name,
      wingspan: req.body.wingspan,
      location: req.body.location,
    });

    res.status(201).send(newBird);
  }catch(err){
    res.send(err);
  }
};

//put
const updateBird = async (req, res) => {
  try{
    let birdToUpdate = await birds.findByPk(req.params.id);
    birdToUpdate.name = req.body.name;
    birdToUpdate.wingspan = req.body.wingspan;
    birdToUpdate.location = req.body.location;
    birdToUpdate.save();

    res.status(200).send(birdToUpdate);
  }catch(err){
    res.send(err);
  }
};

//delete
const deleteABird = async (req, res) => {
  try{
    const birdToDestroy = await birds.findByPK(req.params.id);
    const destroyedBird = await birdToDestroy.destroy();

    res.send(destroyedBird);
    console.log(destroyedBird);
  }catch(err){
    res.send(err);
  }
};

module.exports = {
  getAllBirds,
  getABird,
  addABird,
  updateBird,
  deleteABird,
};
