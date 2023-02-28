const { assert } = require("chai");

describe("cipher", () => {

  // it("debería ser un objeto", () => {
  //   assert.equal(typeof cipher, "object");
  // });

  describe("cipher.encode", () => {

    it("debería ser una función", () => {
      assert.typeof(cipher.encode, "function");
    });

    it("debería retornar 'HIJKLMNOPQRSTUVWXYZABCDEFG' para 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' con offset 33", () => {
      assert.equal(cipher.encode,(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
    });

    it("Debería retornar 'íóúáé' para 'áéíóú' con offset 12", () => {
      assert.equal(cipher.encode,(12,'áéíóú'))
    })
  });

  describe("cipher.decode", () => {

    it("debería ser una función", () => {
      assert.equal(typeof cipher.decode, "function");
    });

    it("debería retornar 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' para 'HIJKLMNOPQRSTUVWXYZABCDEFG' con offset 33", () => {
      assert.equal(cipher.decode,(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"))
    });
  });

});
