import React from 'react'

function Footer() {
    return(
        <footer className="page-footer blue darken-3">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
          </div>
        </footer>
    )
}


export {Footer}