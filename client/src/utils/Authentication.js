import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import LoadingSpinner from '../components/LoadingSpinner.js';

const locationHelper = locationHelperBuilder({});

export const userIsAuthenticated = connectedRouterRedirect({
  redirectPath: '/login',
  authenticatedSelector: state => state.userInfo !== {},
  wrapperDisplayName: 'UserIsAuthenticated',
  AuthenticatingComponent: LoadingSpinner
})

export const userIsNotAuthenticated = connectedRouterRedirect({
  redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/welcome',
  allowRedirectBack: false,
  authenticatedSelector: state => state.userInfo !== {},
  wrapperDisplayName: 'UserIsNotAuthenticated',
  AuthenticatingComponent: LoadingSpinner
})
