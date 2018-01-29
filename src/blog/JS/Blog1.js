import React, { Component } from 'react';
import '../../css/style.css';
import marked from 'marked';
import styled from 'styled-components';


const Div = styled.div`
  margin: 50px 100px 0px 100px;
  h2 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 1px;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  text-align: left;
`;


class Blog1 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      color: props.initialColor
    };
  }

  componentWillMount() {
    const readmePath = require("../Posts/Understanding Systems of Ethics.md");
  
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text, {sanatize : true})
        })
      })
  }
  render(){
    const { markdown } = this.state;
    return(
      <Div>
        <Paragraph dangerouslySetInnerHTML={{__html: markdown}}></Paragraph>
      </Div>
    );
  }
}

export default Blog1;