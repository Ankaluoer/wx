// pages/myInfo/myInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_4',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '课程', icon: 'education' },
      { value: 'label_3', label: '训练轨迹记录', icon: 'edit' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
    image: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png'
  },

  onChange(e) {
    this.setData({
      value: e.detail.value,
    });
    switch(e.detail.value){
      case 'label_2':
        wx.redirectTo({
          url: '/pages/lesson1/lesson1',
        })
        break;
      case 'label_1':
        wx.redirectTo({
          url: '/pages/home/home',
        })
        break;
      default:
        break;
    }
  },

})