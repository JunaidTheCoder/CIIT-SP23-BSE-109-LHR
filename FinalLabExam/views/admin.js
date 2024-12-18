const express = require('express');
const Product = require('../../models/product');
const Category = require('../../models/category');
const router = express.Router();

// Admin dashboard route
router.get('/admin', (req, res) => {
  res.render('admin.ejs');
});

// Product CRUD routes
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.render('admin/products', { products });
  } catch (err) {
    res.status(500).send('Error fetching products');
  }
});

router.get('/products/add', async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('admin/addProduct', { categories });
  } catch (err) {
    res.status(500).send('Error fetching categories');
  }
});

router.post('/products/add', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect('/admin/products');
  } catch (err) {
    res.status(500).send('Error saving product');
  }
});

router.get('/products/edit/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    const categories = await Category.find();
    res.render('admin/editProduct', { product, categories });
  } catch (err) {
    res.status(500).send('Error fetching product');
  }
});

router.post('/products/edit/:id', async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/products');
  } catch (err) {
    res.status(500).send('Error updating product');
  }
});

router.get('/products/delete/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/admin/products');
  } catch (err) {
    res.status(500).send('Error deleting product');
  }
});

// Category CRUD routes
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.render('admin/categories', { categories });
  } catch (err) {
    res.status(500).send('Error fetching categories');
  }
});

router.get('/categories/add', (req, res) => {
  res.render('admin/addCategory');
});

router.post('/categories/add', async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.redirect('/admin/categories');
  } catch (err) {
    res.status(500).send('Error saving category');
  }
});

router.get('/categories/edit/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.render('admin/editCategory', { category });
  } catch (err) {
    res.status(500).send('Error fetching category');
  }
});

router.post('/categories/edit/:id', async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/admin/categories');
  } catch (err) {
    res.status(500).send('Error updating category');
  }
});

router.get('/categories/delete/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/admin/categories');
  } catch (err) {
    res.status(500).send('Error deleting category');
  }
});

module.exports = router;
