// Default configuration
const defaultConfig = {
  hero_title: "Best Home Tuition Services for School Students",
  hero_subtitle:
    "Personalized home and online tutoring by experienced tutors. Helping students achieve academic excellence across Uttar Pradesh.",
  about_title: "Empowering Students Through Personalized Education",
  contact_phone: "+91-95556-08694",
  contact_email: "shikshabhavan.in@gmail.com",
  background_color: "#ffffff",
  primary_color: "#1e40af",
  text_color: "#1f2937",
  accent_color: "#3b82f6",
  secondary_color: "#f8fafc",
  font_family: "Poppins",
  font_size: 16,
};

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (config) => {
      // Update hero section
      const heroTitle = document.getElementById("hero-title");
      if (heroTitle) {
        const title = config.hero_title || defaultConfig.hero_title;
        heroTitle.innerHTML = title.replace(
          "Home Tuition",
          '<span class="gradient-text">Home Tuition</span>',
        );
      }

      const heroSubtitle = document.getElementById("hero-subtitle");
      if (heroSubtitle) {
        heroSubtitle.textContent =
          config.hero_subtitle || defaultConfig.hero_subtitle;
      }

      // Update about section
      const aboutTitle = document.getElementById("about-title");
      if (aboutTitle) {
        const title = config.about_title || defaultConfig.about_title;
        aboutTitle.innerHTML = title.replace(
          "Personalized Education",
          '<span class="gradient-text">Personalized Education</span>',
        );
      }

      // Update contact info
      const phone = config.contact_phone || defaultConfig.contact_phone;
      const email = config.contact_email || defaultConfig.contact_email;

      const navPhone = document.getElementById("nav-phone");
      if (navPhone) navPhone.textContent = phone;

      const contactPhone = document.getElementById("contact-phone");
      if (contactPhone) {
        contactPhone.textContent = phone;
        contactPhone.href = `tel:${phone.replace(/[^0-9+]/g, "")}`;
      }

      const contactEmail = document.getElementById("contact-email");
      if (contactEmail) {
        contactEmail.textContent = email;
        contactEmail.href = `mailto:${email}`;
      }

      const footerPhone = document.getElementById("footer-phone");
      if (footerPhone) footerPhone.textContent = phone;

      const footerEmail = document.getElementById("footer-email");
      if (footerEmail) footerEmail.textContent = email;

      // Apply font
      const fontFamily = config.font_family || defaultConfig.font_family;
      document.body.style.fontFamily = `${fontFamily}, sans-serif`;

      // Apply font size
      const baseSize = config.font_size || defaultConfig.font_size;
      document.documentElement.style.fontSize = `${baseSize}px`;
    },
    mapToCapabilities: (config) => ({
      recolorables: [
        {
          get: () => config.background_color || defaultConfig.background_color,
          set: (value) => {
            config.background_color = value;
            window.elementSdk.setConfig({ background_color: value });
          },
        },
        {
          get: () => config.secondary_color || defaultConfig.secondary_color,
          set: (value) => {
            config.secondary_color = value;
            window.elementSdk.setConfig({ secondary_color: value });
          },
        },
        {
          get: () => config.text_color || defaultConfig.text_color,
          set: (value) => {
            config.text_color = value;
            window.elementSdk.setConfig({ text_color: value });
          },
        },
        {
          get: () => config.primary_color || defaultConfig.primary_color,
          set: (value) => {
            config.primary_color = value;
            window.elementSdk.setConfig({ primary_color: value });
          },
        },
        {
          get: () => config.accent_color || defaultConfig.accent_color,
          set: (value) => {
            config.accent_color = value;
            window.elementSdk.setConfig({ accent_color: value });
          },
        },
      ],
      borderables: [],
      fontEditable: {
        get: () => config.font_family || defaultConfig.font_family,
        set: (value) => {
          config.font_family = value;
          window.elementSdk.setConfig({ font_family: value });
        },
      },
      fontSizeable: {
        get: () => config.font_size || defaultConfig.font_size,
        set: (value) => {
          config.font_size = value;
          window.elementSdk.setConfig({ font_size: value });
        },
      },
    }),
    mapToEditPanelValues: (config) =>
      new Map([
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        ["hero_subtitle", config.hero_subtitle || defaultConfig.hero_subtitle],
        ["about_title", config.about_title || defaultConfig.about_title],
        ["contact_phone", config.contact_phone || defaultConfig.contact_phone],
        ["contact_email", config.contact_email || defaultConfig.contact_email],
      ]),
  });
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Close mobile menu on link click
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");
const appContainer = document.getElementById("app-container");

appContainer.addEventListener("scroll", () => {
  if (appContainer.scrollTop > 50) {
    navbar.classList.add("shadow-md");
  } else {
    navbar.classList.remove("shadow-md");
  }
});

// Photo upload handling
const photoUploadArea = document.getElementById("photo-upload-area");
const photoInput = document.getElementById("photo");
const photoName = document.getElementById("photo-name");

photoUploadArea.addEventListener("click", () => {
  photoInput.click();
});

photoInput.addEventListener("change", (e) => {
  if (e.target.files.length > 0) {
    photoName.textContent = e.target.files[0].name;
    photoName.classList.remove("hidden");
    photoUploadArea.classList.add("border-blue-500", "bg-blue-50");
  }
});

// Tutor registration form handling
const tutorForm = document.getElementById("tutor-form");
const submitBtn = document.getElementById("submit-btn");
const successMessage = document.getElementById("success-message");

tutorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = `
        <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Submitting...</span>
      `;

  // Simulate form submission
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `
          <span>Register as Tutor</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        `;
    successMessage.classList.remove("hidden");
    tutorForm.reset();
    photoName.classList.add("hidden");
    photoUploadArea.classList.remove("border-blue-500", "bg-blue-50");

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
    }, 5000);
  }, 2000);
});

// Contact form handling
const contactForm = document.getElementById("contact-form");
const contactSuccess = document.getElementById("contact-success");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const submitButton = contactForm.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  setTimeout(() => {
    submitButton.disabled = false;
    submitButton.textContent = "Send Message";
    contactSuccess.classList.remove("hidden");
    contactForm.reset();

    setTimeout(() => {
      contactSuccess.classList.add("hidden");
    }, 3000);
  }, 1500);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
})

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9da8c04d60263f18',t:'MTc3MzIxMzE1MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
