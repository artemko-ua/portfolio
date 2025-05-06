// TODO: додати фіч
// Apply syntax highlighting to code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const content = block.innerHTML;
        const highlighted = content
            // Keywords
            .replace(/\\b(import|from|def|if|else|for|while|try|except|return|class|in|as|with|or|and|not|None|True|False|void|kernel_main)\\b/g, 
                '<span class="keyword">$1</span>')
            // Functions
            .replace(/(\w+)(\()/g, '<span class="function">$1</span>$2')
            // Strings
            .replace(/(['"])(.*?)\\1/g, '<span class="string">$1$2$1</span>')
            // Comments
            .replace(/(#.*|\/\/.*$)/gm, '<span class="comment">$1</span>');
        block.innerHTML = highlighted;
    });
});

// Typing effect for header text
document.addEventListener('DOMContentLoaded', function() {
    // Add animated class to elements when they come into view
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real app, you would send this data to the server
            alert('Дякую, ' + name + '! Ваше повідомлення успішно надіслано.');
            contactForm.reset();
        });
    }
});