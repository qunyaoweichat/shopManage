var tabBar = require("../public/tabBar.js");
Page({

    /**
     * 页面的初始数据
     */
    data: {
        
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // 判断是否有店铺如果没给让去开店的按钮
        var shopNumber =0;
        this.setData({
            shopNumber: shopNumber
        })
        if (shopNumber==0){
            wx.redirectTo({
                url: '../createShop/branchShop/branchShop',
            })
        }
    },
    // tabBar 的跳转
    goShop:function(e){
        tabBar.navCtrl(e.currentTarget.dataset.url)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})