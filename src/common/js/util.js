import Vue from 'vue';
// import axios from 'axios';

// // 将axios改写为Vue的原型链
// Vue.prototype.$http = axios;

function convertToStarsArray(stars) {
  let num = stars.toString().substring(0, 1);
  let array = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0);
    };
  };
  return array;
};

// function http(url, callback) {
//     this.$http({
//         url: url,
//         method: 'GET',
//         header: {
//             'Content-type': 'json' // 设置请求的 header
//         },
//         success: function (res) {
//             callback(res.data);
//         },
//         fail: function (error) {
//             // fail
//             console.log(error);
//         }
//     });
// }
function convertToCastString(casts) {
  let castsjoin = ' ';
  for (var idx in casts) {
    castsjoin = castsjoin + casts[idx].name + ' / ';
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  let castsArray = [];
  for (let idx in casts) {
    let cast = {
      img: casts[idx].avatars ? casts[idx].avatars.large : ' ',
      name: casts[idx].name
    };
    castsArray.push(cast);
  }
  return castsArray;
}

export default{
  convertToStarsArray: convertToStarsArray,
  // http: http,
  convertToCastString: convertToCastString,
  convertToCastInfos: convertToCastInfos
};