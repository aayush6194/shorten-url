import { get, authGet, post, authPost, put, customGet } from './method';
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
    return put(API.shorten, { url });
  }
};