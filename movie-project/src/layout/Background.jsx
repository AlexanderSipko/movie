import image from '../media/movie_background_1.jpg'

function Background() {
    return(
        <main className="background" style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover'
          }}>
        </main>
    )
}

export {Background}