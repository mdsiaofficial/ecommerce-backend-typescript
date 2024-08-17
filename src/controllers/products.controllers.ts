import { Request, Response } from 'express';
import Products, { TProduct } from "../models/products.model";

export const fetchProducts = async (req: Request, res: Response) => {
  try {
    const products:TProduct[] = await Products.find();
    res.status(200).json({ message: "Products", products });
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
}

export const createProducts = async (req: Request, res: Response) => {
  try {
    const { name, description, price, stockQuantity, category } = req.body;
    const newProduct = await Products.create({
      name, description, price, stockQuantity, category
    });
    res.status(201).json({ message: "Product created successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
}

export const fetchProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Products.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product", product });
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, price, stockQuantity, category } = req.body;
    const updatedProduct = await Products.findByIdAndUpdate(id, {
      name, description, price, stockQuantity, category
    }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
}

