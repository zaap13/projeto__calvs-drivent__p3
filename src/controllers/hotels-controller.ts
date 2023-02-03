import { AuthenticatedRequest } from '@/middlewares';
import hotelsService from '@/services/hotels-service';
import { Response } from 'express';
import httpStatus from 'http-status';

export async function getRooms(req: AuthenticatedRequest, res: Response) {
  const { hotelId } = req.params;
  try {
    const hotelRooms = await hotelsService.getRooms(Number(hotelId));

    return res.status(httpStatus.OK).send(hotelRooms);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getHotels(req: AuthenticatedRequest, res: Response) {
  try {
    const hotels = await hotelsService.getHotels();

    return res.status(httpStatus.OK).send(hotels);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
