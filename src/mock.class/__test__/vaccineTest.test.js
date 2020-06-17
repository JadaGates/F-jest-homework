import VaccineTest from "../vaccineTest";
import Recipient from "../recipient";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockHasAntibodies = jest.fn();

jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      hasAntibodies: mockHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  Recipient.mockClear();
  mockAcceptInjection.mockClear();
  mockHasAntibodies.mockClear();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    const vaccineTest = new VaccineTest();

    vaccineTest.inject();

    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    mockHasAntibodies.mockImplementation(() => true);
    const vaccineTest = new VaccineTest();
    const result = vaccineTest.test();
    expect(result).toEqual("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    mockHasAntibodies.mockImplementation(() => false);
    const vaccineTest = new VaccineTest();
    const result = vaccineTest.test();
    expect(result).toEqual("Vaccine Test Failed");
  });
});
