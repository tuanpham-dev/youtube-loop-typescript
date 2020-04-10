import React from 'react'
import TestRenderer from 'react-test-renderer'
import Button from '../src/components/Button/Button'

describe('Button', () => {
  it('should render normal button', () => {
    const button = TestRenderer.create(
      <Button>Normal Button</Button>
    ).toJSON()
    expect(button).toMatchSnapshot()
  })

  it('should render color button', () => {
    const blueButton = TestRenderer.create(
      <Button color="blue">Blue Button</Button>
    ).toJSON()
    expect(blueButton).toMatchSnapshot()

    const redButton = TestRenderer.create(
      <Button color="red">Red Button</Button>
    ).toJSON()
    expect(redButton).toMatchSnapshot()
  })

  it('should handle onClick function', () => {
    const button = TestRenderer.create(
      <Button onClick={() => console.log('clicked')}>onClick Button</Button>
    ).toJSON()
    expect(button).toMatchSnapshot()
  })
})