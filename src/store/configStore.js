import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import rootReducer from '../reducers/index';
import { itemsFetchData,stockFetchData,orderPostData, deleteOrders, updateOrder,orderPlaceDataSuccess, change, searchItems, updateSearch, notify,success } from '../actions/items';
import {usersFetchData,UsersLoginId} from '../actions/user';
import App  from '../containers/App';
import '../styles/css/style.css';

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

const mapStateToProps = (state) => {
    
    return {
        users: state.users,
        loadHeader : state.loadHeader || false,
        loginId: state.loginId,
        orders:state.orders,
        items: state.items,
        stocks:state.stocks,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading,
        searchResults: state.searchResults,
        notifications: state.notifications,
        notificationMsg: state.notificationMsg
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url)),
        fetchStocks:(url) => dispatch(stockFetchData(url)),
        makeOrders:(url,data) => dispatch(orderPostData(url,data)),
        storeOrders : (data) => dispatch(orderPlaceDataSuccess(data)),
        fetchTraders: (url) => dispatch(usersFetchData(url)),
        getUser: (user) => dispatch(UsersLoginId(user)),
        updateSearch: (newOrder, searchResults) => dispatch(updateSearch(newOrder, searchResults)),        
        searchOrders: (key, criteria, items) => dispatch(searchItems(key, criteria, items)),
        notify: (notificationMsg, notifications) => dispatch(notify(notificationMsg, notifications)),
        success: (opts) => dispatch(success(opts)),                                                      
        deleteOrder: (url) => dispatch(deleteOrders(url)), 
        change: (type) => dispatch(change(type)), 
        updateOrder: (msg, orders, newOrder) => {
            
            return dispatch(updateOrder(msg, orders, newOrder))}                                         
    };
};

console.log(mapStateToProps, mapDispatchToProps, "props++++++++++++")

export var MainApp = connect(mapStateToProps, mapDispatchToProps)(App);
console.log(MainApp, "Should");


 