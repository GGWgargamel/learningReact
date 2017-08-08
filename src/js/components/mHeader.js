/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import {Row,Col,Menu,Icon,Form,Input,Button,message,Modal,Tabs,Checkbox} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup;
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;

class MHeader extends React.Component{
    constructor(){
        super();
        this.state= {
            modalVisible:false,
            hasLogined:false,
            action:"login",
            userName:"",
            userId:0
        }
    }
    setModalVisible(value){
        this.setState({
            modalVisible:value
        })
    }
    handleTab(e){
        e.preventDefault();
        if(e.key==1){
            this.setState({
                action:"login"
            })
        }else{
            this.setState({
                action:"register"
            })
        }

    }
    logout(e){
        e.preventDefault();
        localStorage.userid="";
        localStorage.userNickName="";
        this.setState({
            hasLogined:false,
            modalVisible:false
        })
    }
    handleClick(e){
        console.log(e);
        if(e.key="register"){
            this.setState({
                current:"register"
            });
            this.setModalVisible(true)

        }else{
            this.setState({
                current:e.key
            })
        }

    }
    componentWillMount(){
        if(localStorage.userid!=""){
            this.setState({
                hasLogined:true,
                userNickName:localStorage.userNickName,
                userId:localStorage.UserId
            })
        }
    }
    handleSubmit(e){
        //页面提交数据
        e.preventDefault();
        var myFetchOptions={
            method:"GET"
        };
        var formData =  this.props.form.getFieldsValue();
        fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            +"&userName=" + formData.l_userName + "&password="+ formData.l_password
            +"&r_userName=" + formData.r_userName + "&r_password="
            + formData.r_password + "&r_confirmPassword="
            + formData.r_confirmPassword, myFetchOptions)
            .then(response=>response.json())
            .then(json=>{
                this.setState({
                    userNickName:json.NickUserName,
                    userid:json.UserId
                })
            })
        if(this.state.action=="login"){
            this.setState({
                hasLogined:true,
                userName:formData.l_userName
            })
        }
        message.success("请求成功");
        this.setModalVisible(false)
    }
    login(){
        this.setModalVisible(true)
    }
    render(){
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
        ?
        <Button type="primary" onClick={this.logout.bind(this)}>
            <Icon type="inbox"/>
        </Button>
        :
        <Icon type="setting" onClick={this.login.bind(this)} className="loginBtn"/>
        return(
            <div id="mobile">
                <header>
                    <img src="./src/img/index/news.png" alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>

                <Modal title="用户中心"  wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card" onChange={this.handleTab.bind(this)}>
                        <TabPane tab="注册" key="2" >
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('r_userName')(<Input placeholder="请输入您的账号"></Input>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码"></Input>)}
                                </FormItem>
                                <FormItem label="确认密码">
                                    {getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入您的密码"></Input>)}
                                </FormItem>
                                <Button type="primary" htmlType="submit">注册</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="登录" key="1">
                            <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('l_userName')(<Input placeholder="请输入您的账号"></Input>)}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('l_password')(<Input type="password" placeholder="请输入您的密码"></Input>)}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>

        )
    }
}
export default MHeader = Form.create({})(MHeader)