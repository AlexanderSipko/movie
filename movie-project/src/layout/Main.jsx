import image from '../media/movie_background_1.jpg'

function Main() {
    return(
        <main className="demo_wrap">
            <main className="container content">
                Hello from movie app
                <h1>Hello</h1>
            </main>
            <img src={image} alt="" />
        </main>
    )
}

export {Main}