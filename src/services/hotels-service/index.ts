import { notFoundError } from '@/errors';
import hotelsRepository from '@/repositories/hotels-repository';

async function getRooms(hotelId: number) {
  const hotelRooms = await hotelsRepository.getRooms(hotelId);

  if (!hotelRooms) {
    throw notFoundError();
  }
  return hotelRooms;
}

async function getHotels() {
  const ticket = await hotelsRepository.getHotels();
  if (!ticket) {
    throw notFoundError();
  }

  return ticket;
}

const hotelsService = {
  getRooms,
  getHotels,
};

export default hotelsService;
