import { StringUtils, getStringInfo, toUpperCase } from "../app/Util"


describe('Testando Utils', () => {

    describe('StringUtils tests', () => {

        let sut: StringUtils

        beforeEach(() => {
            sut = new StringUtils()
        })

        it('should return correct uppercase', () => {
            const actual = sut.toUpperCase('abc')

            expect(actual).toBe('ABC')
        })

        it('should throw error on invalid argument - function', () => {
            function expectError() {
                const actual = sut.toUpperCase('')
            }

            expect(expectError).toThrowError("Invalid argument!")
        })

        it('should throw error on invalid argument - Arrow Function', () => {
            expect(() => {
                sut.toUpperCase('')
            }).toThrowError("Invalid argument!")
        })

        it('should throw error on invalid argument - try catch', (done) => {
            try {
                sut.toUpperCase('')
                done('GetStringInfo should throw error for invalid arg!')
            } catch (error) {
                expect(error).toBeInstanceOf(Error)
                expect(error).toHaveProperty('message', 'Invalid argument!')
                done()
            }
        })
    })

    it('Deve retornar as letras maiúsculas de uma string válida', () => {
        // Arrange
        const sut = toUpperCase;
        const expected = 'CAMELO';

        // Act
        const actual = sut('camelo')

        // Assert
        expect(actual).toBe(expected)
    })

    describe('ToUpperCase examples', () => {
        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'My-String', expected: 'MY-STRING' },
            { input: 'DEF', expected: 'DEF' }
        ])('$input toUpperCase should be $expected', ({ input, expected }) => {
            const actual = toUpperCase(input)

            expect(actual).toBe(expected)
        })
    })

    describe('getStringInfo for arg My-String should', () => {

        test('return right length', () => {
            const actual = getStringInfo('My-String')
            expect(actual.characters).toHaveLength(9)
        })

        test('return right lower case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.lowerCase).toBe('my-string')
        })

        test('return right upper case', () => {
            const actual = getStringInfo('My-String')
            expect(actual.upperCase).toBe('MY-STRING')
        })

        test('return right characters', () => {
            const actual = getStringInfo('My-String')
            expect(actual.characters).toEqual(['M', 'y', '-', 'S', 't', 'r', 'i', 'n', 'g'])
            expect(actual.characters).toContain<string>('M')
        })

        test('return defined extra info', () => {
            const actual = getStringInfo('My-String')
            expect(actual.extraInfo).not.toBeUndefined()
        })

        test('return right extra info', () => {
            const actual = getStringInfo('My-String')
            expect(actual.extraInfo).toEqual({})
        })
    })

})