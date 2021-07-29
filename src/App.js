import "./App.css";
import "antd/dist/antd.css";
import Router from "./navigation/Router";
import { Layout, Menu } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
import { links } from "./navigation/links";

import OrderContext from "./context/OrderContext";
import useOrder from "./hooks/useOrder";

const { Header, Content } = Layout;

const BlazeCliente = () => {  
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">BLAZE</div>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["0"]}>
          {links.map((l, i) => (
            <Menu.Item key={i}>
              <Link to={l.to}>{l.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: "50px 50px" }}>
        <div className="site-layout-content">
          <Router />
        </div>
      </Content>
    </Layout>
  );
};

function App() {
  const orderState = useOrder()
  return (    
    <OrderContext.Provider value={orderState}>
    <BrowserRouter>
      <BlazeCliente />
    </BrowserRouter>    
    </OrderContext.Provider>
  );
}

export default App;
