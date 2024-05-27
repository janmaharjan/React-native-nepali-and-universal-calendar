import React from 'react';
class Helper {
  

  dateFormatter =  data => {
    var date = ('0' + data.getDate()).slice(-2);
    var month = ('0' + (data.getMonth() + 1)).slice(-2);
    var year = data.getFullYear();
    return  (year + '-' + month + '-' + date).toString();
  };
  
}
const helper = new Helper();
export default helper;
