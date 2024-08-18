// pages/recoGb/recoGb.js
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
  },
  
  handleBack() {
    wx.redirectTo({
      url: '/pages/home/home',
    })
    console.log('go back');
  },

  photoCapture() {
    let that = this;
    wx.chooseMedia({
      count: 1,
      mediaType: ['image'],
      sourceType: ['camera'],
      camera: 'back',
      success(res) {
        that.setData({
          photoLink: res.tempFiles[0].tempFilePath,
          imageSrc: res.tempFiles[0].tempFilePath,
        });
        console.log(res.tempFiles[0].tempFilePath);
        console.log('图片拍摄成功');
        wx.showLoading({
          title: '正在上传图片',
          mask: true,
        });
        // 图片上传
        wx.uploadFile({
          url: 'http://192.168.110.251:5000/uploadImage',
          filePath: res.tempFiles[0].tempFilePath,
          name: 'photo',
          formData: {
            fileName: 'photoTest'+ Math.random() +'.png'
          },
          success(res) {
            wx.showToast({
              title: '图片上传成功',
            });
          },
          fail(res) {
            console.log('图片上传失败');
          }
        });
      }
    });
  },
  
  downloadImage() {
    wx.request({
      url: 'http://192.168.110.251:5000/static',
      responseType: 'arraybuffer', //ArrayBuffer涉及面比较广，我的理解是ArrayBuffer代表内存之中的一段二进制数据，一旦生成不能再改。可以通过视图（TypedArray和DataView）进行操作。
        success: (res) => {
             let url = 'data:image/png;base64,' + wx.arrayBufferToBase64(res.data)
             this.setData({
                  codeImg:url
             })
        },
    })
  },

})

