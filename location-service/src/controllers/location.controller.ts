import { Request, Response, NextFunction } from 'express';
import * as LocationService from '../services/location.service';
import { successResponse } from '../utils/responseHandler';
import { LocationAttributes } from '../interfaces/location.interface';

export const create = async (
  req: Request<{}, {}, LocationAttributes>,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await LocationService.createLocation(req.body);
    successResponse<LocationAttributes>(res, data, 'Location created successfully', 201);
  } catch (err) {
    next(err);
  }
};


export const getAll = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await LocationService.getAllLocations();
    successResponse<LocationAttributes[]>(res, data, 'Locations retrieved', 200);
  } catch (err) {
    next(err);
  }
};

export const getById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await LocationService.getLocationById(+req.params.id);
    successResponse<LocationAttributes>(res, data, 'Location found', 200);
  } catch (err) {
    next(err);
  }
};

export const remove = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await LocationService.deleteLocation(+req.params.id);
    successResponse(res, 200, result.message);
  } catch (err) {
    next(err);
  }
};

export const batchCreate = async (
  req: Request<{}, {}, LocationAttributes[]>,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await LocationService.batchInsertLocations(req.body);
    successResponse<LocationAttributes[]>(res, data, 'Batch created successfully', 201);
  } catch (err) {
    next(err);
  }
};
