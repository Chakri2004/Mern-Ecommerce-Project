import auraItems from "../../data/auraItems";

const allProducts = Object.values(auraItems).flat();

const product = allProducts.find(p => p._id === id);
