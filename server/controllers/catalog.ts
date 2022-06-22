import { Request, Response } from "express";
import Catalog from '../models/catalog';

export const getCatalog = async (req: Request, res: Response) => {
    try {
        const data = await Catalog.find({});

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const getCatalogItem = async (req: Request, res: Response) => {
    try {
        const data = await Catalog.findOne({ _id: req.params.id });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const createCatalogItem = async (req: Request, res: Response) => {
    try {
        const data = await Catalog.create(req.body);

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const updateCatalogItem = async (req: Request, res: Response) => {
    try {
        const data = Catalog.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' });
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

export const deleteCatalogItem = async (req: Request, res: Response) => {
    try {
        const data = await Catalog.findOneAndDelete({ _id: req.params.id });

        if (!data) {
            return res.status(404).json({ msg: 'No such id' })
        }

        res.status(200).json({ data });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
