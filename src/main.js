        // Slider functionality
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const slider = document.querySelector('.slider');
        const totalSlides = slides.length;
        
        document.querySelector('.next').addEventListener('click', function() {
            moveSlide(1);
        });
        
        document.querySelector('.prev').addEventListener('click', function() {
            moveSlide(-1);
        });
        
        function moveSlide(direction) {
            currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
        
        // Auto-slide
        setInterval(() => {
            moveSlide(1);
        }, 5000);