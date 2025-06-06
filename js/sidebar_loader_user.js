fetch('../../components/sidebar_user.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('sidebar-wrapper').innerHTML = html;
    });
