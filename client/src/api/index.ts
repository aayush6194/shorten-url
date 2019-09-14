import { get, authGet, post, authPost, authPut, customGet } from './method';
import { API } from './routes';

export default {
  //User Route
  url: function(url: string) {
    return get(API.url, url);
  },
  proxy: function(obj : any) {
    return customGet("/", obj);
  },
  shorten : function(url : string) {
    return post(API.shorten, { url });
  }
};