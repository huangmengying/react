import React from 'react';
import PcHeader from './pcHeader';
import PcFooter from './pcFooter';
import PcImage from './pcImage';
import {
  Row,
  Col,
  BackTop,
} from 'antd';
import Comment from './common';

class PcDetails extends React.Component {
  constructor() {
    super();
      this.state = {
      newsItem: '',
    }
  }
  componentDidMount() {
    var myOptionals = {
      method: 'GET'
    };

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.params.uniquekey, myOptionals).then(response => response.json()).then(json => {
      this.setState({newsItem: json});
      document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
    })
  }

  createMarkup() {
    return {
      __html:this.state.newsItem.pagecontent,
    };
  };

  render() {
    return (
      <div>
        <PcHeader />
        <Row>
          <Col span={2}></Col>
          <Col span={13} className="container">
            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
            <Comment uniquekey={this.props.params.uniquekey}></Comment>
          </Col>
          <Col span={7}>
            <PcImage count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"/>
          </Col>
          <Col span={2}></Col>
        </Row>
        <PcFooter />
        <BackTop></BackTop>
      </div>

    )
  }
}

export default PcDetails;
