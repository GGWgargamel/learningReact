/**
 * Created by admin on 2017/7/11.
 */
import React from 'react';
import {Row,Col,Menu,Icon,Form,Input,Button,message,Modal,Tabs,Checkbox} from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup =Menu.ItemGroup;
const FormItem=Form.Item;
const TabPane=Tabs.TabPane;

class pc_Header extends React.Component{
    constructor(){
        super();
        this.state= {
            current: "top",
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
    handleClick(e){
        console.log(e);
        if(e.key=="register"){
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
            console.log(json)
            this.setState({
                userNickName:json.NickUserName,
                userId:json.UserId
            });
            localStorage.userid=json.UserId;
            localStorage.userNickName=json.NickUserName;
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
    logout(e){
        e.preventDefault();
        localStorage.userid="";
        localStorage.userNickName="";
        this.setState({
            hasLogined:false,
            modalVisible:false
        })
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
    render(){
        let {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogined
        ?
        <Menu.Item key="logout" className="register">
            <Button type="primary" htmlType="button">{this.state.userName}</Button>
            <Button type="dashed" htmlType="button">
                <Button>个人中心</Button>
            </Button>
            <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>

        </Menu.Item>
        :
        <Menu.Item key="register" className="register">
            <Icon type="appstore"/>
            <Button type="dashed" htmlType="button">登录/注册</Button>
        </Menu.Item>;
        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src="./src/img/index/news.png" alt=""/>
                            <span>news</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} defaultSelectedKeys={[this.state.current]}>
                            <Menu.Item key="top" ><Icon type="appstore"/>头条</Menu.Item>
                            <Menu.Item key="tiyu"><Icon type="appstore"/>体育</Menu.Item>
                            <Menu.Item key="yule"><Icon type="appstore"/>娱乐</Menu.Item>
                            <Menu.Item key="keji"><Icon type="appstore"/>科技</Menu.Item>
                            <Menu.Item key="shehui"><Icon type="appstore"/>社会</Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>

                </Row>

                <Modal title="用户中心"  wrapClassName="vertical-center-modal" visible={this.state.modalVisible} onCancel = {()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
                    <Tabs type="card"  onChange={this.handleTab.bind(this)}>
                        <TabPane tab="注册" key="2">
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
            </header>
        )
    }
}
export default pc_Header = Form.create({})(pc_Header)