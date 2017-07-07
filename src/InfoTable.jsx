import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/RaisedButton';

const InfoTable = () => (
  <Table>
    <TableHeader>
      <TableRow> 
        <TableHeaderColumn>时间</TableHeaderColumn>
        <TableHeaderColumn>项目</TableHeaderColumn>
        <TableHeaderColumn>收入</TableHeaderColumn>
        <TableHeaderColumn>支出</TableHeaderColumn>
        <TableHeaderColumn>合计</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>2017-07-07</TableRowColumn>
        <TableRowColumn>测试收入支出</TableRowColumn>
        <TableRowColumn>2000元</TableRowColumn>
        <TableRowColumn>1000元</TableRowColumn>
        <TableRowColumn>1000元</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default InfoTable;