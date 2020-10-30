import {Question} from '../../types';

const questionsUrl =
  'https://gist.githubusercontent.com/pcperini/97fe41fc42ac1c610548cbfebb0a4b88/raw/cc07f09753ad8fefb308f5adae15bf82c7fffb72/cerebral_challenge.json';

export function getQuestions(): Promise<Question[]> {
  return new Promise((resolve, reject) => {
    fetch(questionsUrl)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}
