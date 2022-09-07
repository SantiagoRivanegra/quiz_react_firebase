const initialState={
  quiz:[]
}

export default function reducer(state = initialState, {type, payload}){
  switch(type){

    /* Get all Countries */
    case 'GET_WEB_QUIZ':
    return{
      ...state,
      quiz: payload,
    }

    default: return state
  }
}