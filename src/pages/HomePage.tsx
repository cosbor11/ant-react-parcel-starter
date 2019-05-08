import * as React from 'react'
import DataTable from '../components/DataTable';
import Page from '../components/Page';
import SEO from '../components/SEO';

export default class HomePage extends React.Component {
    render = () => (
        <Page>
            <SEO title="About" description="Home page description" type="article" />
            
            <span>home</span>
            <DataTable />
        </Page>
    )
}