const Content = (props) => {
  return (
    <div className="content">
        <img src={props.poster} alt="iron man" />
        <p> {props.title}</p>
        <p>{props.year}</p>
      
    </div>
  )
}

export default Content
