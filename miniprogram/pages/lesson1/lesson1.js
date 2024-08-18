// pages/lesson1/lesson1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_2',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '课程', icon: 'education' },
      { value: 'label_3', label: '训练轨迹记录', icon: 'edit' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
    gbimageSrc: '/images/doublegb.jpg',
    szimageSrc:'/images/doubleszzs.jpg',
  },

  onChange(e) {
    this.setData({
      value: e.detail.value,
    });
    switch(e.detail.value){
      case 'label_1':
        wx.redirectTo({
          url: '/pages/home/home',
        })
        break;
      case 'label_3':
        wx.redirectTo({
          url: '/pages/record/record',
        })
        break;
      default:
        break;
    }
  },
  
})