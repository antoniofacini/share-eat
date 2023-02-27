import { render } from '@testing-library/react'
import PlaceList from '..'
import { mockData } from '../../../../../public/mock-data'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    }
  },
}))

describe('<PlaceList />', () => {
  it('should render PlaceList component', () => {
    const wrapper = render(<PlaceList places={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })
})
