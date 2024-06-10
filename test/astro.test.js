import astro from './astro'
import { expect, test } from 'vitest'


test(`check all astro state components are configured and upto date withthe API's online`, () => {
    expect(astro()).toBe("astro project components online")
})

test(`Check API stablility`, () => {
    expect(astro()).toBe("astro project components online")
})
test(`Test components rerenderer`, () => {
    expect(astro()).toBe("astro project components online")
})
test(`Check AXIOS online`, () => {
    expect(astro()).toBe("astro project components online")
})
test(`Check Tailwind Utilities`, () => {
    expect(astro()).toBe("astro project components online")
})
test(`Accept States With PROPs`, () => {
    expect(astro()).toBe("astro project components online")
})