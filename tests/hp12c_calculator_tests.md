# HP12C Calculator Tests

This file contains comprehensive test cases for the HP12C calculator, addressing the following areas:

## 1. Calculator Hook Tests
- Test if the calculator initializes correctly.
- Test if the calculator recognizes inputs in RPN mode.

## 2. Financial Functions Tests
### a. Time Value of Money (TVM)
- Test for correct calculation of future value (FV).
- Test for correct calculation of present value (PV).
- Test for correct calculation of interest rate (I/Y).

### b. Cash Flow Analysis
- Test for Net Present Value (NPV).
- Test for Internal Rate of Return (IRR).

## 3. RPN Mode Tests
- Test stack behavior for push and pop operations.
- Test operations involving two and three numbers.

## 4. Component Tests
- Test keypad responsiveness.
- Test display output for various operations.

## Example Test Cases

### Test Case: Future Value Calculation
**Input:** PV = 1000, I/Y = 5, N = 10  
**Expected Output:** FV = 1628.89  

### Test Case: Present Value Calculation
**Input:** FV = 1628.89, I/Y = 5, N = 10  
**Expected Output:** PV = 1000.00  

### Test Case: Net Present Value Calculation
**Input:** Cash Flows = [100, 200, 300], I/Y = 10  
**Expected Output:** NPV = 404.24  

### Test Case: Internal Rate of Return Calculation
**Input:** Cash Flows = [-1000, 300, 400, 500], N = 3  
**Expected Output:** IRR = 18.66%  

Each section must be tested thoroughly to ensure the reliability and accuracy of the HP12C calculator.  
