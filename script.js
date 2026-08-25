/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 700);

});



/* =========================================================
   MOBILE MENU
========================================================= */

const mobileButton =
    document.getElementById("mobileButton");

const navMenu =
    document.querySelector(".nav-menu");


mobileButton.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "mobile-open"
        );

    }
);



/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "mobile-open"
                );

            }
        );

    });



/* =========================================================
   ACTIVE NAV
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const links =
    document.querySelectorAll(
        ".nav-link"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const top =
                section.offsetTop - 180;

            const height =
                section.offsetHeight;

            if (
                window.scrollY >= top &&
                window.scrollY <
                top + height
            ) {

                current =
                    section.id;

            }

        });


        links.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



/* =========================================================
   REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".why-grid article, .skill-card, .project, .timeline-item, .achievement-card, .doc-card"
    );


revealElements.forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

    }
);


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        observer.observe(
            element
        );

    }
);



/* =========================================================
   NAVBAR SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(4,7,15,.94)";

        } else {

            navbar.style.background =
                "rgba(5,8,18,.75)";

        }

    }
);

const profileImage =
    document.querySelector(".profile-image");

const profilePlaceholder =
    document.querySelector(".profile-placeholder");


if (profileImage) {

    profileImage.addEventListener("load", () => {

        profilePlaceholder.style.display = "none";

    });

    profileImage.addEventListener("error", () => {

        profileImage.style.display = "none";

        profilePlaceholder.style.display = "flex";

    });

}