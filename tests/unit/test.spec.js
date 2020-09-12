import actions from "@/store/modules/Palindromes";

describe("checkPalindrome", () => {
  it("check palindrome text", async () => {
    const commit = jest.fn();
    const text = "Kobyła ma mały bok";

    await actions.checkPalindrome({ commit }, text);

    expect(text).toEqual(
      text
        .split("")
        .reverse()
        .join("")
    );
    expect(commit).toHaveBeenCalledWith("SAVE_ITEM", {
      value: text,
      isPalindrome: true
    });
  });
});
