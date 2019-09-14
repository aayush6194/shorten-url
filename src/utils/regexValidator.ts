function urlTest( url: string) : boolean {
  const urlRegex = /^[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
  return urlRegex.test(url);
}


export { urlTest };