// pages/home/home.js
import ActionSheet, { ActionSheetTheme } from 'tdesign-miniprogram/action-sheet/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '课程', icon: 'education' },
      { value: 'label_3', label: '训练轨迹记录', icon: 'edit' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
    imageSrc: '/asset/home.png',
  },
  
  handleAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.List,
      selector: '#t-action-sheet',
      context: this,
      items: [
        {
          label: '弓步识别',
        },
        {
          label: '实战姿势识别',
        },
      ],
    });
  },
  
  handleSelected(e) {
    console.log(e.detail);
    const { selected } = e.detail;
    const { label } = selected;

    switch (label) {
      case '弓步识别':
        console.log(label);
        wx.redirectTo({
          url: '/pages/recoGb/recoGb',
        });
        break;
      default:
        break;
    }
  },
  
  toCount(e) {
    wx.redirectTo({
      url: '/pages/count/count',
    })
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
      case 'label_3':
        wx.redirectTo({
          url: '/pages/record/record',
        })
        break;
      case 'label_4':
        wx.redirectTo({
          url: '/pages/my/my',
        })
        break;
      default:
        break;
    }
  },

})