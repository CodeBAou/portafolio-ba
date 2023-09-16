/** 
 *  config
 *    {
 *        hostname:"",
 *        post:3000
 *    }
 */
class Url_config {
    
  //HOST
  constructor(a) {
      this.host = a.hostname; //Server hostname
      this.port = a.port;//Server port
      this.base = `http://${this.host}:${this.port}`;
  }

  //ROUTES
  get route_auth(){ 
      return `${this.base}/codebaouapi/auth`;
  }
}

export default Url_config;