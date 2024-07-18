import React, { useState, useEffect } from 'react';
import './Order.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from "../../assets/assets.js";

const Order = ({ url }) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error fetching the food list');
      }
    } catch (error) {
      toast.error('Error fetching the food list');
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div className='order-item-food'>
              {order.items.map((item, itemIndex) => {
                if (itemIndex === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}
             
                    <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
                    <div className='order-item-address'>
                      <p>{order.address.street+", "}</p>
                      <p>{order.address.city+", "}</p>
                      <p>{order.address.state+", "}</p>
                      <p>{order.address.country+", "}</p>
                      <p>{order.address.zipcode}</p>
                    </div>
                    <p className='phone-no'>{order.address.phone}</p>
            </div>
            <p>Items:{order.items.length}</p>
            <p>${order.amount}.00</p>
            <select>
              <option vlaue="Food Processing">Food Processing</option>
              <option vlaue="Out of delivery">Out of delivery</option>
              <option vlaue="Deliverd">Deliverd</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order;
