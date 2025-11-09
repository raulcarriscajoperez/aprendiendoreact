import { describe, expect, test } from 'vitest';
import { add, divide, multiply, subtract } from './math.helpers';

describe('add', () => {

    test('shoud add two possitive numbers', () => {

        //! 1. Arrange
        const a = 2;
        const b = 3;
        //! 2. Act
        const result = add(a, b);
        //! 3. Assert
        expect(result).toBe(a + b)
    });
    })

    describe('subtract', () => {

        test('shoud add two  numbers', () => {

            //! 1. Arrange
            const a = 2;
            const b = 3;
            //! 2. Act
            const result = subtract(a, b);
            //! 3. Assert
            expect(result).toBe(a - b)
        })

            test('shoud add two  numbers', () => {

            //! 1. Arrange
            const a = -2;
            const b = -3;
            //! 2. Act
            const result = subtract(a, b);
            //! 3. Assert
            expect(result).toBe(a-b)
        })
    });

        describe('multiplication', () => {

        test('shoud add two numbers', () => {

            //! 1. Arrange
            const a = 2;
            const b = 3;
            //! 2. Act
            const result = multiply(a, b);
            //! 3. Assert
            expect(result).toBe(a * b)
        })

            test('shoud add two  numbers', () => {

            //! 1. Arrange
            const a = -2;
            const b = -3;
            //! 2. Act
            const result = multiply(a, b);
            //! 3. Assert
            expect(result).toBe(a*b)
        })
    })

        describe('divide', () => {

        test('shoud add two numbers', () => {

            //! 1. Arrange
            const a = 2;
            const b = 3;
            //! 2. Act
            const result = divide(a, b);
            //! 3. Assert
            expect(result).toBe(a / b)
        })
    });
    



