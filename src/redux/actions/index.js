import axios from 'axios'

export function getWebQuiz(){
  return async (dispatch) => {
    try {
      const res = await axios('http://localhost:3001/')
      return dispatch({
        type: 'GET_WEB_QUIZ',
        payload: res.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}