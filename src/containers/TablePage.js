import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import PopUpComponent from '../components/Trader/Utilities/PopUpComponent';
import Data from '../data';

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadItems: true
    }
  }

  componentWillMount(){
    this.setState({loadItems: true});
    this.props.openModal(false);
  }

  searchItems(event) {
    let criteria = ReactDOM.findDOMNode(this.refs.criteria).value;
    let key = event.target.value;
    if (key == "") {
      this.setState({ loadItems: true })
    }
    else {
      console.log(key, criteria)
      this.props.searchOrders(key, criteria, this.props.items);
      this.setState({ loadItems: false })
    }
  }

  render() {
    let data;
    console.log(this.state, this.props.searchResults)
     this.state.loadItems == false
      ?
      data = this.props.searchResults
      :
      data = this.props.items;
    const styles = {
      floatingActionButton: {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
      }
    };
    
    
    if (typeof this.props.loginId.id == "undefined") {
      return (<div>
        <h1>PLEASE LOGIN</h1>
        <br />
        <h3>click <Link to="/"><a href="">here</a></Link></h3>
      </div>)
    }

    return (
      <PageBase title="Orders">
        <div>
          
          <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500} onClick = {this.props.openModal(true)}>
            <ContentAdd/>
          </FloatingActionButton>
        <PopUpComponent {...this.props}/>
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableRowColumn colSpan="7">
                  <input onChange={this.searchItems.bind(this)} type="text" className="form-control" id="search" placeholder="Search...." />
                </TableRowColumn>
                <TableRowColumn colSpan="4" >

                  <select ref="criteria" className="form-control" id="sel1">
                    <option>Search By</option>
                    <option value="ID">ID</option>
                    <option value="SIDE">Side</option>
                    <option value="SYMBOL">Symbol</option>
                    <option value="QUANTITY">Quantity</option>
                    <option value="PRIORITY">Priority</option>
                    <option value="STATUS">Status</option>
                    <option value="TRADER">Trader</option>
                  </select>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn >ID</TableHeaderColumn>
                <TableHeaderColumn >Time</TableHeaderColumn>
                <TableHeaderColumn >Side</TableHeaderColumn>
                <TableHeaderColumn >Symbol</TableHeaderColumn>
                <TableHeaderColumn >Quantity</TableHeaderColumn>
                <TableHeaderColumn >Placed</TableHeaderColumn>
                <TableHeaderColumn >Executed</TableHeaderColumn>
                <TableHeaderColumn >Price</TableHeaderColumn>
                <TableHeaderColumn >Priority</TableHeaderColumn>
                <TableHeaderColumn >Status</TableHeaderColumn>
                <TableHeaderColumn >Trader</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {data.map(item =>
                <TableRow key={item.id}>
                  <TableRowColumn >{item.id}</TableRowColumn>
                  <TableRowColumn >{item.creationTime}</TableRowColumn>
                  <TableRowColumn >{item.side}</TableRowColumn>
                  <TableRowColumn >{item.symbol}</TableRowColumn>
                  <TableRowColumn >{item.quantity}</TableRowColumn>
                  <TableRowColumn >{item.quantityPlaced}</TableRowColumn>
                  <TableRowColumn >{item.quantityExecuted}</TableRowColumn>
                  <TableRowColumn >{item.limitPrice}</TableRowColumn>
                  <TableRowColumn >{item.priority}</TableRowColumn>
                  <TableRowColumn >{item.status}</TableRowColumn>
                  <TableRowColumn >{item.traderId}</TableRowColumn>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </PageBase>
    );
  };

}





export default TablePage;
