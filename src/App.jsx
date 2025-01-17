import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import Notifications from './pages/Notifications';
import API from './pages/API';
import Login from './pages/AuthPage/Login';
import SignUp from './pages/AuthPage/SignUp';
import Tags from './pages/Tags';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import SecondLandingPage from './pages/SecondLandingPage/SecondLandingPage';
import ThirdLandingPage from './pages/ThirdLandingPage/ThirdLandingPage';
import FirstLandingPage from './pages/FirstLandingPage/FirstLandingPage';
import About from './pages/About/index';
import Pricing from './pages/Pricing';
import Advert from './pages/Advert/Advert';
import Blog from './pages/Blog';
import Career from './pages/Career';
import CookiePolicy from './pages/CookiePolicy';
import Dashboard from './pages/Dashboard';
import FAQ from './pages/FAQ/Index';
import Profile from './pages/Profile/index';
import Help from './pages/Help';
import HowItWorks from './pages/HowItWorks';
import PostQuestion from './pages/PostQuestion';
import Teams from './pages/Team/Team';
import TermsOfUse from './pages/TermsOfUse';
import WalletPage from './pages/WalletPage';
import UserPage from './pages/UserPage/userPage';
import ErrorPage from './pages/ErrorPage/index';
import Settings from './pages/Settings';
import Security from './pages/Security/Security';
import Contact from './pages/Contact/index';
import ProtectedRoutes from './ProtectedRoutes';
import InternalHeader from './components/InternalHeader/InternalHeader';
import InternalFooter from './components/InternalFooter/InternalFooter';
import AskQuestion from './components/AskQuestion/AskQuestion';
import Privacy from './pages/Privacy/Privacy';
import SubmitBlog from './pages/SubmitBlog';
import NotificationSettings from './pages/NotificationSettings/index';
import { AppContext } from './store/AppContext';

function App() {
	const {
		state: { isAuth },
	} = useContext(AppContext);
	const data = localStorage.getItem('user');
	const user = JSON.parse(data);

	return (
		<div className="App">
			{user || isAuth ? <InternalHeader /> : <Header />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/third-landing" element={<ThirdLandingPage />} />
				<Route path="/second-landing" element={<SecondLandingPage />} />
				<Route path="/first-landing" element={<FirstLandingPage />} />
				<Route path="cookie-policy" element={<CookiePolicy />} />
				<Route path="advertising" element={<Advert />} />
				<Route path="blog-page" element={<Blog />} />
				<Route path="faq" element={<FAQ />} />
				<Route path="help-center" element={<Help />} />
				<Route path="terms-of-use" element={<TermsOfUse />} />
				<Route path="pricing-page" element={<Pricing />} />
				<Route path="career" element={<Career />} />
				<Route path="how-it-works" element={<HowItWorks />} />
				<Route path="API" element={<API />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="privacy" element={<Privacy />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route element={<ProtectedRoutes />}>
					<Route path="dashboard/*" element={<Dashboard />} />
					<Route path="dashboard/questions/:id" element={<AskQuestion />} />
					<Route path="profile/:username" element={<Profile />} />
					<Route path="notifications-page" element={<Notifications />} />
					<Route path="tags-page" element={<Tags />} />
					<Route path="teams-page" element={<Teams />} />
					<Route path="wallet" element={<WalletPage />} />
					<Route path="users-page" element={<UserPage />} />
					<Route path="post-questions" element={<PostQuestion />} />
					<Route path="settings" element={<Settings />} />
					<Route path="security-settings" element={<Security />} />
					<Route path="contact" element={<Contact />} />
					<Route path="submit-blog" element={<SubmitBlog />} />

					<Route
						path="notification-settings"
						element={<NotificationSettings />}
					/>
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
			{user || isAuth ? <InternalFooter /> : <Footer />}
		</div>
	);
}

export default Sentry.withProfiler(App);
