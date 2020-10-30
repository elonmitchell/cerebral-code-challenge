import {Message, Person, Question} from '../../../types';

export interface State {
  provider: Person;
  step: number;
  questions: Question[];
  messages: Message[];
}

type ActionType<Name, Payload> = Payload & {
  type: Name;
};

export type Action =
  | ActionType<'SET_QUESTIONS', {questions: Question[]}>
  | ActionType<'HANDLE_ANSWER', {answer: string}>
  | ActionType<'GOTO_STEP', {step: number}>
  | ActionType<'ADD_ANSWER', {message: string}>
  | ActionType<'ASK_QUESTION', {question: Question}>;
