import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import "../stylesheets/Article-Cards.css";
import "../stylesheets/Article-List.css";
 class Services extends Component {
  render() {
    return (
      <div className="article-list">
      <div className="container">
          <div className="intro">
              <h2 className="text-center"> Services I Provide </h2>
              <p className="text-center"></p>
          </div>
          <div className="row articles">
              <div className="col-md-4 col-sm-6 item">
                  <a href="#"><img className="img-responsive" src="web.jpg" style={{width:260,height:173}} /></a>
                  <h3 className="name">Web Development</h3>
                  <p className="description"> I Provide Web development services , where i design websites , and provide functionality as required.</p><a href="#" className="action"><i className="glyphicon glyphicon-circle-arrow-right"></i></a></div>
              <div  className="col-md-4 col-sm-6 item">
                  <a href="#"><img className="img-responsive" src="http://www.w3coding.com/blog/wp-content/uploads/2018/01/mobile-app-development.jpg" style={{width:260,height:173}} /></a>
                  <h3 className="name">Mobile App Development</h3>
                  <p className="description">Iphone App or Android App - me and my Team can help you create the App you need for your business.</p><a href="#" className="action"><i className="glyphicon glyphicon-circle-arrow-right"></i></a></div>
          <div  className="col-md-4 col-sm-6 item">
              <a href="#"><img className="img-responsive" src="https://soundrips.files.wordpress.com/2016/05/sound-rips-studio.jpg" style={{width:260,height:173}} /></a>
              <h3 className="name">Music and IT Training</h3>
              <p className="description"> Providing Services like Guitar Training , Piano Training and Coding Lessons in latest current technologies.</p><a href="#" className="action"><i className="glyphicon glyphicon-circle-arrow-right"></i></a></div>
  </div>
  </div>
  </div>
    )
  }
}
export default Services;