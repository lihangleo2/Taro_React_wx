import { showTextToast } from "./toastUtils";

export function debounce(fn, delay, target) {
    // 定时器，用来 setTimeout
    let timer;
    return function() {
      // 存在timer说明不久前执行了操作
      if (!timer) {
        // 立刻执行，不等的那种
        fn.apply(target, Array.from(arguments));
        // 下面的单纯就是一个切换flag的逻辑
        timer = setTimeout(function() {
          clearTimeout(timer);
          timer = null;
        }, delay);
      } else {
        showTextToast("请勿频繁点击");
      }
    };
  }