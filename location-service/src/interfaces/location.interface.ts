// src/interfaces/location.interface.ts

export interface LocationAttributes {
  id?: number;
  name: string;
  latitude: number;
  longitude: number;
  createdAt?: Date;
  updatedAt?: Date;
}
