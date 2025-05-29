import { Location } from '../models/location.model';

export const createLocation = async (data: any) => {
  return await Location.create(data);
};

export const findAllLocations = async () => {
  return await Location.findAll();
};

export const findLocationById = async (id: number) => {
  return await Location.findByPk(id);
};

export const deleteLocationById = async (id: number) => {
  return await Location.destroy({ where: { id } });
};

export const batchCreateLocations = async (locations: any[]) => {
  return await Location.bulkCreate(locations);
};
