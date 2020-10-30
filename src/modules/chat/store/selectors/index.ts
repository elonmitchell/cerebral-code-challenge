import {State} from '../types';

export const determineNextStep = (state: State, answer: string): number => {
  const {questions, step} = state;
  const question = questions.find((q) => q.id === step);
  if (!question || question.id === -1) {
    return -1;
  }
  const {validation, paths} = question;
  if (validation === true) {
    return paths as number;
  }
  if (typeof validation === 'string') {
    const regex = RegExp(validation);
    return regex.test(answer) ? (paths as number) : step;
  }
  if (Array.isArray(validation) && validation.length) {
    const matched = validation.find((r) => RegExp(r, 'i').test(answer));
    if (matched) {
      if (typeof paths === 'object' && paths[matched]) {
        return paths[matched];
      }
      if (typeof paths === 'number') {
        return paths;
      }
    }
  }
  return step;
};

export const getStepQuestion = (state: State, step: number): string => {
  const question = state.questions.find((q) => q.id === step);
  return question?.question || '';
};
