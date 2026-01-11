import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseURL = "https://skarion.com";
    return [
        {
            url: baseURL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: baseURL + "/course/outside-plant-engineering",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: baseURL + "/faq",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: baseURL + "/privacy-policy",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.7,
        },
        {
            url: baseURL + "/terms-and-conditions",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
}