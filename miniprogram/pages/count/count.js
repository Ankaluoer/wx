// pages/count/count.js
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
    imageSrc: '/images/touming.jpg',
    photoLink: '',
    videoLink: '',
  },

  handleBack() {
    wx.redirectTo({
      url: '/pages/home/home',
    })
    console.log('go back');
  },

  downloadVedio(){
    wx.request({
      url: 'http://192.168.110.251:5000/vedio',  
    })
  },

vedioCapture() {
  let that = this
  wx.chooseMedia({
    count: 1,
    mediaType: ['video'],
    sourceType: ['camera'],
    maxDuration: 60,
    camera: 'back',
    success(res) {
      that.setData({
        videoLink: res.tempFiles[0].thumbTempFilePath
      })
      console.log('视频拍摄成功')
      console.log(res.tempFiles[0].tempFilePath)
      wx.showLoading({
        title: '正在上传视频',
        mask: true
      })

      //视频上传
      wx.uploadFile({
        url:'http://192.168.110.251:5000/uploadVideo',
        filePath: res.tempFiles[0].tempFilePath,
        name: 'video',
        formData: {
          fileName:'videoTest.mp4'
        },
        success(res) {
          wx.showToast({
            title: res.data,
          })
        }
      })
    },
    fail(res) {
      console.log('图片拍摄失败')
    }
  })
}
  
})