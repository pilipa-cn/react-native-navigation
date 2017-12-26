package com.reactnativenavigation.params;

import java.util.List;

public class ScreenParams extends BaseScreenParams {
    public String tabLabel;
    public List<PageParams> topTabParams;
    public List<String> sharedElementsTransitions;

    public boolean isIntercept;// 是否拦截Tab点击事件

    public boolean hasTopTabs() {
        return topTabParams != null && !topTabParams.isEmpty();
    }

    public FabParams getFab() {
        return hasTopTabs() ? topTabParams.get(0).fabParams : fabParams;
    }
}
