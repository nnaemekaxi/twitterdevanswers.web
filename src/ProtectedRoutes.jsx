import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes() {
	const data = localStorage.getItem('user');
	const user = JSON.parse(data);

	return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
