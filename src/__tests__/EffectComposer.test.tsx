import { create } from '@react-three/test-renderer'
import { EffectComposer } from '../EffectComposer'

test('renders EffectComposer', async () => {
  const rendered = await create(<EffectComposer />)
  expect(toJSON()).toMatchSnapshot()
})