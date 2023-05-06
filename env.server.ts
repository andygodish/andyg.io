import invariant from "tiny-invariant";

export function getEnv() {
    invariant(process.env.APP_NAME, "APP_NAME should be defined")
    return {
        APP_NAME: process.env.APP_NAME,
        STORAGE_ACCOUNT_URL: process.env.STORAGE_ACCOUNT_URL,
        FACEBOOK_URL: process.env.FACEBOok_URL || "",
        INSTAGRAM_URL: process.env.INSTAGRAM_URL || "",
        LINKEDIN_URL: process.env.LINKEDIN_URL || "",
        TWITTER_URL: process.env.TWITTER_URL || "",
        GITHUB_URL: process.env.GITHUB_URL || "",
        VERSION: process.env.npm_package_version
    }
}

type ENV = ReturnType<typeof getEnv>

declare global {
    var ENV: ENV;
    interface Window {
        ENV: ENV;
    }
}