import propertyService from "../services/propertyService.js";

const propertyController = {
  postProperty: async (req, res, next) => {
    try {
      const property = await propertyService.createProperty(req.body);
      res.status(201).json(property);
    } catch (error) {
        next(error);
    }
  },
  getAllProperties: async (req, res, next) => {
    try {
        if( req.isAuthentic === true ){
            const properties = await propertyService.getAllProperties(req.query);
            res.status(200).json(properties);
        }else{
            const publicProperties = await propertyService.getAllPublicProperties();
            res.status(200).json(publicProperties);
        }
      
    } catch (error) {
        next(error);
    }
  },
  getPropertyById: async (req, res, next) => {
    try {
        if( req.isAuthentic === true ){
            const property = await propertyService.getPropertyById(req.params.id);
            res.status(200).json(property);
        }else{
            const property = await propertyService.getPropertyByPublicId(req.params.id);
            res.status(200).json(property);
        }
    } catch (error) {
        next(error);
    }
  },
  putProperty: async (req, res,next) => {
    try {
      const property = await propertyService.updateProperty(req.params.id, req.body);
      res.status(200).json(property);
    } catch (error) {
        next(error);
    }
  },
  deleteProperty: async (req, res, next) => {
    try {
      const property = await propertyService.deleteProperty(req.params.id);
      res.status(200).json(property);
    } catch (error) {
        next(error);
    }
  },
  postRating: async (req, res, next) => {
    try {
      const rating = await propertyService.addRating(req.params.id, req.body);
      res.status(201).json(rating);
    } catch (error) {
        next(error);
    }
  },
  putRating: async (req, res, next) => {
    try {
      const rating = await propertyService.updateRating(req.params.id, req.body);
      res.status(200).json(rating);
    } catch (error) {
        next(error);
    }
  },
  deleteRating: async (req, res, next) => {
    try {
      const rating = await propertyService.deleteRating(req.params.id);
      res.status(200).json(rating);
    } catch (error) {
        next(error);
    }
  },
};

export default propertyController;
