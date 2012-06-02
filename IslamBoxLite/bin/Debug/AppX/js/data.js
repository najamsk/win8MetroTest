// JavaScript source code
//var photoData = [
//{ desc: 'Peace TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/peacetv-logo.png', price: '$ 14.99', category: 'dawa' },
//{ desc: 'Huda TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/huda-logo.png', price: '$ 24.99', category:'taleem' },
//{ desc: 'AlQuran Alkareem TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/alquran-alkarim-logo.png', price: '$ 34.99', category:'taleem' },
//{ desc: 'Guide US TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/guideustv-logo.png', price: '$ 154.99',category:'usa' },
//{ desc: 'Islam Channel', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/islamchannel-logo.png', price: '$ 4.99', category:'dawa' },
//{ desc: 'Al Majd TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-majidtv-logo.png', price: '$ 314.99',category:'taleem' },
//{ desc: 'Al Jazeera TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-jazeeraeng-logo.png', price: '$ 104.99', category:'news' },
//{ desc: 'Peace TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/peacetv-logo.png', price: '$ 14.99', category:'dawa' },
//{ desc: 'Huda TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/huda-logo.png', price: '$ 24.99', category:'taleem' },
//{ desc: 'AlQuran Alkareem TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/alquran-alkarim-logo.png', price: '$ 34.99', category:'taleem' },
//{ desc: 'Guide US TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/guideustv-logo.png', price: '$ 154.99',category:'usa' },
//{ desc: 'Islam Channel', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/islamchannel-logo.png', price: '$ 4.99', category:'dawa' },
//{ desc: 'Al Majd TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-majidtv-logo.png', price: '$ 314.99',category:'taleem' },
//{ desc: 'Al Jazeera TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-jazeeraeng-logo.png', price: '$ 104.99', category:'news' }
//];

//var myPhotoData = new WinJS.Binding.List(photoData);

//var groupedProducts = myPhotoData.createGrouped(
//        function (dataItem) {
//            return dataItem.category;
//        },
//        function (dataItem) {
//            return { title: dataItem.category };
//        },
//        function (group1, group2) {
//            return group1.charCodeAt(0) - group2.charCodeAt(0);
//        }
//    );






(function () {
    "use strict";

    // Create List data source
    var products = new WinJS.Binding.List([
            { desc: 'Peace TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/peacetv-logo.png', price: '$ 14.99', category: 'dawa' },
            { desc: 'Huda TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/huda-logo.png', price: '$ 24.99', category:'taleem' },
            { desc: 'AlQuran Alkareem TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/alquran-alkarim-logo.png', price: '$ 34.99', category:'taleem' },
            { desc: 'Guide US TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/guideustv-logo.png', price: '$ 154.99',category:'usa' },
            { desc: 'Islam Channel', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/islamchannel-logo.png', price: '$ 4.99', category:'dawa' },
            { desc: 'Al Majd TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-majidtv-logo.png', price: '$ 314.99',category:'taleem' },
            { desc: 'Al Jazeera TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-jazeeraeng-logo.png', price: '$ 104.99', category:'news' },
            { desc: 'Peace TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/peacetv-logo.png', price: '$ 14.99', category:'dawa' },
            { desc: 'Huda TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/huda-logo.png', price: '$ 24.99', category:'taleem' },
            { desc: 'AlQuran Alkareem TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/alquran-alkarim-logo.png', price: '$ 34.99', category:'taleem' },
            { desc: 'Guide US TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/guideustv-logo.png', price: '$ 154.99',category:'usa' },
            { desc: 'Islam Channel', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/islamchannel-logo.png', price: '$ 4.99', category:'dawa' },
            { desc: 'Al Majd TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-majidtv-logo.png', price: '$ 314.99',category:'taleem' },
            { desc: 'Al Jazeera TV', imgSrc: 'http://www.islambox.com/images/products/channels/Logo/al-jazeeraeng-logo.png', price: '$ 104.99', category:'news' }
    ]);

    // Create grouped data source
    var groupedProducts = products.createGrouped(
        function (dataItem) {
            return dataItem.category;
        },
        function (dataItem) {
            return { title: dataItem.category };
        },
        function (group1, group2) {
            return group1.charCodeAt(0) - group2.charCodeAt(0);
        }
    );

    // Expose the grouped data source
    WinJS.Namespace.define("ListViewDemos", {
        products: groupedProducts
    });
})();