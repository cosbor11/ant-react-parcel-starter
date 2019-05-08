import * as React from 'react'
import { Helmet } from 'react-helmet';

interface SEOProps {
    title: string
    description: string
    type: string
}

export default class SEO extends React.Component<SEOProps> {

    render = () => {
        return (
            <div>
                <Helmet>
                    <title>{this.props.title}</title> 
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta property="og:title" content={this.props.title} />
                    <meta property="og:description" content={this.props.description} />
                    <meta property="og:type" content={this.props.type} />
                </Helmet>
            </div>
        )
    }
}