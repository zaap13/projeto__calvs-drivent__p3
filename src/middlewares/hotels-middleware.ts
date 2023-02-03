import { NextFunction, Response } from 'express';
import httpStatus from 'http-status';

import { prisma } from '@/config';
import { AuthenticatedRequest } from './authentication-middleware';

export async function hotelsValidator(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId: req.userId,
      },
      include: {
        Ticket: {
          where: {
            status: 'PAID',
            TicketType: {
              includesHotel: true,
            },
          },
        },
      },
    });

    if (!enrollment) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }

    const { Ticket } = enrollment;

    if (!Ticket) {
      return res.sendStatus(httpStatus.PAYMENT_REQUIRED);
    }

    return next();
  } catch (err) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
