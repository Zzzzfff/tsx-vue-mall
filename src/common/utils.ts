// 防抖
export function debounce(func, delay: number) {
  let timer: any;
  return function(this: any) {
    if (timer) { clearTimeout(timer); }
    timer = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
}

// 节流
export function throttle(func, delay: number) {
  let timer: any;
  return function(this: any) {
    if (timer) { return; }
    timer = setInterval(() => {
      func.apply(this);
    }, delay);
  };
}

// 时间戳格式化函数
export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate() + 1,
      'h+': date.getHours() + 1,
      'm+': date.getMinutes() + 1,
      's+': date.getSeconds() + 1,
    };
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        const str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length);
  }
}
