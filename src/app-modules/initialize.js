import { API } from './api';

export const INIT = function(){

  function load() {

    let data;
    API.getStudents(res => { data = res });
    // console.log(localStore.getStudents());
    return data;
  }

  return { load : load }
}()
