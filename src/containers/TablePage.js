import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';
import Data from '../data';

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadItems: true
    }
  }

  componentWillMount(){
    this.setState({loadItems: true})
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
      },
      columns: {
        id: {
          width: '9.1%'
        },
        time: {
          width: '9.1%'
        },
        side: {
          width: '9.1%'
        },
        symbol: {
          width: '9.1%'
        },
        quantiy: {
          width: '9.1%'
        },
        placed: {
          width: '9.1%'
        },
        executed: {
          width: '9.1%'
        },
        price: {
          width: '9.1%'
        },
        priority: {
          width: '9.1%'
        },
        status: {
          width: '9.1%'
        },
        trader: {
          width: '9.1%'
        }
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
          <Table selectable={false}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableRowColumn colSpan="7">
                  <input onChange={this.searchItems.bind(this)} type="text" className="form-control" id="search" placeholder="Search...." />
                </TableRowColumn>
                <TableRowColumn colSpan="4">
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
                <TableHeaderColumn style={styles.columns.id}>ID</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.time}>Time</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.side}>Side</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.symbol}>Symbol</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.quantiy}>Quantity</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.placed}>Placed</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.executed}>Executed</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>Price</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.priority}>Priority</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.status}>Status</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.trader}>Trader</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {data.map(item =>
                <TableRow key={item.id}>
                  <TableRowColumn style={styles.columns.id}>{item.id}</TableRowColumn>
                  <TableRowColumn style={styles.columns.time}>{item.creationTime}</TableRowColumn>
                  <TableRowColumn style={styles.columns.side}>{item.side}</TableRowColumn>
                  <TableRowColumn style={styles.columns.symbol}>{item.symbol}</TableRowColumn>
                  <TableRowColumn style={styles.columns.quantiy}>{item.quantity}</TableRowColumn>
                  <TableRowColumn style={styles.columns.placed}>{item.quantityPlaced}</TableRowColumn>
                  <TableRowColumn style={styles.columns.executed}>{item.quantityExecuted}</TableRowColumn>
                  <TableRowColumn style={styles.columns.price}>{item.limitPrice}</TableRowColumn>
                  <TableRowColumn style={styles.columns.priority}>{item.priority}</TableRowColumn>
                  <TableRowColumn style={styles.columns.status}>{item.status}</TableRowColumn>
                  <TableRowColumn style={styles.columns.trader}>{item.traderId}</TableRowColumn>
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
