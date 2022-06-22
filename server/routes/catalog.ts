import express from 'express';
import { getCatalog, getCatalogItem, createCatalogItem, updateCatalogItem, deleteCatalogItem } from '../controllers/catalog';

const router = express.Router();

router.route('/').get(getCatalog).post(createCatalogItem);
router.route('/:id').get(getCatalogItem).patch(updateCatalogItem).delete(deleteCatalogItem);

export default router;
