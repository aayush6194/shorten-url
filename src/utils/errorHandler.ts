const handle = (promise : any) => {
    return promise
      .then((data: any) => ([data, undefined]))
      .catch((error: any) => Promise.resolve([ undefined, error ]));
  }
  
  export default handle;