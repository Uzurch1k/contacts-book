import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return true ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
