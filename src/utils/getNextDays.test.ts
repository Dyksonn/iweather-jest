import { getNextDays } from "./getNextDays";

describe("getNextDays", () => {
    it("should be return the next fixe days", () => {
        const days = getNextDays();
        
        expect(days.length).toBe(5);
    });
});