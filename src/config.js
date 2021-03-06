export default {
    OS_NAME: process.env.VUE_APP_OS_NAME,
    ACCENT_COLOR: "#007cfa",
    SUPPORTED_DEVICES: [
        {
            name: "Pixel 2",
            model: "walleye",
        },
        {
            name: "Pixel 2 XL",
            model: "taimen",
        },
        {
            name: "Pixel 4a 5G",
            model: "bramble",
        },
        {
            name: "Pixel 5",
            model: "redfin",
        },
    ],
    RELEASE_VARIANTS: {
        minimal: {
            description: "Minimal version without Google apps or services.",
            suffix: "",
        },
        gapps: {
            description:
                "Version with Google services included, so the apps you’re familiar with will work. Recommended for most users.",
            suffix: " with Google services",
        },
    },
    DONATION_LINKS: [
        {
            title: "Recurring donation",
            description:
                "If you are able to, please consider making a recurring donation through Liberapay. This allows us to support the project sustainably in the future.",
            highlight: true,
            url: "https://liberapay.com/kdrag0n/",
            icon: "liberapay",
        },
        {
            title: "One-time donation",
            description:
                "You can also make a one-time donation through PayPal. It doesn’t help with sustainable support, but every little bit is appreciated!",
            highlight: false,
            url: "https://paypal.me/kdrag0ndonate",
            icon: "paypal",
        },
    ],
};
