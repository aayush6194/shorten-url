import { authHeader , header, customHeader } from './header';

function get(url: string, param : string) : Promise<any> {
  return fetch(url + '/' +param, { method: 'GET', headers: header() })
    .then((response: any ) => response.json());
}

function customGet(url: string, obj : any) : Promise<any> {
  return fetch(url, { method: 'GET', headers: customHeader(obj)});
}


function authGet(url: string, param : string) : Promise<any> {
  return fetch(url + param, { method: 'GET', headers: authHeader() })
    .then((response: any ) => response.json());
}

function post(url: string, body: any) : Promise<any>{
    return fetch(url, { method: 'POST', headers: header(), body: JSON.stringify(body) })
      .then((response: any ) => response.json());
}

function authPost(url : string, body : any) : Promise<any> {
  return fetch(url, { method: 'POST', headers: authHeader(), body: JSON.stringify(body) })
  .then((response: any ) => response.json());
}

function authPut(url : string, body : any) : Promise<any> {
  return fetch(url, { method: 'PUT', headers: authHeader(), body: JSON.stringify(body) })
  .then((response: any ) => response.json());
}

export { get, authGet, post, authPost, authPut, customGet};