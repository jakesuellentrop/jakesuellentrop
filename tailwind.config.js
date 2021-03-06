module.exports = {
    purge: ["./resources/views/**/*.php", "./resources/js/components/*.vue"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Nunito", "sans-serif"]
            },
            spacing: {
                128: "32em",
                "1/2": "50%"
            }
        }
    },
    variants: {},
    plugins: []
};
