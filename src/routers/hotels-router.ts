import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getRooms, getHotels } from "@/controllers";
import { hotelsValidator } from "@/middlewares/hotels-middleware";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken, hotelsValidator)
  .get("/:hotelId", getRooms)
  .get("", getHotels)

export { hotelsRouter };
