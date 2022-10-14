
import { Image, View } from "@tarojs/components";
import Taro, { useReady } from "@tarojs/taro";
import classNames from "classnames";
import { useState } from "react";
import { navigateBack } from "../../utils/navigateUtils";
import { debounce } from "../../utils/toolUtils";
import navLeft from "../../assets/img/banner_img.png";
import "./index.scss";

interface IProps {
  title?: string;
  leftIcon?: string;
  isShowLeft?: boolean;
  backClick?;
  isTransparent?: boolean;
}

function Index(props: IProps) {
  const {
    title,
    isShowLeft = true,
    backClick,
    leftIcon = navLeft,
    isTransparent = false,
  } = props;

  const [navHeight, setNavHeight] = useState<number>(0); // 文字区间的高度
  const [paddingTop, setPaddingTop] = useState<number>(0); // 胶囊距离顶部的距离
  const [paddingRight, setPaddingRight] = useState<number>(0); // 胶囊距离右边的距离
  const [paddingBottom, setPaddingBottom] = useState<number>(0); // 文字区间距离底部的距离

  useReady(() => {
    const menuInfo = Taro.getMenuButtonBoundingClientRect();
    const sysInfo = Taro.getSystemInfoSync();
    const { height, top, right } = menuInfo;
    const { statusBarHeight, windowWidth } = sysInfo;
    setNavHeight(height);
    setPaddingTop(top);
    setPaddingRight(windowWidth - right);
    setPaddingBottom((top - (statusBarHeight || 0)) * 2);
  });

  const back = (): void => {
    if (backClick) {
      backClick();
    }
    if (Taro.getCurrentPages().length > 1) {
      navigateBack();
    }
  };

  return (
    // fixed的问题，必须外层套一下，不能删除
    <View
      className="container_root"
      style={{
        height: `${navHeight + paddingTop + paddingBottom}px`,
      }}
    >
      <View
        className={classNames("container", isTransparent && "transparent")}
        style={{
          height: `${navHeight}px`,
          padding: `${paddingTop}px 0px ${paddingBottom}px 0px`,
        }}
      >
        <View className="nav">
          {isShowLeft && (
            <Image
              className="left"
              src={leftIcon}
              onClick={debounce(back, 1000, this)}
            ></Image>
          )}
          <View className={classNames("title", isTransparent && "transparent")}>
            {title}
          </View>
          {isShowLeft && <View className="right"></View>}
        </View>
      </View>
    </View>
  );
}

export default Index;
