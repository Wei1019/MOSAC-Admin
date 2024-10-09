function updateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false
    };
    const timeString = now.toLocaleString('zh-TW', options);
    document.getElementById('current-time').textContent = timeString;
}

// 每秒更新一次時間
setInterval(updateTime, 1000);

// 初始調用以立即顯示時間
updateTime();

// 確保DOM加載完成後執行
document.addEventListener('DOMContentLoaded', updateTime);



document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.addEventListener('click', function() {
        // 在這裡添加登出邏輯
        console.log('登出被點擊');
        // 例如：重定向到登錄頁面
        // window.location.href = '/login.html';
    });
});

// 處理下拉菜單
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentNode.querySelector('.dropdown-menu').classList.toggle('active');
    });
});

// 更新當前頁面位置（這裡只是一個示例，實際應用中可能需要根據路由來動態更新）
function updateCurrentPage(pageName) {
    document.getElementById('current-page').textContent = pageName;
}

// 示例：點擊菜單項時更新當前頁面
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.classList.contains('dropdown-toggle')) {
            updateCurrentPage(this.textContent);
        }
    });
});

// 頁碼轉換
document.addEventListener('DOMContentLoaded', function() {
    const rowsSelect = document.getElementById('rows-select');
    const pageButtons = document.querySelectorAll('.page-btn');

    rowsSelect.addEventListener('change', function() {
        const rowsPerPage = this.value;
        console.log('每页显示行数改变为：', rowsPerPage);
        // 这里添加重新加载表格数据的逻辑
    });

    pageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.dataset.page;
            console.log('跳转到页码：', page);
            // 这里添加加载指定页面数据的逻辑
        });
    });
});