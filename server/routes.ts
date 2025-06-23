import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertQuizAttemptSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get cyber tips
  app.get("/api/cyber-tips", async (req, res) => {
    try {
      const tips = await storage.getCyberTips();
      res.json(tips);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch cyber tips" });
    }
  });

  // Get quiz questions
  app.get("/api/quiz-questions", async (req, res) => {
    try {
      const questions = await storage.getQuizQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch quiz questions" });
    }
  });

  // Get resources
  app.get("/api/resources", async (req, res) => {
    try {
      const resources = await storage.getResources();
      res.json(resources);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch resources" });
    }
  });

  // Save quiz attempt
  app.post("/api/quiz-attempts", async (req, res) => {
    try {
      const validatedData = insertQuizAttemptSchema.parse(req.body);
      const attempt = await storage.saveQuizAttempt(validatedData);
      res.json(attempt);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid quiz attempt data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to save quiz attempt" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
