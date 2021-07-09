let socket;

const middleware = (store) => (next) => (action) => {
  console.log('Action envoyée vers le store : ', action);

  if ( action.type === 'INIT_SOCKET' ){
    socket = io('ws://localhost:8000/', {transports: ['websocket', 'polling', 'flashsocket']});
    socket.on('send_message', (message)=>{
      console.log(message);
      store.dispatch({type: 'ADD_MESSAGE', message})
    });
    socket.on('load_messages', (messages)=>{
      store.dispatch({type: 'LOAD_MESSAGES', messages})
    })
  }
  if ( action.type === 'SEND_MESSAGE' ){
    const {message, authorName} = store.getState();
    socket.emit('send_message', {
      author: authorName,
      content: message
    })
  }
  next(action);
}

export default middleware;
