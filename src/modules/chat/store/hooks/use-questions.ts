import {useEffect, useState} from 'react';
import {Question} from '../../../../types';
import {getQuestions} from '../../../api';

export function useQuestions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    getQuestions().then(setQuestions);
  }, []);

  return questions;
}
