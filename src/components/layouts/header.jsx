import React from 'react'
import {Link} from 'react-router-dom'
import AuthOption from'../auth/AuthOption'
import '../../App.css'

export default function header() {
	return (
		<header id="header">
        <Link className="title" to="/"><h1>MERN Auth and Blog App</h1>
		</Link>
		<AuthOption/>
		</header>
	)
}

