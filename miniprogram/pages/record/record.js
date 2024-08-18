// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_3',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '课程', icon: 'education' },
      { value: 'label_3', label: '训练轨迹记录', icon: 'edit' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
    mode: '',
    dateVisible: false,
    date: new Date('2024-8-16').getTime(), // 支持时间戳传入
    dateText: '',

    // 指定选择区间起始值
    start: '2000-01-01 00:00:00',
    end: '2030-09-09 12:12:12',
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
      case 'label_4':
        wx.redirectTo({
          url: '/pages/my/my',
        })
        break;
      default:
        break;
    }
  },
  showPicker(e) {
    const { mode } = e.currentTarget.dataset;
    this.setData({
      mode,
      [`${mode}Visible`]: true,
    });
  },
  hidePicker() {
    const { mode } = this.data;
    this.setData({
      [`${mode}Visible`]: false,
    });
  },
  onConfirm(e) {
    const { value } = e.detail;
    const { mode } = this.data;

    console.log('confirm', value);

    this.setData({
      [mode]: value,
      [`${mode}Text`]: value,
    });

    this.hidePicker();
  },

  onColumnChange(e) {
    console.log('pick', e.detail.value);
  },
})