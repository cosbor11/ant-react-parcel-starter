import * as React from 'react'
import { Layout }  from 'antd'
import Router from './Router';
import { Link } from 'react-router-dom';

export default class LeftSider extends React.Component {
    render = () => (
        <Layout.Sider>
            <div>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </Layout.Sider>
    )
}