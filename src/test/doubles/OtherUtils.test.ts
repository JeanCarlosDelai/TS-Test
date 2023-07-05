import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OtherUtils"



describe('OtherUtils test suite', () => {

    describe('Tracking callbacks with Jest mocks', () => {

        const callBackMock = jest.fn()

        afterEach(() => {
            jest.clearAllMocks()
        })

        it('Calls calback for invalid agument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock)
            expect(actual).toBeUndefined()
            expect(callBackMock).toBeCalledWith('Invalid argument!')
            expect(callBackMock).toBeCalledTimes(1)
        })

        it('Calls calback for valid agument - track calls', () => {
            const actual = toUpperCaseWithCb('abc', callBackMock)
            expect(actual).toBe('ABC')
            expect(callBackMock).toBeCalledWith('Called function with abc')
            expect(callBackMock).toBeCalledTimes(1)
        })

    })



    describe('Tracking callbacks', () => {

        let cbArgs = []
        let timesCalled = 0

        function callBackMock(arg: string) {
            cbArgs.push(arg)
            timesCalled++
        }

        afterEach(() => {
            cbArgs = []
            timesCalled = 0
        })

        it('Calls calback for invalid agument - track calls', () => {
            const actual = toUpperCaseWithCb('', callBackMock)
            expect(actual).toBeUndefined()
            expect(cbArgs).toContain('Invalid argument!')
            expect(timesCalled).toBe(1)
        })

        it('Calls calback for valid agument - track calls', () => {
            const actual = toUpperCaseWithCb('abc', callBackMock)
            expect(actual).toBe('ABC')
            expect(cbArgs).toContain('Called function with abc')
            expect(timesCalled).toBe(1)
        })

    })

    it('ToUpperCase - calls calback for invalid agument', () => {
        const actual = toUpperCaseWithCb('', () => { })
        expect(actual).toBeUndefined()
    })

    it('ToUpperCase - calls calback for valid agument', () => {
        const actual = toUpperCaseWithCb('abc', () => { })
        expect(actual).toBe('ABC')
    })



    it('Calculate Complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        }

        const actual = calculateComplexity(someInfo as any)
        expect(actual).toBe(10)
    })


})