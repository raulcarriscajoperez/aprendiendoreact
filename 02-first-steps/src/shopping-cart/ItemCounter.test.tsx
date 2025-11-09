import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe('ItemCounter', () => {
  test('shoud render with default values', () =>{

    const productName = "Test item"

    render(<ItemCounter productName={productName}/>)

    expect(screen.getByText(productName)).toBeDefined();
    expect(screen.getByText(productName)).not.toBeNull();
  })

    test('shoud render with custom quantity', () =>{

    const productName = "Test item"
    const quantity = 20;

    render(<ItemCounter productName={productName} quantity={quantity}/>)

    expect(screen.getByText(quantity)).toBeDefined();
  })

  test('should decrese counter when - is pressed', () => {
    render(<ItemCounter productName="Test item" quantity={2} />)

    const [buttonsDescrese] = screen.getAllByRole('button')
    fireEvent.click(buttonsDescrese)
    expect(screen.getByText('1')).toBeDefined()

  })

    test('should increase counter when + is pressed', () => {
    render(<ItemCounter productName="Test item" quantity={2} />)

    const [buttonsDescrese, buttonsIncrease] = screen.getAllByRole('button')
    fireEvent.click(buttonsIncrease)
    expect(screen.getByText('3')).toBeDefined()

  })
      test('should not decrese when counter is 0', () => {
    render(<ItemCounter productName="Test item" quantity={0} />)

    const [buttonsDescrese] = screen.getAllByRole('button')
    fireEvent.click(buttonsDescrese)
    expect(screen.getByText(0)).toBeDefined();    
  })

  test('should change color to red when quantity is 0', ()=> {
    const quantity = 0;
    const productName = 'Test item'
    render(<ItemCounter productName={productName} quantity={quantity}/>)

    const itemText = screen.getByText(productName)
    expect(itemText.style.color).toBe('red')

  })

    test('should change color to black when quantity is >0', ()=> {
    const quantity = 1;
    const productName = 'Test item'
    render(<ItemCounter productName={productName} quantity={quantity}/>)

    const itemText = screen.getByText(productName)
    expect(itemText.style.color).toBe('black')

  })
})