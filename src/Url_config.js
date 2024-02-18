/** 
 *  config de la url
 */
class Url_config {
    
  //HOST
  constructor() {
      this.host                       = 'localhost'; //Server hostname  localhost
      this.port                       = 3005;//Server port
      this.api                        = '/codebaouapi';
      this.limite_Tabulacion_postlist = 15; //Numero max de post que se listan 
      //this.base                       = `http://${this.host}:${this.port}${this.api}`; //URL BASE URL HOST + PORT
      this.base = `https://codebaou-page-backend.vercel.app${this.api}`
  }
  
  //ROUTES
  static getBaseUrl(){ return `http://${this.host}:${this.port} `}
  route_auth(){ return `${this.base}/auth`;}
  route_allposts(desde){ return `${this.base}/post?desde=${desde}&limite=${this.limite_Tabulacion_postlist}`; }
  route_estadisticas(){ return `${this.base}/estadistica`; }
  route_delete(id){ return `${this.base}/post/${id}`; }
  route_savePost(){ return `${this.base}/post`;}
  route_totalPost(){ return `${this.base}/estadistica`;}
  route_GetPost(id){return `${this.base}/post/${id}`;}
  
  route_allpostsNoTab(desde){ return `${this.base}/post?desde=${desde}&limite=0`; } //Devuelve todos los post no tabulados
  route_Destacados(){ return `${this.base}/post/destacados`; }
  route_DestacadosGet(){ return `${this.base}/post/destacados/all`; }
  route_updatePost(){ return `${this.base}/post/updatePost`;}

  route_GetSections(id){ return `${this.base}/section/${id}`;}
  route_updateSections(){ return `${this.base}/section`; }
  route_SectionById(id){ return `${this.base}/section/${id}`; }
  route_deleteSections(){ return `${this.base}/section`};//Eliminar Secciones
 
}

export default Url_config;