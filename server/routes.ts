import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Insert contact into storage
      const contact = await storage.createContact(validatedData);
      
      // Return success response
      res.status(200).json({
        success: true,
        message: "Your message has been sent successfully!",
        data: contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors
        });
      } else {
        // Handle other errors
        console.error("Error handling contact form submission:", error);
        res.status(500).json({
          success: false,
          message: "An error occurred while processing your request."
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
