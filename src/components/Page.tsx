import * as React from 'react'
import {Layout} from 'antd'
import LeftSider from './LeftSider';

export default class Page extends React.Component {

    render = () => {
        return (
            <Layout>
                <LeftSider />
                <Layout.Content>
                    {this.props.children}
                </Layout.Content>
            </Layout>
        )
    }
}