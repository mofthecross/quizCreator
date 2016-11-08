export const saveQuiz=quiz=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.1) {
        // pretend the save failed
        return reject(new Error('Error: Quiz randomly failed to save'));
      }
      // pretend the save succeeded
      window.localStorage.setItem('quiz', JSON.stringify(quiz));
      let updated = window.localStorage.getItem('quiz')
      return resolve(updated);
    }, Math.random() * 1000);
  });
}
