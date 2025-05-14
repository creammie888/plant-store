import React from 'react';
import Link from 'next/link';
import './CartSwitch.css';

const CartSwitch = ({ activeTab }) => {
  return (
    <div className='container2'>
        <div className="cart-switch">
            <div className='switch-button'>
                <Link href="/order">
                    <button className={activeTab === 'cart' ? 'active' : ''}>Cart</button>
                </Link>
            </div>
            <div className='switch-button'>
                <Link href="/order/ordered">
                    <button className={activeTab === 'ordered' ? 'active' : ''}>Ordered</button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default CartSwitch;
