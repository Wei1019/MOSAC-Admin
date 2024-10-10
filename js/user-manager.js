document.addEventListener('DOMContentLoaded', function() {
    const resetBtn = document.querySelector('.btn-reset');
    const saveBtn = document.querySelector('.btn-save');

    resetBtn.addEventListener('click', function() {
        // 处理初始化密码的逻辑
        console.log('密碼已初始化');
        alert('密碼已初始化');
    });

    saveBtn.addEventListener('click', function() {
        // 处理保存信息的逻辑
        const accountName = document.getElementById('account-name').value;
        const accountFullname = document.getElementById('account-fullname').value;
        console.log('儲存資料:', { accountName, accountFullname });
        alert('資料已儲存');
    });
});