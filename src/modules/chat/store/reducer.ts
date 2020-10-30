import {State, Action} from './types';
import {determineNextStep, getStepQuestion} from './selectors';

const retryMessage =
  'Oops, your answer is incorrect. Please re-send correct answer';

export const initialState: State = {
  provider: {
    firstName: 'Marianne',
    lastName: 'Singer',
    avatar:
      'https://tinyfac.es/data/avatars/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-500w.jpeg',
  },
  step: 0,
  messages: [],
  questions: [],
};

export function chatReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.questions,
      };
    case 'GOTO_STEP':
      return {
        ...state,
        step: action.step,
        messages: [
          ...state.messages,
          {
            sender: state.provider.firstName,
            message: getStepQuestion(state, action.step),
            timestamp: Date.now(),
          },
        ],
      };
    case 'HANDLE_ANSWER':
      const nextStep = determineNextStep(state, action.answer);
      let messages = state.messages;
      if (nextStep === state.step && nextStep !== -1) {
        messages = [
          ...messages,
          {
            sender: state.provider.firstName,
            message: retryMessage,
            timestamp: Date.now(),
          },
        ];
      }
      if (nextStep !== state.step) {
        messages = [
          ...messages,
          {
            sender: state.provider.firstName,
            message: getStepQuestion(state, nextStep),
            timestamp: Date.now(),
          },
        ];
      }
      return {
        ...state,
        step: nextStep,
        messages,
      };
    case 'ADD_ANSWER':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            sender: 'You',
            timestamp: Date.now(),
            message: action.message,
          },
        ],
      };
    case 'ASK_QUESTION':
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            message: action.question.question,
            sender: state.provider.firstName,
            timestamp: Date.now(),
          },
        ],
      };
    default:
      return state;
  }
}
