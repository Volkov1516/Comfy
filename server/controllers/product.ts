import { Request, Response } from "express";

import { asyncWrapper } from '../middleware/async';

import Product from "../models/product";

type QueryType = {
    brand?: string | {} | string[] | {} | undefined,
    model?: string | {} | string[] | {} | undefined,
    os?: string | {} | string[] | {} | undefined,
    rom?: string | {} | string[] | {} | undefined,
    ram?: string | {} | string[] | {} | undefined,
    displayFrashrate?: string | {} | string[] | {} | undefined,
}

export const getProducts = asyncWrapper(async (req: Request, res: Response) => {
    const { brand, model, os, rom, ram, displayFrashrate, sort, numericFilters } = req.query;
    const queryObject: QueryType = {};

    if (brand) {
        queryObject.brand = brand;
    }
    if (model) {
        queryObject.model = model;
    }
    if (os) {
        queryObject.os = os;
    }
    if (rom) {
        queryObject.rom = rom;
    }
    if (ram) {
        queryObject.ram = ram;
    }
    if (displayFrashrate) {
        queryObject.displayFrashrate = displayFrashrate;
    }
    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g;
        //@ts-ignore
        let filters = numericFilters.replace(regEx,(match) => `-${operatorMap[match]}-`);
        const options = ['price'];
        filters = filters.split(',').forEach((item: any) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                //@ts-ignore
              queryObject[field] = { [operator]: Number(value) };
            }
          });
    }

    let result = Product.find(queryObject);

    if (sort) {
        //@ts-ignore
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 80;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);

    const products = await result;

    res.status(201).json([...products]);
});

export const getProduct = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Product.findOne({ _id: req.params.id });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const createProduct = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Product.create(req.body);

    res.status(200).json({ data });
});

export const updateProduct = asyncWrapper(async (req: Request, res: Response) => {
    const data = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

    if (!data) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(200).json({ data });
});

export const deleteProduct = asyncWrapper(async (req: Request, res: Response) => {
    const test = await Product.findOneAndDelete({ _id: req.params.id });

    if (!test) {
        return res.status(404).json({ msg: 'No such id' });
    }

    res.status(201).json({ test });
});
