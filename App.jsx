import Header from "./Header"
import Content from "./content"
import Movies from "./assets/movie.json"
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        {
        Movies.map((element,index) => {
          return(
          <Content  
          key={index
          }
          title={element.Title}
          year={element.Year}
          poster={element.Poster}
          />
          )
        
        })}
      </div>
     </div>
  )
}

export default App
