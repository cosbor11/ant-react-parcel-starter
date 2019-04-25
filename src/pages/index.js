import React from 'react'
import ReactDOM from 'react-dom'
import DataTable from '../components/DataTable';
import { Layout} from 'antd';


ReactDOM.render(
    <Layout>
    <Layout.Sider >left sidebar</Layout.Sider>
    <Layout.Content><DataTable /> </Layout.Content>
    <Layout.Sider>right sidebar</Layout.Sider>
    </Layout>, 
    document.getElementById('root')
)