var header = document.getElementById('header');
        const buyBtns = document.querySelectorAll('.js-buy-ticket');
        const modal = document.querySelector('.js-modal');
        const modalContainer = document.querySelector('.js-modal-container');
        const modalClose = document.querySelector('.js-modal-close');
        //hàm hiển thị modal mua vé ( thêm class open vào modal)
        function showBuyTicket() {
            modal.classList.add('open')
        }

        //hàm ẩn modal mua vé (gỡ bỏ class open của modal)
        function hideBuyTicket() {
            modal.classList.remove('open')
        }
        // lặp qua từng thẻ button và nghe hành vi click
        for (const buyBtn of buyBtns) {
            buyBtn.addEventListener('click', showBuyTicket)
        }
        // nghe hành vi click vào nút button close
        modalClose.addEventListener('click', hideBuyTicket)


        // lắng nghe sự kiện click vào vùng khác ngoài modal close để đóng modal
        modal.addEventListener('click', hideBuyTicket)

        // ngưng sự kiện nổi bọt trong modal close
        modalContainer.addEventListener('click', function (event) {
            event.stopPropagation()
        })


        var mobileMenu = document.getElementById('mobile-menu');
        var headerHeight = header.clientHeight;
        // đóng mở mobile menu
        mobileMenu.onclick = function () {
            var isClosed = header.clientHeight === headerHeight;
            if (isClosed) {
                header.style.height = 'auto';
            } else {
                header.style.height = null;
            }
        }


        // tự động đóng phần tự chọn menu
        var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
        for (var i = 0; i < menuItems.length; i++) {
            var menuItem = menuItems[i];
            menuItem.onclick = function () {
                header.style.height = null;
            }
        }