const scores = [45, 78, 90, 32, 88, 67];

const processScores = (scores, callback) => {
  for (const i in scores) {
    scores[i] *= 2;
  }
  console.log(scores);

  const callback = (scores) => {
    let greatScore;
    for (const i of scores) {
      greatScore = i >= 50 ? true : false;
    }
    console.log(greatScore);
  };
  return callback();

  //   function processScores(scores) {
  //     let greatScore;
  //     for (const i of scores) {
  //       greatScore = i >= 50 ? true : false;
  //     }
  //     console.log(greatScore);
  //   }
};

processScores(scores, processScores);
