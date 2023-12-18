import Cardmovie from "./Cardmovie";
import Addmovie from "./Addmovie";
import Filtermovie from "./Filtermovie";


const Listemovie=(Movies,search,rate,setMovies,setSearch,setRate)=>{
     var x= Movies.filter((el,i,t)=>el.title.toupperCase().includes(search.toUpperCase()) && el.rating >= rate)
 return(

  <div>
      <Addmovie movies={Movies} setMovies={setMovies}/>
            <Filtermovie setSearch={setSearch} setRate={setRate} search={search} rate={rate}/>
            <div className="cards">
            {
                x.length == 0 ? <h1>Movie not found</h1> : x.map((el,i,t)=> <Cardmovie el={el}/>)
                
            }
            </div>



</div>
 )
}
export default Listemovie;