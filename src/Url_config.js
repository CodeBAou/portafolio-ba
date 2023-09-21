/** 
 *  config de la url
 */
class Url_config {
    
  //HOST
  constructor() {
      this.host = 'localhost'; //Server hostname  
      this.port = 3005;//Server port
      this.limite_Tabulacion_postlist = 10; //Numero max de post que se listan 
      this.base = `http://${this.host}:${this.port}`; //URL BASE URL HOST + PORT
  }

  //ROUTES
  route_auth(){ return `${this.base}/codebaouapi/auth`;}
  route_allposts(desde){ return `${this.base}/codebaouapi/post?desde=${desde}&limite=${this.limite_Tabulacion_postlist}`; }
  route_estadisticas(){ return `${this.base}/codebaouapi/estadistica`; }
  route_delete(id){ return `${this.base}/codebaouapi/post/${id}`; }
  
}

export default Url_config;