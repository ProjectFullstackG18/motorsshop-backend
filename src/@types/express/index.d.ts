import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        seller: boolean;
        email: string;
      };
      carsUpdate: {
        brand?: string;
        model?: string;
        year?: string;
        fuel_type?: string;
        km?: string;
        color?: string;
        fipe_price?: string;
        price?: string;
        description?: string;
      };
    }
  }
}
