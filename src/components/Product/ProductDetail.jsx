import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import { cartActions } from '../../store/cartSlice';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';