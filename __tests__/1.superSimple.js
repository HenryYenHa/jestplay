describe("simple tests", () => {
  describe("first tests", () => {
    it("should pass", () => {
      expect(true).toBeTruthy();
    });
    test("should fail", () => {
      expect(true).not.toBeTruthy();
    });
  });
});
