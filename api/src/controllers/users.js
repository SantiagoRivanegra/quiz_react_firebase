const axios = require('axios');
const { User, Quiz } = require('../db')

//getInitialWeb
const getQuizWeb = async() => {
  try {
    const data = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
    return data
  } catch (error) {
    console.log(error + 'apifailure');
  }
}

module.exports = {
  getQuizWeb
}