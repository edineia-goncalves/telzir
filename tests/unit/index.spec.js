import { shallowMount } from "@vue/test-utils";
import faleMais from "@/views/fale-mais/index.vue";

describe("faleMais", () => {
  const wrapper = shallowMount(faleMais);

  it("Currency format", () => {
    const value = 9.9;

    const formatted = wrapper.vm.formatCurrency(value);

    expect(formatted).toEqual("R$9.90");
  });
});
