// وظيفة للتحقق من كلمة السر والجهاز
function verifyAndCheckDevice() {
    const password = document.getElementById("password").value;
    
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // التحقق من كلمة السر أولًا
    if (password !== "P9L63rt-@1S7d7O") {  // يمكنك تغيير كلمة السر هنا
        alert("❌ كلمة السر خاطئة!");
        return; // لا نستمر إذا كانت كلمة السر خاطئة
    }

    // التحقق من نوع الجهاز بعد التحقق من كلمة السر
    if (isMobile) {
        // إذا كان المستخدم على موبايل
        alert("✅ تم التحقق من كلمة السر! أنت على جهاز موبايل.");
        window.location.href = "mobile.html"; // انتقل إلى صفحة الموبايل
    } else {
        // إذا كان المستخدم على كمبيوتر
        alert("✅ تم التحقق من كلمة السر! أنت على جهاز كمبيوتر.");
        window.location.href = "desktop.html"; // انتقل إلى صفحة الكمبيوتر
    }
}

// وظيفة للحصول على كلمة السر عبر تلغرام
function getPasswordFromTelegram() {
    const telegramLink = "https://t.me/sara_1z"; // ضع هنا رابط تلغرام الخاص بك أو البوت
    window.open(telegramLink, "_blank"); // فتح رابط تلغرام في نافذة جديدة
}

// 🔒 منع فتح أدوات الفحص (DevTools)
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === "U" || event.key === "I" || event.key === "J" || event.key === "S")) {
        event.preventDefault();
    }
});
