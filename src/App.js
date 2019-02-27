import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';


const sty={
    width : "50px",
    height : "80px"
  };

const menu={
  border:'5px solid black',
  width:'400px',
  align:'center',
  marginLeft:'420px',
  marginBottom:'25px',
  marginTop:'25px'
}

const searchbox={
  width: '500px',
  height: '50px',
  border: '8px solid green',
  marginTop: '25px'
}
const books = [
  {
    "title": "Practical Internet of Things Security, 2nd Edition",
    "subtitle": "Design a security framework for an Internet connected ecosystem",
    "isbn13": "9781788625821",
    "price": "$49.99",
    "image": "https://itbook.store/img/books/9781788625821.png",
    "url": "https://itbook.store/books/9781788625821"
    },
    {
    "title": "Bug Bounty Hunting Essentials",
    "subtitle": "Quick-paced guide to help white-hat hackers get through bug bounty programs",
    "isbn13": "9781788626897",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781788626897.png",
    "url": "https://itbook.store/books/9781788626897"
    },
    {
    "title": "Natural Language Processing with Python Quick Start Guide",
    "subtitle": "Going from a Python developer to an effective Natural Language Processing Engineer",
    "isbn13": "9781789130386",
    "price": "$25.95",
    "image": "https://itbook.store/img/books/9781789130386.png",
    "url": "https://itbook.store/books/9781789130386"
    },
    {
    "title": "Learn OpenCV 4 By Building Projects, 2nd Edition",
    "subtitle": "Build real-world computer vision and image processing applications with OpenCV and C++",
    "isbn13": "9781789341225",
    "price": "$44.99",
    "image": "https://itbook.store/img/books/9781789341225.png",
    "url": "https://itbook.store/books/9781789341225"
    },
    {
    "title": "Hands-On Image Processing with Python",
    "subtitle": "Expert techniques for advanced image analysis and effective interpretation of image data",
    "isbn13": "9781789343731",
    "price": "$44.99",
    "image": "https://itbook.store/img/books/9781789343731.png",
    "url": "https://itbook.store/books/9781789343731"
    },
    {
    "title": "Bioinformatics with Python Cookbook, 2nd Edition",
    "subtitle": "Learn how to use modern Python bioinformatics libraries and applications to do cutting-edge research in computational biology",
    "isbn13": "9781789344691",
    "price": "$39.99",
    "image": "https://itbook.store/img/books/9781789344691.png",
    "url": "https://itbook.store/books/9781789344691"
    },
    {
    "title": "Mastering Windows Group Policy",
    "subtitle": "Control and secure your Active Directory environment with Group Policy",
    "isbn13": "9781789347395",
    "price": "$44.99",
    "image": "https://itbook.store/img/books/9781789347395.png",
    "url": "https://itbook.store/books/9781789347395"
    },
    {
    "title": "Apache Ignite Quick Start Guide",
    "subtitle": "Distributed data caching and processing made easy",
    "isbn13": "9781789347531",
    "price": "$25.95",
    "image": "https://itbook.store/img/books/9781789347531.png",
    "url": "https://itbook.store/books/9781789347531"
    },
    {
    "title": "Hands-On Game Development without Coding",
    "subtitle": "Create 2D and 3D games with Visual Scripting in Unity",
    "isbn13": "9781789538335",
    "price": "$34.99",
    "image": "https://itbook.store/img/books/9781789538335.png",
    "url": "https://itbook.store/books/9781789538335"
    },
    {
    "title": "Robotic Process Automation with Blue Prism Quick Start Guide",
    "subtitle": "Create software robots and automate business processes",
    "isbn13": "9781789610444",
    "price": "$27.95",
    "image": "https://itbook.store/img/books/9781789610444.png",
    "url": "https://itbook.store/books/9781789610444"
    }
]

function searchingFor(term){
  return function(x){
    return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor (props) {
    super (props);
      this.state = {
        books: books,
        term:'',
      }
      this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler (event){
    this.setState({term: event.target.value})
  }
  

  render() {
    const {term, books} = this.state;
    return (
      <div className="App">
      <form>
        <input type="text" onChange={this.searchHandler} value={term} style={searchbox}></input>
      </form>
      {
        books.filter(searchingFor(term)).map( book => 
            <div key={book.isbn13} style={menu}>
              <a href={book.url}><img src={book.image} style={sty}  /></a>
				      <p>{book.title}</p>
            </div>
        )
      }
      </div>
    );
  }
}

export default App;
