import React from 'react';
import { useSelector } from 'react-redux';
import { Search } from 'lucide-react';
import useFetch from '../../hooks/useFetch';
import ProductItem from './ProductItem';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';