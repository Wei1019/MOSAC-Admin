// LoginModel 類別：負責處理所有與登入相關的數據操作
class LoginModel {
    // 建構函數：初始化 Model
    constructor() {
        // 設定 API 的網址，這個會是你的後端服務器地址
        this.apiUrl = '/api/login';
    }

    // 登入方法：處理登入請求
    // async 代表這是一個異步方法，可以等待伺服器回應
    async login(username, password) {
        try {
            // fetch: 發送 HTTP 請求到伺服器
            // await: 等待伺服器回應後才繼續執行
            const response = await fetch(this.apiUrl, {
                method: 'POST',                              // 使用 POST 方法
                headers: {
                    'Content-Type': 'application/json',      // 設定內容類型為 JSON
                },
                // 將使用者名稱和密碼轉換成 JSON 格式
                body: JSON.stringify({ username, password })
            });

            // 檢查回應是否成功（狀態碼在 200-299 之間）
            if (!response.ok) {
                throw new Error('登入失敗');
            }

            // 將伺服器回應的數據轉換為 JSON 格式
            const data = await response.json();
            return data;
        } catch (error) {
            // 如果過程中發生錯誤，拋出錯誤訊息
            throw new Error('登入過程發生錯誤: ' + error.message);
        }
    }

    // 儲存 Token：將登入成功後收到的 token 存在瀏覽器的 localStorage 中
    saveToken(token) {
        localStorage.setItem('authToken', token);
    }

    // 取得 Token：從 localStorage 中取得儲存的 token
    getToken() {
        return localStorage.getItem('authToken');
    }

    // 清除 Token：從 localStorage 中移除 token（例如登出時使用）
    clearToken() {
        localStorage.removeItem('authToken');
    }
}

/*
使用說明：
1. Model 負責所有與數據相關的操作
2. 使用 async/await 處理非同步操作（與伺服器通信）
3. 使用 localStorage 存儲登入憑證（token）
4. 包含錯誤處理機制

範例：
const model = new LoginModel();
try {
    const result = await model.login('user123', 'password123');
    if (result.token) {
        model.saveToken(result.token);
    }
} catch (error) {
    console.error(error);
}
*/

