import { tagsInputAnatomy } from '@ark-ui/anatomy'
// eslint-disable-next-line testing-library/no-manual-cleanup
import { cleanup, render, screen } from '@testing-library/react/pure'
import user from '@testing-library/user-event'
import { TagsInput } from '../'
import { getExports, getParts } from '../../setup-test'
import { ComponentUnderTest } from './basic'

describe('TagsInput / Parts & Exports', () => {
  afterAll(() => {
    cleanup()
  })

  render(<ComponentUnderTest />)

  it.each(getParts(tagsInputAnatomy))('should render part! %s', async (part) => {
    // eslint-disable-next-line testing-library/no-node-access
    expect(document.querySelector(part)).toBeInTheDocument()
  })

  it.each(getExports(tagsInputAnatomy))('should export %s', async (part) => {
    expect(TagsInput[part]).toBeDefined()
  })
})

describe('TagsInput', () => {
  afterEach(() => {
    cleanup()
  })

  it('should allow to add a new item', async () => {
    render(<ComponentUnderTest />)

    const input = screen.getByPlaceholderText('Add tag')

    await user.type(input, 'angular')
    await user.keyboard('[Enter]')

    expect(screen.getByText('angular')).toBeInTheDocument()
  })

  it('should allow to add and delete a new item', async () => {
    render(<ComponentUnderTest />)

    const input = screen.getByPlaceholderText('Add tag')

    await user.type(input, 'angular')
    await user.keyboard('[Enter]')

    expect(screen.getByText('angular')).toBeInTheDocument()

    await user.keyboard('[ArrowLeft]')
    await user.keyboard('[Delete]')

    expect(screen.queryByText('angular')).not.toBeInTheDocument()
  })

  it('should allow to modify an added item', async () => {
    render(<ComponentUnderTest />)

    await user.type(screen.getByPlaceholderText('Add tag'), 'angular')
    await user.keyboard('[Enter]')

    expect(screen.getByText('angular')).toBeInTheDocument()

    await user.keyboard('[ArrowLeft]')
    await user.keyboard('[Enter]')
    await user.keyboard('[Backspace]')

    const input = screen.getByLabelText(
      'Editing tag angular. Press enter to save or escape to cancel.',
    )

    await user.clear(input)
    await user.type(input, 'svelte')
    await user.keyboard('[Enter]')

    expect(await screen.findByText('svelte')).toBeInTheDocument()
  })

  it('should clear all item when clear all button is clicked', async () => {
    render(<ComponentUnderTest />)

    expect(screen.getByText('react')).toBeInTheDocument()
    expect(screen.getByText('solid')).toBeInTheDocument()
    expect(screen.getByText('vue')).toBeInTheDocument()
    await user.click(screen.getByText('Clear all'))

    expect(screen.queryByText('react')).not.toBeInTheDocument()
    expect(screen.queryByText('solid')).not.toBeInTheDocument()
    expect(screen.queryByText('vue')).not.toBeInTheDocument()
  })
})
