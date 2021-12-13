'use strict';

const express = require('express');
const { categories } = require('../model');

//get
const getAllCategories = async (req, res) => {
  try {
    let categoriesData = await categories.findAll();
    res.status(200).send(categoriesData);
  } catch(err) {
    res.send(err);
  }
};

//get
const getACategory = async (req, res) => {
  try{
    let categoryData = await categories.findByPk(req.params.id);

    if(!categoryData){
      return res.status(404);
    }
    res.status(200).send(categoryData);
  }catch(err){
    res.send(err);
  }
};

//post
const addACategory = async (req, res) => {
  try{
    let newCategory = await categories.create({
      normalized: req.body.normalized,
      name: req.body.name,
      description: req.body.description,
      active: req.body.active,
    });

    res.status(201).send(newCategory);
  }catch(err){
    res.send(err);
  }
};

//put
const updateCategory = async (req, res) => {
  try{
    let categoryToUpdate = await categories.findByPk(req.params.id);
    categoryToUpdate.normalized = req.body.normalized;
    categoryToUpdate.name = req.body.name;
    categoryToUpdate.description = req.body.description;
    categoryToUpdate.active = req.body.active;
    categoryToUpdate.save();

    res.status(200).send(categoryToUpdate);
  }catch(err){
    res.send(err);
  }
};

//delete
const deleteACategory = async (req, res) => {
  try{
    const categoryToDestroy = await categories.findByPK(req.params.id);
    const destroyedCategory = await categoryToDestroy.destroy();
    res.send(destroyedCategory);
  }catch(err){
    res.send(err);
  }
};

module.exports = {
  getAllCategories,
  getACategory,
  addACategory,
  updateCategory,
  deleteACategory,
};
