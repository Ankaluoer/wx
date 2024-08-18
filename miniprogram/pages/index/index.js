const app = getApp();

Page({
  data: {
    photoLink: '',
    videoLink: '',
  },

  downloadImage() {
    wx.request({
      url: 'http://192.168.110.131:5000/static',
      responseType: 'arraybuffer', //ArrayBuffer涉及面比较广，我的理解是ArrayBuffer代表内存之中的一段二进制数据，一旦生成不能再改。可以通过视图（TypedArray和DataView）进行操作。
        success: (res) => {
             let url = 'data:image/png;base64,' + wx.arrayBufferToBase64(res.data)
             this.setData({
                  codeImg:url
             })
        },
    })
  },

  downloadVedio(){
      wx.request({
        url: 'http://192.168.110.131:5000/vedio',
        
      })
  },

// 拍摄照片
photoCapture() {
  let that = this;
  that.setData({
    topImgSrc: '../../asset/fencing02.png' // 替换为你的上传中状态图片路径
  })
  wx.chooseMedia({
    count: 1,
    mediaType: ['image'],
    sourceType: ['camera'],
    camera: 'back',
    success(res) {
      that.setData({
        photoLink: res.tempFiles[0].tempFilePath,
        topImgSrc: '../../asset/qqq.GIF'
      });
      console.log(res.tempFiles[0].tempFilePath);
      console.log('图片拍摄成功');
      wx.showLoading({
        title: '正在上传图片',
        mask: true,
      });
      // 图片上传
      wx.uploadFile({
        url: 'http://192.168.110.131:5000/uploadImage',
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

videoCapture() {
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
        url:'http://192.168.110.131:5000/uploadVideo',
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