import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
import MessageComponent from '@/components/MessageComponent.vue'

describe('MessageComponent.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(MessageComponent, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
