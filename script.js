document.addEventListener('DOMContentLoaded', () => {
    // 鼠标移动视差效果
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.feature-card');
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;

            const angleX = (mouseY - cardY) / 30;
            const angleY = (mouseX - cardX) / -30;

            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
    });

    // 滚动动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Typeform 控制脚本
    const triggerButton = document.querySelector('.typeform-trigger');
    const closeButton = document.querySelector('.close-typeform');
    const formContainer = document.querySelector('.typeform-container');

    // 检查元素是否存在
    if (triggerButton && closeButton && formContainer) {
        // 打开表单
        triggerButton.addEventListener('click', () => {
            console.log('触发打开表单'); // 调试用
            formContainer.style.display = 'block';
        });

        // 关闭表单
        closeButton.addEventListener('click', () => {
            console.log('触发关闭表单'); // 调试用
            formContainer.style.display = 'none';
        });
    } else {
        console.error('未找到必要的表单元素');
    }
});

// 移动端菜单按钮
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('active');
});
