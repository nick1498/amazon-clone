import React from 'react';
import { Admin, Resource,ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { ProductList, ProductShow, ProductCreate, ProductEdit } from './ProductsList';
import { UserList, UserShow, UserCreate, UserEdit } from './UsersList';
import { OrdersList, OrdersShow, OrdersCreate, OrdersEdit } from './OrdersList';
import { dataProvider } from "../firebase";
import ProductIcon from '@material-ui/icons/ShoppingBasket';
import UserIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './admin.css';
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { authProvider } from "./authProvider";
import Dashboard from './Dashboard';

//connect the data provider to the REST endpoint
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function AdminPage() {

    
   return (
       <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
           <Resource
            name="products"
            icon={LibraryBooksIcon}
            list={ProductList}
            show={ProductShow}
            create={ProductCreate}
            edit={ProductEdit}
            />
            <Resource
            name="users"
            icon={UserIcon}
            list={UserList}
            show={UserShow}
            create={UserCreate}
            edit={UserEdit}
            />
            <Resource
            name="orders"
            icon={ProductIcon}
            list={OrdersList}
            show={OrdersShow}
            create={OrdersCreate}
            edit={OrdersEdit}
            />
       </Admin>
   );
}

export default AdminPage;