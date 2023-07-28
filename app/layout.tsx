import "./globals.css";
import "react-tooltip/dist/react-tooltip.css";
import { Archivo, Inter, Source_Code_Pro } from "next/font/google";
import { Providers } from "./providers";

const archivo = Archivo({
    weight: ["400", "600"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-archivo",
});

const inter = Inter({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

const sourceCodePro = Source_Code_Pro({
    weight: ["500"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-source-code-pro",
});

export const metadata = {
    title: "Tesseract",
    description: "Tesseract - LLMs for Analytics",
    icons: {
        icon: "./favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="description"
                    content="Figma UI kit designed to enhance the functionality of ChatGPT"
                />
                <meta name="product-name" content="Tesseract - LLMs for Ontology & Analytics" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Tesseract - LLMs for Ontology & Analytics" />
                <meta
                    name="twitter:description"
                    content="Tesseract - LLMs for Ontology & Analytics"
                />
                <meta name="twitter:creator" content="@tesseract_xyz" />
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />
                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Tesseract - LLMs for Analytics" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://tesseractxyz.com"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Tesseract - LLMs for Ontology & Analytics"
                />
                <meta property="og:site_name" content="Tesseract - LLMs for Analytics" />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Tesseract - LLMs for Analytics" />
                <meta
                    property="og:url"
                    content="https://ui8.net/ui8/products/synapse-ai-ui-kit"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content=""
                />
                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Tesseract - LLMs for Ontology & Analytics" />
                <meta
                    property="og:url"
                    content="https://tesseractxyz.com"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Tesseract - LLMs for Ontology & Analytics"
                />
            </head>
            <body
                className={`${archivo.variable} ${inter.variable} ${sourceCodePro.variable} bg-n-2 font-sans text-body-2 antialiased text-n-7 dark:bg-n-7 dark:text-n-1`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
