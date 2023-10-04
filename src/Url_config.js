/** 
 *  config de la url
 */
class Url_config {
    
  //HOST
  constructor() {
      this.host = 'localhost'; //Server hostname  
      this.port = 3005;//Server port
      this.api  = '/codebaouapi';
      this.limite_Tabulacion_postlist = 15; //Numero max de post que se listan 
      this.base = `http://${this.host}:${this.port}${this.api}`; //URL BASE URL HOST + PORT
    
  }
  
  //ROUTES
  route_auth(){ return `${this.base}/auth`;}
  route_allposts(desde){ return `${this.base}/post?desde=${desde}&limite=${this.limite_Tabulacion_postlist}`; }
  route_estadisticas(){ return `${this.base}/estadistica`; }
  route_delete(id){ return `${this.base}/post/${id}`; }
  route_savePost(){ return `${this.base}/post`;}
  route_totalPost(){ return `${this.base}/estadistica`;}
  route_GetPost(id){return `${this.base}/post/${id}`;}
  route_GetSections(id){ return `${this.base}/post/sections/${id}`;}
}

export default Url_config;