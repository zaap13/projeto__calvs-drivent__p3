import { prisma } from '@/config';

async function getRooms(hotelId: number) {
  return prisma.hotel.findFirst({
    where: {
      id: hotelId,
    },
    include: {
      Rooms: true,
    },
  });
}

async function getHotels() {
  return prisma.hotel.findMany();
}

const ticketRepository = {
  getRooms,
  getHotels,
};

export default ticketRepository;
