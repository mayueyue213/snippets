
/**
 * Seconds to string, for example 3601 to 01:00:01
 * @param {*} seconds 
 * @param {*} seperator 
 */
function secondsToString(seconds) {
  let str = '';
  let hourStr = '00';
  let minuteStr = '00';
  let secondStr = '0' + (seconds % 60);

  // 计算小时数，少于一小时则不需计算，减少计算量；
  if (seconds >= 3600) {
    hourStr = '0' + Math.floor(seconds / 3600);
    str += hourStr.slice(-2);
    str += ':';
  }
  
  if (seconds >= 60) {
    minuteStr = '0' + (Math.floor(seconds / 60) % 60);
  }

  str += minuteStr.slice(-2);
  str += ':';
  str += secondStr.slice(-2);
  return str;
}
