const initialState = {
  // Les messages à afficher
  messages: [],

  //message en train d'être tapé par l'utilisateur
  message: '',

  // nom de l'auteur
  authorName: ''
}

export default  (state = initialState, action) =>{
  let newState = {...state};

  if (action.type === 'EDIT_MESSAGE'){
    newState = {
      ...state,
      message : action.message
    }
  }
  return newState;
}
