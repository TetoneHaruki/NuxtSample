import { describe, expect, it } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";
import Parent from "./components/Parent.vue";

describe("Parent", () => {
    it("mount", () => {
        const component = mount(Parent);
        expect(component.element).toMatchSnapshot();
    });
    it('shallowMount', () => {
        const component = shallowMount(Parent);
        expect(component.element).toMatchSnapshot();
    });
});
