import gaxios from 'gaxios';

gaxios.instance.defaults = {
  baseURL: 'http:'
  headers: {
    Authorization: 'SOME_TOKEN'
  }
}
