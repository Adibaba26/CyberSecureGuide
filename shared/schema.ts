import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const cyberTips = pgTable("cyber_tips", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const quizQuestions = pgTable("quiz_questions", {
  id: serial("id").primaryKey(),
  question: text("question").notNull(),
  options: jsonb("options").notNull().$type<string[]>(),
  correctAnswer: integer("correct_answer").notNull(),
  explanation: text("explanation"),
});

export const quizAttempts = pgTable("quiz_attempts", {
  id: serial("id").primaryKey(),
  score: integer("score").notNull(),
  totalQuestions: integer("total_questions").notNull(),
  completedAt: text("completed_at").notNull(),
});

export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  url: text("url").notNull(),
  type: text("type").notNull(), // 'video', 'website', 'pdf', 'course'
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const cyberTrends = pgTable("cyber_trends", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'threat', 'technology', 'policy', 'awareness'
  severity: text("severity").notNull(), // 'low', 'medium', 'high', 'critical'
  publishedDate: text("published_date").notNull(),
  source: text("source").notNull(),
  icon: text("icon").notNull(),
  color: text("color").notNull(),
});

export const foundations = pgTable("foundations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  mission: text("mission").notNull(),
  description: text("description").notNull(),
  logo: text("logo").notNull(),
  website: text("website"),
  easypaisa: text("easypaisa"),
  jazzcash: text("jazzcash"),
  bankAccount: text("bank_account"),
  bankName: text("bank_name"),
  accountTitle: text("account_title"),
  color: text("color").notNull(),
  featured: boolean("featured").default(false),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  submittedAt: text("submitted_at").notNull(),
});

export const insertCyberTipSchema = createInsertSchema(cyberTips).omit({
  id: true,
});

export const insertQuizQuestionSchema = createInsertSchema(quizQuestions).omit({
  id: true,
});

export const insertQuizAttemptSchema = createInsertSchema(quizAttempts).omit({
  id: true,
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
});

export const insertCyberTrendSchema = createInsertSchema(cyberTrends).omit({
  id: true,
});

export const insertFoundationSchema = createInsertSchema(foundations).omit({
  id: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
});

export type CyberTip = typeof cyberTips.$inferSelect;
export type InsertCyberTip = z.infer<typeof insertCyberTipSchema>;

export type QuizQuestion = typeof quizQuestions.$inferSelect;
export type InsertQuizQuestion = z.infer<typeof insertQuizQuestionSchema>;

export type QuizAttempt = typeof quizAttempts.$inferSelect;
export type InsertQuizAttempt = z.infer<typeof insertQuizAttemptSchema>;

export type Resource = typeof resources.$inferSelect;
export type InsertResource = z.infer<typeof insertResourceSchema>;

export type CyberTrend = typeof cyberTrends.$inferSelect;
export type InsertCyberTrend = z.infer<typeof insertCyberTrendSchema>;

export type Foundation = typeof foundations.$inferSelect;
export type InsertFoundation = z.infer<typeof insertFoundationSchema>;

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
