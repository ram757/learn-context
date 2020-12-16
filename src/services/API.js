import axios from 'axios';

//For now we use 1 instance of axios
axios.defaults.baseURL = 'http://localhost:5000'; // the prefix of the URL
axios.defaults.headers.common['Accept'] = 'application/json'; // default header for all requests

//Creating a middle ware to use :)
const errorMiddleware = (error) => {
  if (error?.response?.status === 401) {
    //TODO: Come back to this and ensure we clean up websockets on location change.
    alert('You are no longer authorized :(');
    window.location.replace('/');
  }
  return error;
};

//Creating interceptors on the request :)
axios.interceptors.request.use((config) => {
  //Always strap on the Authorization tokens if we're using token-based authentication.
  //   config.headers['Authorization'] = localStorage.getItem('token');
  return config;
});

//Creating interceptors on the response :)
axios.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(errorMiddleware(error))
);

//Here we will have some random requests we can make to grab some test data :)
const API = {
  getFake: (queryParams) => {
    const query = queryParams?.idk ? `?idk=${queryParams.idk}` : '';
    return axios.get(`api/fake${query}`);
  },
  postFake: (fakeObj) => {
    const userData = {
      zip: fakeObj?.zip,
    };
    return axios.post('api/fake', userData);
  },
};

export default API;
