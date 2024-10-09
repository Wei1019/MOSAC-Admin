// LoginController 類別：負責處理使用者互動和畫面更新
class LoginController {
    // 建構函數：初始化 Controller
    constructor() {
        // 創建一個 Model 實例
        this.model = new LoginModel();
        
        // 獲取登入表單元素
        this.form = document.getElementById('loginForm');
        
        // 創建錯誤訊息顯示元素
        this.errorMessage = document.createElement('div');
        this.errorMessage.className = 'error-message';
        this.form.appendChild(this.errorMessage);
        
        // 初始化事件監聽器
        this.initializeEventListeners();
    }

    // 設定事件監聽器
    initializeEventListeners() {
        // 監聽表單提交事件
        this.form.addEventListener('submit', async (e) => {
            // 防止表單的預設提交行為
            e.preventDefault();
            // 處理登入邏輯
            await this.handleLogin();
        });
    }

    // 處理登入邏輯
    async handleLogin() {
        // 獲取使用者輸入的帳號密碼
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            // 清除之前的錯誤訊息
            this.hideError();
            
            // 調用 Model 的登入方法
            const response = await this.model.login(username, password);
            
            // 如果登入成功（收到 token）
            if (response.token) {
                // 儲存 token
                this.model.saveToken(response.token);
                // 重導向到後台首頁
                window.location.href = '/dashboard';
            }
        } catch (error) {
            // 如果發生錯誤，顯示錯誤訊息
            this.showError(error.message);
        }
    }

    // 顯示錯誤訊息
    showError(message) {
        // 使用 innerHTML 來設置帶有樣式的錯誤訊息
        this.errorMessage.innerHTML = `<span style="color: red;">${message}</span>`;
        this.errorMessage.style.display = 'block';
    }

    // 隱藏錯誤訊息
    hideError() {
        this.errorMessage.style.display = 'none';
    }
}

// 當網頁完全載入後，創建 Controller 實例
document.addEventListener('DOMContentLoaded', () => {
    new LoginController();
});


/*
使用說明：
1. Controller 負責：
   - 監聽使用者操作（如表單提交）
   - 處理表單驗證
   - 調用 Model 的方法
   - 更新畫面顯示（如錯誤訊息）

2. 主要功能：
   - 初始化：設定必要的元素和事件監聽
   - 表單處理：處理登入邏輯
   - 錯誤處理：顯示和隱藏錯誤訊息
   - 頁面導航：登入成功後的重導向

3. 工作流程：
   使用者提交表單 
   → Controller 獲取表單數據 
   → 調用 Model 的登入方法 
   → 處理響應結果（成功或失敗）
   → 更新畫面
*/