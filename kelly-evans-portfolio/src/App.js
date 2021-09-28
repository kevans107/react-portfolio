import React, { Component } from 'react'
import "./App.css"
import Header from "./components/Header"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

class App extends Component{
  render(){
    return(
      <>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </>
    )
  }
}

export default App