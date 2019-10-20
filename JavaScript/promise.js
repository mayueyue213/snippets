/**
 * 
 * 基本上不会再有直接使用XMLHttpRequest的情况, 
 * 无论是借助aixos这样的库, 还是个人使用, 都应当进行封装, 不过是封装程度和完善程度的不同而已.
 * @param {*} url 
 */
function get(url) {
  return new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    req.onload = function() {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText))
      }
    }

    req.onerror = function() {
      reject(new Error(req.statusText))
    }
  })
}
