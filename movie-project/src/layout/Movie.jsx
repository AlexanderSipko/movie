
function Movie(props) {
    
    return(
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="" className="activator" src={props.img}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{props.title}
            <i className="material-icons right">{props.year}</i></span>
          <p><a href="!#">This is a link</a></p>
        </div>
      </div>
    )
}

export {Movie}