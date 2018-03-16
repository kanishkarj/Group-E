
export default {
  assignQuestions: (state, data) => {
    state.questions = data.default
  },
  randomizeQuest: state => {
    for (let i = 0; i < 4; i++) {
      state.questions[i].Set.sort(function (a, b) { return 30 - Math.random() })
      state.questions[i].Set.splice(20, 10)
      for (let j = 0; j < 20; j++) {
        state.questions[i].Set[j].color = 'red'
        state.questions[i].Set[j].ans = 0
        state.questions[i].Set[j].marked = false
      }
    }
  }
}
