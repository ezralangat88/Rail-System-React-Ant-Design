import React from 'react';
import './App.css';
import MyHeader from './Components/Common/AppHeader';
import 'antd/dist/antd.css';


import { Layout } from 'antd';
import AppHome from './Components/Views/Home';
import AppFooter from './Components/Common/Footer';

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
