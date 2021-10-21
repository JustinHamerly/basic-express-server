'use strict';

const { trees } = require('../model');

//get
const getAllTrees = async (req, res) => {
  let treesData = await trees.findAll();
  res.send(treesData);
};

//get
const getATree = async (req, res) => {
  try{
    let treeData = await trees.findByPk(req.params.id);

    if(!treeData){
      return res.status(404);
    }
    res.status(200).send(treeData);
  }catch(err){
    res.send(err);
  }
};

//post
const addATree = async (req, res) => {
  try{
    let newTree = await trees.create({
      name: req.body.name,
      location: req.body.location,
      height: req.body.height,
    });

    res.status(201).send(newTree);
  }catch(err){
    res.send(err);
  }
};

//put
const updateTree = async (req, res) => {
  try{
    let treeToUpdate = await trees.findByPk(req.params.id);
    treeToUpdate.name = req.body.name;
    treeToUpdate.location = req.body.location;
    treeToUpdate.height = req.body.height;
    treeToUpdate.save();

    res.status(200).send(treeToUpdate);
  }catch(err){
    res.send(err);
  }
};

const deleteATree = async (req, res) => {
  try{
    const treeToDestroy = await trees.findByPK(req.params.id);
    const destroyedTree = await treeToDestroy.destroy();

    res.status(200).send(destroyedTree);
  }catch(err){
    res.send(err);
  }
};

module.exports = {
  getAllTrees,
  getATree,
  addATree,
  updateTree,
  deleteATree,
};
