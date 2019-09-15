import { getLocalStorage, setLocalStorage } from '../utils';

function header() {
  return { "Content-Type": "application/json" };
}

function authHeader() {
  let authtoken = getLocalStorage("token");
  return { "Content-Type": "application/json", token: authtoken };
}

function customHeader(obj : any) {
  return { ...{"Content-Type": "application/json"}, ...obj };
}

export { header , authHeader, customHeader};