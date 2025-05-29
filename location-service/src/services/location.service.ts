import * as LocationQuery from '../queries/location.query';
import { NotFoundException } from '../utils/customErrors';

export const createLocation = async (data: any) => {
  return await LocationQuery.createLocation(data);
};

export const getAllLocations = async () => {
  return await LocationQuery.findAllLocations();
};

export const getLocationById = async (id: number) => {
  const location = await LocationQuery.findLocationById(id);
  if (!location) throw new NotFoundException('Location not found');
  return location;
};

export const deleteLocation = async (id: number) => {
  const result = await LocationQuery.deleteLocationById(id);
  if (!result) throw new NotFoundException('Location not found or already deleted');
  return { message: 'Location deleted successfully' };
};

export const batchInsertLocations = async (data: any[]) => {
  return await LocationQuery.batchCreateLocations(data);
};
