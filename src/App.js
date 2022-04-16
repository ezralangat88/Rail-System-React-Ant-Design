import React from 'react';
import './App.css';
import MyHeader from './Components/AppHeader';
import 'antd/dist/antd.css';


import { Layout } from 'antd';
import AppHome from './Components/Home';
import AppFooter from './Components/Footer';

const { Header,  Content, Footer } = Layout;

function App() {


  return (
    <div>
        <Layout className="mainLayout">
          <Header>
            <MyHeader/>
          </Header>
          <Content>
            <AppHome></AppHome>
          </Content>
          <Footer>
          <AppFooter/>
          </Footer>
        </Layout>   
    </div>
  );
}

export default App;
