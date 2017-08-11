/**
 * Created by admin on 2017/8/10.
 */
import React from 'react';
import {Row,Col,Menu,Icon,Form,Input,Button,message,Modal,Tabs,Checkbox} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup;
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;

class comment extends React.Component{
    constructor(){
        super();
        this.state={
            comment:""
        }
    };

    componentDidMount() {
        var myFetchOptions = {
            method: 'GET'
        };
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey, myFetchOptions).then(response => response.json()).then(json => {
            this.setState({comment: json});
        });
    };

    handleSubmit(e){
        e.preventDefault();
        var myFetchOptions = {
            method: 'GET'
        };
        var formdata=this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark, myFetchOptions).then(response => response.json()).then(json => {
            this.componentDidMount();
        })
    }

    render(){
        let {getFieldDecorator} = this.props.form;
        const {comment}=this.state;
        console.log(comment);
        const commentLsit=comment.length?
            comment.map((comment,index)=>(
                <card key={index} title={comment.UserName} extra={<a href="#">发表于{comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </card>
            ))
            :
            "没有加载到任何评论"
        return(
            <div className="comment">
                <Row>
                    <Col span={24}>
                        {commentLsit}
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('l_password',{initialValue:""})(<Input type="textarea" placeholder="请输入您的密码"></Input>)}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default comment = Form.create({})(comment)