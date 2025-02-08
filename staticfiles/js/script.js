
// gsap.from("h1", { duration: 1, y: -50, ease: "power2.out" });
// gsap.from("p", { duration: 1, y: 50, ease: "power2.out", delay: 0.5 });
// gsap.from("a", { duration: 1, scale: 0, ease: "elastic.out(1, 0.3)", delay: 1 });

document.addEventListener("DOMContentLoaded", function () {
    // Initial animations for header and text
    gsap.from("h1", { duration: 1, y: -50, ease: "power2.out" });
    gsap.from("p", { duration: 1, y: 50, ease: "power2.out", delay: 0.5 });
    gsap.from("a", { duration: 1, scale: 0, ease: "elastic.out(1, 0.3)", delay: 1 });

    // Hover animation for blog articles
    document.querySelectorAll(".blog-article").forEach((article) => {
        article.addEventListener("mouseenter", () => {
            gsap.to(article, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", duration: 0.3 });
        });

        article.addEventListener("mouseleave", () => {
            gsap.to(article, { scale: 1, boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", duration: 0.3 });
        });
    });
});



// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();  // Prevents the form from being submitted immediately

//     const form = event.target;

//     // Check if all fields are filled
//     if (form.name.value && form.email.value && form.message.value) {
//         alert('Your message has been sent successfully!');
//         form.submit();  // Now, submit the form after confirmation
//     } else {
//         alert('Please fill in all fields.');
//     }
// });
// Wait for the DOM to be fully loaded before running animations
