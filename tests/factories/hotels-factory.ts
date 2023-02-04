import faker from '@faker-js/faker';
import { prisma } from '@/config';
import { Hotel, Room } from '@prisma/client';

export async function createHotel() {
  return prisma.hotel.create({
    data: {
      id: faker.datatype.number(),
      name: faker.name.findName(),
      image: faker.image.imageUrl(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  });
}

export async function createRooms(hotel: Hotel) {
  const incomingHotel = hotel || (await createHotel());
  return prisma.room.createMany({
    data: [
      {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        capacity: faker.datatype.number(),
        hotelId: incomingHotel.id,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
      {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        capacity: faker.datatype.number(),
        hotelId: incomingHotel.id,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
      {
        id: faker.datatype.number(),
        name: faker.name.findName(),
        capacity: faker.datatype.number(),
        hotelId: incomingHotel.id,
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent(),
      },
    ],
  });
}
