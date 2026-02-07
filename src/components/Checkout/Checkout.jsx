import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CreditCard, CheckCircle } from 'lucide-react';
import { cartActions } from '../../store/cartSlice';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', address: '', card: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => { alert("Order placed successfully!"); dispatch(cartActions.clearCart()); navigate('/'); }, 500);
  };

  if (totalAmount === 0) return <div className="container mx-auto px-4 py-20 text-center"><h2 className="text-2xl font-bold">Cart is empty</h2><Link to="/" className="text-blue-600">Return Home</Link></div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-2xl font-bold mb-8 text-center">Checkout</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div><label className="block text-sm font-medium mb-2">First Name</label><input required className="w-full px-4 py-2 border rounded-lg" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} /></div>
            <div><label className="block text-sm font-medium mb-2">Last Name</label><input required className="w-full px-4 py-2 border rounded-lg" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} /></div>
          </div>
          <div><label className="block text-sm font-medium mb-2">Email</label><input required type="email" className="w-full px-4 py-2 border rounded-lg" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></div>
          <div><label className="block text-sm font-medium mb-2">Address</label><textarea required rows="3" className="w-full px-4 py-2 border rounded-lg" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} /></div>
          <div><label className="block text-sm font-medium mb-2">Card Number</label><div className="relative"><CreditCard className="absolute left-3 top-2.5 text-gray-400" size={18} /><input required className="w-full pl-10 pr-4 py-2 border rounded-lg" placeholder="0000 0000 0000 0000" value={formData.card} onChange={e => setFormData({...formData, card: e.target.value})} /></div></div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition mt-6 flex justify-center items-center gap-2"><CheckCircle size={20} /> Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;