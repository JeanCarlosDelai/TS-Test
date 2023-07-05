import { PasswordChecker, PasswordErrors } from "../../app/pass_checker/passwordChecker"


describe('PasswordChecker test suite', () => {

    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it('Password with less than o chars is invalid', () => {
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })

    it('Password with more than o chars is valid', () => {
        const actual = sut.checkPassword('12345678Ab');
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    })

    it('Password with no upper case letter is invalid', () => {
        const actual = sut.checkPassword('123456abc');
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })

    it('Password with upper case letter is valid', () => {
        const actual = sut.checkPassword('123456ABCabc');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    })

    it('Password with no lower case letter is invalid', () => {
        const actual = sut.checkPassword('123456ABC');
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })

    it('Password with lowe case letter is valid', () => {
        const actual = sut.checkPassword('123456ABCa');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE)
    })

    it('Complex password is valid', () => {
        const actual = sut.checkPassword('123456ABCa');
        expect(actual.reasons).toHaveLength(0)
        expect(actual.valid).toBe(true)
    })

    it('Admin password with no number is invalid', () => {
        const actual = sut.checkAdminPassword('ABCASDabs');
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER)
        expect(actual.valid).toBe(false)
    })

    it('Admin password with number is valid', () => {
        const actual = sut.checkAdminPassword('ABCASDabs7');
        expect(actual.reasons).not.toContain(PasswordErrors.NO_NUMBER)
    })
})