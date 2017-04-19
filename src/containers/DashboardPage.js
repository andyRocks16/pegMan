import React from 'react';
import { cyan600, pink600, purple600, orange600 } from 'material-ui/styles/colors';
import Refresh from 'material-ui/svg-icons/action/cached';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import NoteAdd from 'material-ui/svg-icons/action/note-add';
import Statastics from 'material-ui/svg-icons/action/perm-identity';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import OrderDetails from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';

export default class DashboardPage extends React.Component {
  constructor(props){
    super(props);
    
  }
    deleteAllOrders() {
    console.log("in delter");
		this.props.deleteOrder("http://localhost:8080/orders")
	}

	refershOrders() {
		this.props.fetchData("http://localhost:8080/orders");
	}
  render() {
    console.log(this.props)

      return (
        <div>
          <h3 style={globalStyles.navigation}>Application / Dashboard</h3>

          <div className="row">


         <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 " > 
            <InfoBox Icon={NoteAdd}
              color={pink600}
              title="Create Trades"
            />
          </div>


          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 " onClick ={this.deleteAllOrders.bind(this)} >
            <InfoBox Icon={Delete} {...this.props}
              color={cyan600}
              title="Delete"
            />
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 " onClick ={this.refershOrders.bind(this)} >
            <InfoBox Icon={Refresh}
              color={purple600}
              title="Refresh"
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15 ">
            <InfoBox Icon={Statastics}
              color={orange600}
              title="Stats"

            />
          </div>
        </div>

        {/*<div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
          <NewOrders data={Data.dashBoardPage.newOrders}/>
        </div>

        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
          <MonthlySales data={Data.dashBoardPage.monthlySales}/>
        </div>
      </div>*/}

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <OrderDetails {...this.props} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
            <BrowserUsage data={Data.dashBoardPage.browserUsage} />
          </div>
        </div>
      </div>
    );
  };

}

//          <div className="row">
//            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-md m-b-15">
//              <NewOrders data={Data.dashBoardPage.newOrders}/>
//            </div>

//            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15">
//              <MonthlySales data={Data.dashBoardPage.monthlySales}/>
//            </div>
//          </div>

//          <div className="row">
//            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
//              <RecentlyProducts data={Data.dashBoardPage.recentProducts}/>
//            </div>

//            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
//              <BrowserUsage data={Data.dashBoardPage.browserUsage}/>
//            </div>
//          </div>
//        </div>
//      );
//    };
//}