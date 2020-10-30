export interface Question {
  id: number;
  question: string;
  validation: boolean | string | string[];
  paths?: number | {[answer: string]: number};
}

export interface Message {
  sender: string;
  message: string;
  timestamp: number;
}

export interface Person {
  firstName: string;
  lastName: string;
  avatar?: string;
}
