describe("fizzBuzz", function() {
  it("Should return fizz if 3 is passed in", function() {
    expect(fizzBuzz(3)).toEqual("fizz")
  });

  it("Should return buzz if 5 is passed in", function() {
    expect(fizzBuzz(5)).toEqual("buzz")
  });

  it("Should return fizzbuzz if 15 is passed in", function() {
    expect(fizzBuzz(15)).toEqual("fizzbuzz")
  });

  it("Should return fizz if 6 is passed in", function() {
    expect(fizzBuzz(6)).toEqual("fizz")
  });

  it("Should return buzz if 10 is passed in", function() {
    expect(fizzBuzz(10)).toEqual("buzz")
  });

  it("Should return fizzbuzz if 30 is passed in", function() {
    expect(fizzBuzz(30)).toEqual("fizzbuzz")
  });

  it("Should return 7 if 7 is passed in", function() {
    expect(fizzBuzz(7)).toEqual(7)
  });
  it("Should return 17 if 17 is passed in", function() {
    expect(fizzBuzz(17)).toEqual(17)
  });

});
