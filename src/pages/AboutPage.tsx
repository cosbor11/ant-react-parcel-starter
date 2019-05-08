import * as React from 'react'
import SEO from '../components/SEO';
import Page from '../components/Page';

export default class AboutPage extends React.Component {
    render = () => (
        <Page>
            <SEO title="About" description="About page description" type="article" />
            
            <span>about</span>
        </Page>  
    )
}