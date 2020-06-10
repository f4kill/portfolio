module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @import "@/styles/helpers/_placeholders.scss";
                    @import "@/styles/helpers/_colors.scss";
                    
                    @import "@/styles/base/_typography.scss";
                    @import "@/styles/base/_reset.scss";
                    
                    @import "@/styles/layout/_container.scss";
                    
                    @import "@/styles/atoms/_buttons.scss";
                `,
            },
        },
    },
}
