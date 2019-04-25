import * as React from 'react';
import { Table } from 'antd';

export default class DataTable extends React.Component {
    
    state = { 
        columns: [{title: 'A', dataIndex: 'a'}, {title: 'B', dataIndex: 'b'}],
        data: [{key: '1', a: 'cell value'}]
    }  
    
    render = () => (
        <Table size='small' columns={this.state.columns} dataSource={this.state.data}  />
    )
}