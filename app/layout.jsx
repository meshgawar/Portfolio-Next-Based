import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://meshgawar.dev"),

    title: {
        default: "Mesh Gawar | MERN Stack & Next.js Developer",
        template: "%s | Mesh Gawar",
    },

    description:
        "Mesh Gawar is a MERN Stack & Next.js developer building scalable, modern web applications. View projects, skills, and contact details.",

    keywords: [
        "Mesh Gawar",
        "MERN Stack Developer",
        "Next.js Developer",
        "Full Stack Developer India",
        "Web Developer Portfolio",
        "React Developer",
        "JavaScript Developer",
    ],

    authors: [{ name: "Mesh Gawar", url: "https://meshgawar.dev" }],
    creator: "Mesh Gawar",
    category: "technology",

    openGraph: {
        title: "Mesh Gawar | Full Stack Developer",
        description:
            "Portfolio of Mesh Gawar — MERN Stack & Next.js developer building modern web applications.",
        url: "https://meshgawar.dev",
        siteName: "Mesh Gawar Portfolio",
        images: ["/mesh-gawar-profile.jpg","/mesh-gawar-portfolio.png"],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Mesh Gawar Portfolio",
        description:
            "MERN Stack & Next.js developer building scalable web applications.",
        images: ["/mesh-gawar-profile.jpg","/mesh-gawar-portfolio.png"],
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Favicon */}
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" media="(prefers-color-scheme: light)"/>

                {/* BOXICONS */}
                <link
                    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://cdn.boxicons.com/fonts/brands/boxicons-brands.min.css"
                    rel="stylesheet"
                />

                {/* UNICONS */}
                <link
                    rel="stylesheet"
                    href="https://unicons.iconscout.com/release/v4.2.0/css/line.css"
                />

                {/* FONT AWESOME */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </head>

            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            name: "Mesh Gawar",
                            image: "https://meshgawar.dev/mesh-gawar-profile.jpg",
                            url: "https://meshgawar.dev",
                            jobTitle: "Full Stack Developer",
                            sameAs: [
                                "https://github.com/meshgawar",
                                "https://www.linkedin.com/in/meshgawar24/",
                                "https://leetcode.com/u/meshgawar24/",
                                "https://www.hackerrank.com/profile/meshgawar"
                            ],
                        }),
                    }}
                />
            </body>
        </html>
    );
}