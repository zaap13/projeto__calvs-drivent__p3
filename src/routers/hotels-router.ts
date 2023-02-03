import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getRooms, getHotels } from "@/controllers";

const hotelsRouter = Router();

hotelsRouter
  .all("/*", authenticateToken)
  .get("/:hotelId", getRooms)
  .get("", getHotels)

export { hotelsRouter };
