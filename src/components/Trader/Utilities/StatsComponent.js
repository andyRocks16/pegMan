import React from 'react';
import ReactDOM from 'react-dom';
import cookie from 'react-cookie';
import { instrumentsUrl, orderUrl } from '../../../app.config';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FullscreenDialog from 'material-ui-fullscreen-dialog';
import {Link} from 'react-router';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import {pink500, grey200, grey500} from 'material-ui/styles/colors';
import PageBase from '../../../components/PageBase';
import Data from '../../../data';

export default class Stats extends React.Component {
    constructor(props) {
        super(props);
      

    }

    // componentDidMount() {

    //     this.props.fetchStocks(orderUrl);
    // }

    closeDialogue() {
        this.props.openDialogue(false);
    }



    render() {
        console.log(this.props,'statistics');
        var name = this.props.loginId.name
        return (
            <FullscreenDialog
                open ={this.props.openD}
                onRequestClose={() => this.props.openDialogue(false)}
                
                title={name + " Statistics"}
                actionButton={<FlatButton
                    label='Done'
                    onClick = {this.closeDialogue.bind(this)}
                />}
            >
            
            </FullscreenDialog>
        );
    }

}