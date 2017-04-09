import React from 'react';
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  notification,
} from 'antd';

const FormItem = Form.Item;

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    }
  }
  componentDidMount() {
    var myOptionals = {
      method: 'GET'
    };

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myOptionals).then(response => response.json()).then(json => {
      this.setState({comments: json});
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formdata = this.props.form.getFieldsValue();
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
      this.componentDidMount();
    })
  };
  addCollection() {
    var myFetchOption = {
      method: 'GET'
    };

    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid=" + localStorage.userid +"&uniquekey="+ this.props.uniquekey,myFetchOption)
    .then(response => response.json())
    .then(
      json => {
        notification['success']({message: 'ReactNews提醒', description: '收藏此文章成功'});
      }
    )
  }

  render() {
    let {getFieldProps} = this.props.form;

    const  { comments } = this.state;

    const commentList = comments.length
      ? comments.map((comment, index) => (
        <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
          <p>{comment.Commnets}</p>
        </Card>
        ))
      :"没有加载到评论";

    return(
      <div className="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                <Input type="textarea" placeholder="留点什么吧..." {...getFieldProps('remark',{initialValue: ''})}/>
                <Button type="primary" htmlType="submit">提交评论</Button>
                &nbsp;&nbsp;&nbsp;
<Button type="primary" htmlType="button" onClick={this.addCollection.bind(this)}>收藏</Button>
              </FormItem>

            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Comment=Form.create({})(Comment);