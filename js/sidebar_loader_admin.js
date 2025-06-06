fetch('../../components/sidebar_admin.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('sidebar-wrapper').innerHTML = html;
    });
