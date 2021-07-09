const initialState = {
  // Les messages à afficher
  messages: [],

  //message en train d'être tapé par l'utilisateur
  message: '',

  // nom de l'auteur
  authorName: '',

  //statut de connexion
  isConnected: false
};

// Un switch aurait été plus propre que les multiples if
export default  (state = initialState, action) =>{
  let newState = {...state};

  //LOGIN
  if (action.type === 'TRACK_PSEUDO'){
    newState = {
      ...state,
      authorName: action.value
    }
  }

  if (action.type === 'LOGIN'){
    newState = {
      ...state,
      isConnected: true
    }
  }

  //CHAT
  if (action.type === 'EDIT_MESSAGE'){
    newState = {
      ...state,
      message : action.message
    }
  }

  if (action.type === 'LOAD_MESSAGES'){
    newState= {...state, messages: action.messages.data.messages}
  }

  if (action.type === 'ADD_MESSAGE'){
    newState = {
      ...state, messages: [...state.messages, action.message.data.createMessage]
    }
  }
  return newState;
}
