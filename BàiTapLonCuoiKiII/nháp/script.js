document.addEventListener('DOMContentLoaded', function() {
    const eventArticles = document.querySelectorAll('.event');
    const eventDetails = document.getElementById('event-details');
    const eventDetailInfo = document.getElementById('event-detail-info');
    const backBtn = document.getElementById('back-btn');
    const registerBtns = document.querySelectorAll('.btn');

    // Hiển thị thông tin chi tiết sự kiện khi click vào từng sự kiện
    eventArticles.forEach(event => {
        event.addEventListener('click', function() {
            const eventName = event.querySelector('h2').textContent;
            const eventTime = event.querySelector('p:nth-of-type(1)').textContent;
            const eventLocation = event.querySelector('p:nth-of-type(2)').textContent;
            const eventDescription = event.querySelector('p:nth-of-type(3)').textContent;

            eventDetailInfo.innerHTML = `
                <h3>${eventName}</h3>
                <p><strong>Thời gian:</strong> ${eventTime}</p>
                <p><strong>Địa điểm:</strong> ${eventLocation}</p>
                <p>${eventDescription}</p>
                <a href="#" class="btn">Đăng ký</a>
            `;

            eventDetails.style.display = 'block';
        });
    });

    // Quay lại danh sách sự kiện khi click vào nút Quay lại
    backBtn.addEventListener('click', function() {
        eventDetails.style.display = 'none';
    });

    // Xử lý đăng ký sự kiện
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Bạn đã đăng ký thành công sự kiện này!');
        });
    });
});
