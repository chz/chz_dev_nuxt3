import { defineNuxtPlugin, useState } from '#app'
export default defineNuxtPlugin(() => {
    useState(
        'state',
        () => ({
            sidebarOpened:false
        })
    )
})
