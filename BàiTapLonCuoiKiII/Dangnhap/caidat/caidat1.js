// Lấy các phần tử từ DOM
const editProfileBtn = document.getElementById('edit-profile-btn');
const logoutBtn = document.getElementById('logout-btn');
const notificationsCheckbox = document.getElementById('notifications');
const darkModeCheckbox = document.getElementById('dark-mode');
const languageSelect = document.getElementById('language');

// Sự kiện khi click vào nút "Edit Profile"
editProfileBtn.addEventListener('click', function() {
    // Thực hiện chức năng chỉnh sửa profile (ví dụ: mở một modal, điều hướng đến trang chỉnh sửa profile, ...)
    console.log('Edit profile clicked');
});

// Sự kiện khi click vào nút "Logout"
logoutBtn.addEventListener('click', function() {
    // Thực hiện chức năng logout (ví dụ: xoá thông tin phiên đăng nhập, điều hướng đến trang đăng nhập, ...)
    console.log('Logout clicked');
});

// Lưu các cài đặt khi người dùng thay đổi
notificationsCheckbox.addEventListener('change', function() {
    // Lưu cài đặt notifications
    console.log('Notifications changed:', notificationsCheckbox.checked);
});

darkModeCheckbox.addEventListener('change', function() {
    // Lưu cài đặt dark mode
    console.log('Dark mode changed:', darkModeCheckbox.checked);
});

languageSelect.addEventListener('change', function() {
    // Lưu cài đặt ngôn ngữ
    console.log('Language changed:', languageSelect.value);
});
document.addEventListener('DOMContentLoaded', function() {
    // Lấy các phần tử từ DOM
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const notificationsCheckbox = document.getElementById('notifications');
    const darkModeCheckbox = document.getElementById('dark-mode');
    const languageSelect = document.getElementById('language');
    const changeAvatarBtn = document.getElementById('change-avatar-btn');
    const avatarImg = document.getElementById('avatar-img');

    // Hàm lưu cài đặt người dùng vào localStorage
    function saveSettings() {
        localStorage.setItem('notifications', notificationsCheckbox.checked);
        localStorage.setItem('darkMode', darkModeCheckbox.checked);
        localStorage.setItem('language', languageSelect.value);
        console.log('Settings saved.');
    }

    // Hàm khôi phục cài đặt người dùng từ localStorage
    function restoreSettings() {
        if (localStorage.getItem('notifications') === 'true') {
            notificationsCheckbox.checked = true;
        } else {
            notificationsCheckbox.checked = false;
        }

        if (localStorage.getItem('darkMode') === 'true') {
            darkModeCheckbox.checked = true;
        } else {
            darkModeCheckbox.checked = false;
        }

        languageSelect.value = localStorage.getItem('language') || 'en'; // Default language: English
        console.log('Settings restored.');
    }

    // Sự kiện khi click vào nút "Edit Profile"
    editProfileBtn.addEventListener('click', function() {
        // Thực hiện chức năng chỉnh sửa profile (ví dụ: mở một modal, điều hướng đến trang chỉnh sửa profile, ...)
        console.log('Edit profile clicked');
    });

    // Sự kiện khi click vào nút "Logout"
    logoutBtn.addEventListener('click', function() {
        // Thực hiện chức năng logout (ví dụ: xoá thông tin phiên đăng nhập, điều hướng đến trang đăng nhập, ...)
        console.log('Logout clicked');
    });

    // Sự kiện khi click vào nút "Change Avatar"
    changeAvatarBtn.addEventListener('click', function() {
        // Giả sử mở một modal để người dùng chọn file ảnh mới và cập nhật avatar
        console.log('Change avatar clicked');
        // Ví dụ: Mở modal và khi hoàn tất chọn ảnh, cập nhật src của ảnh avatar
        var newAvatarUrl = prompt("Enter the URL of the new avatar image:");
        if (newAvatarUrl) {
            avatarImg.src = newAvatarUrl;
            console.log('Avatar changed to:', newAvatarUrl);
        }
    });

    // Lưu và khôi phục cài đặt từ localStorage khi trang được tải
    restoreSettings();

    // Lắng nghe sự thay đổi trong cài đặt và lưu vào localStorage
    notificationsCheckbox.addEventListener('change', saveSettings);
    darkModeCheckbox.addEventListener('change', saveSettings);
    languageSelect.addEventListener('change', saveSettings);
});// Lắng nghe sự kiện click vào nút để hiển thị/giấu phần cài đặt nâng cao
document.getElementById('toggleAdvancedSettings').addEventListener('click', function() {
    var advancedSettingsSection = document.getElementById('advancedSettingsSection');
    if (advancedSettingsSection.style.display === 'none') {
        advancedSettingsSection.style.display = 'block';
    } else {
        advancedSettingsSection.style.display = 'none';
    }
});

// Hàm để chuyển hướng đến URL được chỉ định
function openTab(url) {
    window.location.href = url;
}
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}





// Hàm để bật/tắt chế độ tối
function toggleDarkMode() {
    const body = document.body;
    const currentClass = body.className;
    body.className = currentClass === 'dark-mode' ? '' : 'dark-mode';

    // Lưu trạng thái chế độ tối vào localStorage
    localStorage.setItem('darkMode', body.className === 'dark-mode');
}

// Hàm khởi động trạng thái chế độ tối từ localStorage khi trang được tải
function loadDarkMode() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    body.className = darkModeEnabled ? 'dark-mode' : '';
}

// Gọi hàm loadDarkMode khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    loadDarkMode();
});
document.addEventListener('DOMContentLoaded', function() {
    // Lắng nghe sự kiện click vào nút "Quay lại"
    const backBtn = document.getElementById('back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Điều hướng quay lại trang trước đó
            window.history.back();
        });
    }
});


