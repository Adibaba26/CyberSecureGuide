import { 
  cyberTips, 
  quizQuestions, 
  resources, 
  quizAttempts,
  type CyberTip, 
  type InsertCyberTip,
  type QuizQuestion,
  type InsertQuizQuestion,
  type Resource,
  type InsertResource,
  type QuizAttempt,
  type InsertQuizAttempt
} from "@shared/schema";

export interface IStorage {
  // Cyber Tips
  getCyberTips(): Promise<CyberTip[]>;
  
  // Quiz Questions
  getQuizQuestions(): Promise<QuizQuestion[]>;
  
  // Resources
  getResources(): Promise<Resource[]>;
  
  // Quiz Attempts
  saveQuizAttempt(attempt: InsertQuizAttempt): Promise<QuizAttempt>;
}

export class MemStorage implements IStorage {
  private cyberTips: Map<number, CyberTip>;
  private quizQuestions: Map<number, QuizQuestion>;
  private resources: Map<number, Resource>;
  private quizAttempts: Map<number, QuizAttempt>;
  private currentTipId: number;
  private currentQuestionId: number;
  private currentResourceId: number;
  private currentAttemptId: number;

  constructor() {
    this.cyberTips = new Map();
    this.quizQuestions = new Map();
    this.resources = new Map();
    this.quizAttempts = new Map();
    this.currentTipId = 1;
    this.currentQuestionId = 1;
    this.currentResourceId = 1;
    this.currentAttemptId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize cyber tips
    const tips: InsertCyberTip[] = [
      {
        title: "Use Strong Passwords",
        description: "Create unique passwords with a mix of letters, numbers, and symbols. Never reuse passwords across multiple accounts.",
        icon: "fas fa-lock",
        color: "cyber-green"
      },
      {
        title: "Never Share OTPs or Passwords",
        description: "Keep your one-time passwords and login credentials private. Legitimate companies will never ask for these details.",
        icon: "fas fa-user-secret",
        color: "red-500"
      },
      {
        title: "Always Check for HTTPS",
        description: "Look for the lock icon and \"https://\" in the URL before entering sensitive information on websites.",
        icon: "fas fa-shield-alt",
        color: "cyber-blue"
      },
      {
        title: "Avoid Unknown Links",
        description: "Don't click on suspicious links in emails, texts, or pop-ups. They could lead to malicious websites or downloads.",
        icon: "fas fa-exclamation-triangle",
        color: "cyber-orange"
      },
      {
        title: "Enable Two-Factor Authentication",
        description: "Add an extra layer of security to your accounts by enabling 2FA wherever possible. Use apps like Google Authenticator.",
        icon: "fas fa-mobile-alt",
        color: "purple-500"
      },
      {
        title: "Keep Software Updated",
        description: "Regular updates patch security vulnerabilities. Enable automatic updates for your operating system and apps.",
        icon: "fas fa-download",
        color: "green-500"
      }
    ];

    tips.forEach(tip => {
      const id = this.currentTipId++;
      this.cyberTips.set(id, { ...tip, id });
    });

    // Initialize quiz questions
    const questions: InsertQuizQuestion[] = [
      {
        question: "What does HTTPS mean?",
        options: ["Highly Trusted Portal", "HyperText Transfer Protocol Secure", "Hackers Try To Phish Sites", "None of the above"],
        correctAnswer: 1,
        explanation: "HTTPS stands for HyperText Transfer Protocol Secure, which encrypts data between your browser and the website."
      },
      {
        question: "What should you do if you receive a suspicious email?",
        options: ["Click all the links to investigate", "Delete it and report as spam", "Forward it to all your friends", "Reply asking for more information"],
        correctAnswer: 1,
        explanation: "Always delete suspicious emails and report them as spam to prevent phishing attempts."
      },
      {
        question: "How often should you update your passwords?",
        options: ["Never, once is enough", "Only when you remember", "Regularly, every 3-6 months", "Only after a security breach"],
        correctAnswer: 2,
        explanation: "Passwords should be updated regularly, ideally every 3-6 months, to maintain security."
      },
      {
        question: "What is two-factor authentication (2FA)?",
        options: ["An extra layer of security requiring two forms of verification", "Using two different passwords", "Logging in twice", "A type of antivirus software"],
        correctAnswer: 0,
        explanation: "2FA adds an extra security layer by requiring two different forms of verification to access your account."
      },
      {
        question: "What should you do before downloading software?",
        options: ["Download from any website", "Verify the source and read reviews", "Turn off antivirus software", "Download multiple versions"],
        correctAnswer: 1,
        explanation: "Always verify the software source and read reviews to avoid downloading malicious software."
      }
    ];

    questions.forEach(question => {
      const id = this.currentQuestionId++;
      this.quizQuestions.set(id, { ...question, id });
    });

    // Initialize resources
    const resourceList: InsertResource[] = [
      {
        title: "Cybersecurity for Beginners",
        description: "Comprehensive video series covering essential security topics",
        url: "https://www.youtube.com/results?search_query=cybersecurity+for+beginners",
        type: "video",
        icon: "fab fa-youtube",
        color: "red-500"
      },
      {
        title: "Stay Safe Online",
        description: "Official cybersecurity awareness website with tips and resources",
        url: "https://staysafeonline.org",
        type: "website",
        icon: "fas fa-globe",
        color: "cyber-blue"
      },
      {
        title: "Cyber Safety Guide",
        description: "Downloadable PDF with essential cybersecurity practices",
        url: "https://www.cisa.gov/sites/default/files/publications/Cybersecurity%20Best%20Practices%20for%20Small%20and%20Medium%20Businesses.pdf",
        type: "pdf",
        icon: "fas fa-file-pdf",
        color: "cyber-green"
      },
      {
        title: "NIST Cybersecurity Framework",
        description: "Official guidelines from the National Institute of Standards",
        url: "https://www.nist.gov/cyberframework",
        type: "website",
        icon: "fas fa-shield-alt",
        color: "purple-500"
      },
      {
        title: "Cybersecurity Course",
        description: "Free online course covering fundamentals and advanced topics",
        url: "https://www.coursera.org/browse/information-technology/cybersecurity",
        type: "course",
        icon: "fas fa-graduation-cap",
        color: "cyber-orange"
      }
    ];

    resourceList.forEach(resource => {
      const id = this.currentResourceId++;
      this.resources.set(id, { ...resource, id });
    });
  }

  async getCyberTips(): Promise<CyberTip[]> {
    return Array.from(this.cyberTips.values());
  }

  async getQuizQuestions(): Promise<QuizQuestion[]> {
    return Array.from(this.quizQuestions.values());
  }

  async getResources(): Promise<Resource[]> {
    return Array.from(this.resources.values());
  }

  async saveQuizAttempt(insertAttempt: InsertQuizAttempt): Promise<QuizAttempt> {
    const id = this.currentAttemptId++;
    const attempt: QuizAttempt = { ...insertAttempt, id };
    this.quizAttempts.set(id, attempt);
    return attempt;
  }
}

export const storage = new MemStorage();
