import Recipient from "../recipient";

describe("acceptInjection", () => {
  test("should hasAntibodies be false if vaccine not contain Virus Proteins", () => {
    const vaccine = {};
    vaccine.composition = "Sugar";
    const recipient = new Recipient();
    recipient.acceptInjection(vaccine);

    expect(recipient.hasAntibodies).toBeFalsy();
  });

  test("should hasAntibodies be true if vaccine contain Virus Proteins", () => {
    const vaccine = {};
    vaccine.composition = "Virus Proteins";
    const recipient = new Recipient();
    recipient.acceptInjection(vaccine);

    expect(recipient.hasAntibodies).toBeTruthy();
  });
});
