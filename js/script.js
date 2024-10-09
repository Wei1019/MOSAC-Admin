function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('zh-TW', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
    });
    document.getElementById('current-time').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call

// Add event listeners and other functionality as needed