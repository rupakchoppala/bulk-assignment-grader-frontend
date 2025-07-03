export interface StudentInfo {
    name: string;
    rollNumber: string;
    class: string;
    totalMarks: number;
    strengths: string[];
    improvementAreas: string[];
  }
  
  export interface QuestionScore {
    questionNumber: number;
    score: number;
    correctAnswer?: string;
    studentAnswer: string;
  }
  
  export interface ReportEntry extends StudentInfo {
    questionWiseScores: QuestionScore[];
  }
  