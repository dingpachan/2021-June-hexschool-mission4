$(document).ready(function () {
    // 用 on 監聽 .burger_btn 的點擊功能
    $('.burger_btn').on('click', function (e) {
        // 點擊 burger_btn 時，讓原本的 a 連結效果無效
        // e.preventDefault();
        
        // 讓瀏覽器知道有點擊 .burger_btn 的時候，會有收合功能，並在 body 產生一個新的 Class 名稱 burger_btn-show
        $('body').toggleClass('burger_btn-show');
    });
});