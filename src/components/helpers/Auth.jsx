const API = 'http://192.168.0.9:1504';

const MyHeaders = new Headers({
  "Content-Type": "application/json"
});

function newSesion(id){
  localStorage.setItem('ssn', id);
}

const ifSesion = () => (
  localStorage.getItem('ssn')
)

const currentSesion = () => (
  {sesion: localStorage.getItem('ssn')}
)

function logout(){
  localStorage.removeItem('ssn');
}

export {
  API,
  MyHeaders,
  newSesion,
  ifSesion,
  currentSesion,
  logout
}