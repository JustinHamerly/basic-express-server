'use strict';

const { products } = require('../model');

//get
const getAllProducts = async (req, res) => {
  let productsData = await products.findAll();
  res.send(productsData);
};

//get
const getAProduct = async (req, res) => {
  try{
    let productData = await products.findByPk(req.params.id);

    if(!productData){
      return res.status(404);
    }
    res.status(200).send(productData);
  }catch(err){
    res.send(err);
  }
};

//post
const addAProduct = async (req, res) => {
  try{
    let newProduct = await products.create({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      inventory: req.product.inventory,
    });

    res.status(201).send(newProduct);
  }catch(err){
    res.send(err);
  }
};

//put
const updateProduct = async (req, res) => {
  try{
    let productToUpdate = await products.findByPk(req.params.id);
    productToUpdate.name = req.body.name;
    productToUpdate.category = req.body.category;
    productToUpdate.description = req.body.description;
    productToUpdate.price = req.body.price;
    productToUpdate.inventory = req.body.inventory;
    productToUpdate.save();

    res.status(200).send(productToUpdate);
  }catch(err){
    res.send(err);
  }
};

const deleteAProduct = async (req, res) => {
  try{
    const productToDestroy = await products.findByPK(req.params.id);
    const destroyedProduct = await productToDestroy.destroy();

    res.status(200).send(destroyedProduct);
  }catch(err){
    res.send(err);
  }
};

module.exports = {
  getAllProducts,
  getAProduct,
  addAProduct,
  updateProduct,
  deleteAProduct,
};
