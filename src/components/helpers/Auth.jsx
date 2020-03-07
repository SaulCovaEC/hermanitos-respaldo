const API = 'http://192.168.0.9:1504';

const MyHeaders = new Headers({
  "Content-Type": "application/json"
});

function newSesion(id){
  localStorage.setItem('ssn', id);
}

function updateLang(lang){
  localStorage.setItem('lang', lang);
}

const ifSesion = () => (
  localStorage.getItem('ssn')
)

const ifLang = () => (
  localStorage.getItem('lang')
)

const currentSesion = () => (
  {sesion: localStorage.getItem('ssn')}
)

const currentLang = () => (
  {lang: localStorage.getItem('lang')}
)

function logout(){
  localStorage.removeItem('ssn');
}

export {
  API,
  MyHeaders,
  newSesion,
  updateLang,
  ifSesion,
  ifLang,
  currentSesion,
  currentLang,
  logout
}