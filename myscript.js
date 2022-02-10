const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const progress1 = entry.target.querySelector('div.progress.first span.progress-right span.progress-bar');
        const progress2 = entry.target.querySelector('div.progress.second span.progress-right span.progress-bar');
        const progress3 = entry.target.querySelector('div.progress.third span.progress-right span.progress-bar');
        const progress4 = entry.target.querySelector('div.progress.fourth span.progress-right span.progress-bar');

        if (entry.isIntersecting) {
            progress1.classList.add('animation-1');
            progress2.classList.add('animation-2');
            progress3.classList.add('animation-3');
            progress4.classList.add('animation-4');
            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        progress1.classList.remove('animation-1');
        progress2.classList.remove('animation-2');
        progress3.classList.remove('animation-3');
        progress4.classList.remove('animation-4');
    });
});

observer.observe(document.querySelector('#about-me-skills-info'));